#!/usr/bin/env node
/**
 * scripts/auto-post.js  v2
 * 자동 포스팅 — Claude Code CLI (claude --print) 로컬 실행
 *
 * slot=morning  (7시)  : 트렌드 2개(WebSearch) + 큐 허브 1개
 * slot=noon     (12시) : 큐 허브 2개 + 상품추천 2개
 * slot=evening  (18시) : 큐 고단가 3개 → 커밋&푸시
 *
 * API 키 불필요. 로컬 Claude Code CLI (구독) 사용.
 * Claude CLI 올바른 플래그: --print --output-format text [--allowedTools]
 */

'use strict'
const fs   = require('fs')
const path = require('path')
const { spawnSync, execSync } = require('child_process')
const { generateThumbnail } = require('./generate-thumbnail')

const ROOT       = path.resolve(__dirname, '..')
const QUEUE_FILE = path.join(__dirname, 'auto-post-queue.json')
const LOG_FILE   = path.join(ROOT, 'logs', 'autopost.log')
const CLAUDE_BIN = '/opt/homebrew/bin/claude'
const TODAY      = new Date().toISOString().slice(0, 10)

// ─── CLI 인자 ─────────────────────────────────────────────────
const argv     = process.argv.slice(2)
const slotArg  = argv[argv.indexOf('--slot')  + 1] || 'morning'
const dryRun   = argv.includes('--dry-run')

// ─── 로깅 ─────────────────────────────────────────────────────
const logsDir = path.join(ROOT, 'logs')
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true })

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`
  console.log(line)
  fs.appendFileSync(LOG_FILE, line + '\n')
}

// ─── 큐 관리 ──────────────────────────────────────────────────
function loadQueue() {
  return JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'))
}
function saveQueue(q) {
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(q, null, 2))
}
function nextPending(queue, slot, count) {
  return queue.posts
    .filter(p => p.slot === slot && p.status === 'pending')
    .sort((a, b) => (a.priority || 99) - (b.priority || 99))
    .slice(0, count)
}

// ─── 이미지 수집 ──────────────────────────────────────────────
async function fetchImages(post) {
  const TOUR_KEY  = process.env.TOUR_API_KEY_ENCODED
  const UNSPLASH  = process.env.UNSPLASH_ACCESS_KEY
  const TOUR_BASE = process.env.TOUR_API_ENDPOINT || 'https://apis.data.go.kr/B551011/KorService2'

  if (post.imageSource === 'tourapi' && post.imageQuery && TOUR_KEY) {
    try {
      const url = `${TOUR_BASE}/searchKeyword2?serviceKey=${TOUR_KEY}` +
        `&keyword=${encodeURIComponent(post.imageQuery)}&MobileOS=ETC&MobileApp=travel-ambitstock` +
        `&_type=json&numOfRows=3&pageNo=1` +
        (post.contentTypeId ? `&contentTypeId=${post.contentTypeId}` : '')
      const sd  = await (await fetch(url, { headers: { Accept: 'application/json' } })).json()
      const items = sd?.response?.body?.items?.item
      if (!items) return null
      const hit = Array.isArray(items) ? items[0] : items
      const imgUrl = `${TOUR_BASE}/detailImage2?serviceKey=${TOUR_KEY}` +
        `&contentId=${hit.contentid}&imageYN=Y&MobileOS=ETC&MobileApp=travel-ambitstock` +
        `&_type=json&numOfRows=6&pageNo=1`
      const id   = await (await fetch(imgUrl, { headers: { Accept: 'application/json' } })).json()
      const imgs = id?.response?.body?.items?.item
      const gal  = (Array.isArray(imgs) ? imgs : imgs ? [imgs] : []).slice(0, 5)
      return {
        main: hit.firstimage || gal[0]?.originimgurl,
        gallery: gal.map(im => ({ url: im.originimgurl, caption: im.imgname || post.imageQuery })),
        source: '한국관광공사 TourAPI', license: '공공누리 1유형',
        credit: '한국관광공사', sourceUrl: 'https://www.visitkorea.or.kr/',
      }
    } catch (e) { log(`TourAPI 실패 (${post.slug}): ${e.message}`); return null }
  }

  if (post.imageQuery && UNSPLASH) {
    try {
      await new Promise(r => setTimeout(r, 800))
      const url  = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(post.imageQuery)}&per_page=4&orientation=landscape&content_filter=high`
      const data = await (await fetch(url, { headers: { Authorization: `Client-ID ${UNSPLASH}`, 'Accept-Version': 'v1' } })).json()
      if (!data.results?.length) return null
      const imgs = data.results
      return {
        main: `${imgs[0].urls.regular}&w=1200`,
        gallery: imgs.slice(0, 3).map(img => ({
          url: `${img.urls.regular}&w=1200`,
          caption: img.alt_description || post.imageQuery,
        })),
        source: 'Unsplash', license: 'Unsplash License',
        credit: `${imgs[0].user.name} on Unsplash`,
        sourceUrl: `${imgs[0].user.links.html}?utm_source=travel.ambitstock&utm_medium=referral`,
      }
    } catch (e) { log(`Unsplash 실패 (${post.slug}): ${e.message}`); return null }
  }
  return null
}

// ─── 시스템 프롬프트 ──────────────────────────────────────────
const SYSTEM_PROMPT = `You are a Korean travel content writer for travel.ambitstock.com (트립스팟 에디터).
Output ONLY valid JavaScript — no markdown fences, no explanations, no text before or after.

OUTPUT FORMAT:
module.exports = {
  sections: [
    { type: 'intro', html: \`...\` },
    ...
  ]
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION TYPES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
intro      : { type:'intro', html:'<p>...</p>' }
h2         : { type:'h2', id:'en-slug', text:'한국어 제목' }
h3         : { type:'h3', id:'en-slug', text:'소제목' }
body       : { type:'body', html:'<ul><li><strong>항목</strong>: 내용</li></ul>' }
image      : { type:'image', src:'URL', alt:'설명', caption:'캡션', imageSource:'출처', imageLicense:'라이선스', imageCredit:'크레딧', imageSourceUrl:'URL' }
gallery    : { type:'gallery', images:[{url:'',caption:''}], imageSource:'', imageLicense:'', imageCredit:'', imageSourceUrl:'' }
callout    : { type:'callout', html:'...' }
info       : { type:'info', title:'제목', html:'...' }
warning    : { type:'warning', title:'주의', html:'...' }
risk       : { type:'risk', title:'주의사항', html:'...' }
faq        : { type:'faq', items:[{q:'?',a:'.'}] }
hotelsCombinedCTA: { type:'hotelsCombinedCTA', text:'버튼', subText:'설명', href:'#' }
productSlot: { type:'productSlot', productKey:'키', text:'설명' }
sources    : { type:'sources', items:[{label:'',url:'',org:'',accessedAt:'${TODAY}'}] }
disclaimer : { type:'disclaimer' }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OPERATOR VOICE (중요 — AI 냄새 제거)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Level 1 (사실 전달): "비자 신청은 출발 3주 전까지 완료해야 합니다."
Level 2 (경험 어투): "처음 방문했을 때 예상보다 숙박비가 높아서 당황했는데, 이 팁을 알았다면 30% 절약할 수 있었을 것 같습니다."
Level 3 (현지인 시선): "현지인들이 실제로 이용하는 골목 식당은 관광지 메인 스트리트에서 한 블록만 들어가면 나옵니다."

각 포스트에 Level 2~3을 최소 2회 사용. 모든 문장이 Level 1이면 반드시 수정.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
H2 제목 다양성 패턴 (13가지 — 반복 금지)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. 핵심 정보형: "[장소명], 이것만 알면 됩니다"
2. 질문형: "왜 [여행지]가 요즘 이렇게 인기인가요?"
3. 비교형: "[A] vs [B], 뭐가 더 나을까요?"
4. 숫자 나열형: "[장소명] 여행 전 반드시 챙겨야 할 7가지"
5. 시간형: "처음 [여행지] 가는 분이라면 이 순서대로"
6. 역설형: "비싸 보이지만 실은 가성비 최강인 이유"
7. 공감형: "[여행지] 가보신 분들이라면 공감하는 것들"
8. 계절형: "[계절]에 가야 하는 [장소명] 이유"
9. 로컬 팁형: "현지인이 알려준 [장소명] 진짜 숨은 명소"
10. 주의사항형: "[여행지] 가기 전 꼭 알아야 할 주의사항"
11. 비용 중심형: "[여행지] 여행 예산, 현실적으로 얼마 드나요?"
12. 편의성형: "[공항/교통수단]에서 [장소명]까지 가장 빠른 방법"
13. 마무리형: "[여행지] 여행을 더욱 완벽하게 만드는 마지막 팁"

동일 포스트 내에서 같은 패턴 2회 이상 사용 금지.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTRO 5가지 패턴 (매 포스트 다르게)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
패턴 A (질문 시작): "혹시 [여행지]를 여행 계획에 넣어두셨나요? 막상 준비를 시작하면..."
패턴 B (통계 시작): "[여행지]를 찾는 한국인 여행자가 [기간] 동안 [숫자]% 증가했습니다..."
패턴 C (역발상 시작): "많은 분이 [여행지] 하면 [클리셰]를 떠올리지만, 실제로는 전혀 다릅니다..."
패턴 D (계절/시기 시작): "[계절/시기]가 되면 어김없이 [여행지] 이야기가 나오는 이유가 있습니다..."
패턴 E (경험 시작): "처음 [여행지]를 방문했을 때 가장 먼저 눈에 띈 건 [구체적 묘사]였습니다..."

Intro는 반드시 3~4 문단, 각 문단 3~5문장. 마지막 문단은 "이 글에서는..."으로 본문 예고.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENDING VARIATION (글 마무리 다양화)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
마지막 H2 이후 sources 전에 callout을 하나 추가. 아래 중 1개 선택:
- 여행 전 최종 체크리스트 (불릿 5~7개)
- 편집자 한마디 (Level 2~3 어투로 개인적 소감 2~3문장)
- "이런 분께 추천합니다" (3가지 여행자 유형)
- 계절별 베스트 타이밍 요약 (표)
- 예산별 여행 플랜 요약 (표)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXTERNAL CITATION REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- 모든 포스트: 최소 2개 공식 출처 (sources 섹션에 명시)
- 비자·안전 정보: 반드시 외교부 0404.go.kr 포함
- 호텔 가격·평점: 호텔스컴바인 출처 명시
- 환율 언급 시: 한국은행 ECOS 또는 하나은행 고시환율 명시
- 한국 관광지: 한국관광공사 visitkorea.or.kr 포함
- "약 X만 원" 형식 사용, 단정 금지
- 접근 날짜: accessedAt: '${TODAY}'

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALITY STANDARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- H2 최소 10개 (호텔 12개, 국가 10개, 가이드 8개)
- 한국어 본문 최소 5000자 (호텔 6000자)
- Intro: 3~4 문단, 각 3~5문장
- FAQ: 정확히 6개 (호텔), 5개 (나머지)
- 표 스타일: <table style="width:100%;border-collapse:collapse;font-size:14px">
- 셀 스타일: style="padding:8px 10px;border:1px solid #CBD5E1"
- Template literals에서 내부 백틱: \\\`로 이스케이프
- 숫자는 한국식: "약 15만 원" not "약 150,000원" (단, 표 안에서는 숫자만)
- 계절/월 표현: "봄(3~5월)" 형식
- 교통 시간: "약 XX분 소요" 형식

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
16-CHECK VERIFICATION (출력 전 자체 검토)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
출력 전 아래 16개 항목을 반드시 확인:
 [1] module.exports = { sections: [...] } 형식인가?
 [2] intro 섹션이 첫 번째인가?
 [3] H2가 최소 기준 이상인가?
 [4] 한국어 분량이 최소 기준 이상인가?
 [5] FAQ가 정확한 개수인가?
 [6] sources 섹션이 있고 출처가 2개 이상인가?
 [7] disclaimer 섹션이 마지막인가?
 [8] 모든 HTML 태그가 닫혀있는가?
 [9] 단정 표현("최저가 보장", "100% 안전" 등)이 없는가?
[10] "약", "기준 시점" 등 변동성 표현이 가격/환율에 붙어있는가?
[11] H2 제목이 13가지 패턴에서 다양하게 선택됐는가?
[12] Intro가 5가지 패턴 중 하나로 시작하는가?
[13] Level 2~3 운영자 어투가 최소 2회 사용됐는가?
[14] 마지막 H2 후 callout(마무리)이 추가됐는가?
[15] 백틱 이스케이프(\\\`)가 올바르게 처리됐는가?
[16] 호텔 포스트라면 hotelsCombinedCTA가 포함됐는가?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENTITY TEMPLATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
hotel    : intro(패턴C/D)→h2:차별점→h2:객실(표)→h2:다이닝→h2:수영장·스파→h2:시설·편의→h2:위치·교통→h2:주변명소→h2:시즌별요금(표)→h2:예약팁→h2:이런분께→callout→faq(6)→hotelsCombinedCTA→sources→disclaimer
region   : intro(패턴A/B)→h2:지역소개→h2:필수명소×3→h2:현지음식→h2:교통·이동→h2:예산계획(표)→h2:계절추천→h2:숙박지역→h2:현지팁→callout→faq(5)→sources→disclaimer
country  : intro(패턴B/E)→h2:국가개요→h2:추천지역×3→h2:비자·입국→h2:현지음식→h2:교통→h2:예산(표)→h2:안전·주의→h2:최적시기→callout→faq(6)→sources→disclaimer
guide    : intro(패턴C/D)→h2:why→h2:준비단계→h2:비용(표)→h2:현장팁→h2:실수방지→h2:체크리스트→callout→faq(5)→warning→sources→disclaimer
theme    : intro(패턴A/E)→h2:테마소개→h2:추천지×3→h2:여행팁→h2:예산(표)→h2:시즌→callout→faq(5)→sources→disclaimer
situation: intro(패턴B/C)→h2:상황분석→h2:추천코스×3→h2:체크리스트→h2:예산(표)→h2:주의사항→callout→faq(5)→sources→disclaimer
addon    : intro(패턴D/E)→h2:왜필요한가→h2:선택기준→h2:추천상품×3→h2:구매가이드→productSlot×3→callout→faq(5)→sources→disclaimer
highRPM  : intro(패턴B/C)→h2:개요→h2:상세×4→h2:비교(표)→h2:팁→h2:예산→callout→faq(6)→sources→disclaimer`

// ─── Claude CLI 실행 ──────────────────────────────────────────
function runClaude(userPrompt, { useWebSearch = false } = {}) {
  if (!fs.existsSync(CLAUDE_BIN)) {
    throw new Error(`Claude CLI 없음: ${CLAUDE_BIN}`)
  }

  const fullPrompt = SYSTEM_PROMPT + '\n\n---\n\n' + userPrompt

  const flags = [
    '--print',
    '--output-format', 'text',
  ]
  if (useWebSearch) {
    flags.push('--allowedTools', 'WebSearch')
  } else {
    // 도구 없이 순수 텍스트 생성 (빠름)
    flags.push('--allowedTools', 'Bash(echo)')
  }

  log(`  claude 실행 (webSearch=${useWebSearch})`)

  const result = spawnSync(CLAUDE_BIN, flags, {
    input: fullPrompt,
    encoding: 'utf8',
    timeout: 300000,
    maxBuffer: 20 * 1024 * 1024,
    env: {
      ...process.env,
      HOME: process.env.HOME || '/Users/lee',
      PATH: '/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin',
    },
  })

  if (result.error) throw result.error
  if (result.status !== 0) {
    const err = (result.stderr || '').trim().slice(0, 500)
    throw new Error(`claude 종료 코드 ${result.status}: ${err}`)
  }

  let content = (result.stdout || '').trim()
  // 마크다운 코드펜스 제거
  content = content
    .replace(/^```(?:javascript|js)?\s*\n?/m, '')
    .replace(/\n?```\s*$/m, '')
    .trim()
  return content
}

// ─── 포스트 검증 ──────────────────────────────────────────────
function validatePost(content, slug) {
  if (!content.includes('module.exports')) throw new Error('module.exports 없음')
  if (!content.includes('sections'))       throw new Error('sections 없음')
  if (!/type:\s*['"]intro['"]/.test(content)) throw new Error('intro 섹션 없음')
  const tmpFile = path.join(ROOT, `_tmp_${slug}_${Date.now()}.js`)
  try {
    fs.writeFileSync(tmpFile, content)
    const r = spawnSync('node', ['--check', tmpFile], { encoding: 'utf8' })
    if (r.status !== 0) throw new Error(r.stderr || '문법 오류')
  } finally {
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile)
  }
  return true
}

// ─── 파일 저장 ────────────────────────────────────────────────
function savePost(entity, slug, content) {
  const dir = path.join(ROOT, 'posts', entity + 's')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  const file = path.join(dir, `${slug}.js`)
  fs.writeFileSync(file, content)
  log(`  저장: posts/${entity}s/${slug}.js`)
  return file
}

// ─── 썸네일 생성 ──────────────────────────────────────────────
async function generatePostThumbnail(post, imageUrl) {
  try {
    const subtitle = post.meta?.hotelName || post.meta?.regionName || post.meta?.countryName || ''
    await generateThumbnail({
      entity: post.entity,
      slug: post.slug,
      title: post.title || post.meta?.title || post.slug,
      subtitle,
      imageUrl: imageUrl || null,
    })
    log(`  썸네일 생성: public/og/${post.entity}-${post.slug}.png`)
  } catch (e) {
    log(`  썸네일 생성 실패 (무시): ${e.message}`)
  }
}

// ─── 데이터 파일 업데이트 ─────────────────────────────────────
// 엔티티별 필수 필드 — 누락 시 sitemap/렌더러 TypeError 방지
const REQUIRED_FIELDS = {
  hotel:     ['id','slug','title','description','summary','publishedAt','updatedAt','hotelName','gallery','hotelsCombinedDeepLink'],
  theme:     ['id','slug','title','description','summary','publishedAt','updatedAt','name','icon','category'],
  guide:     ['id','slug','title','description','publishedAt','updatedAt'],
  situation: ['id','slug','title','description','publishedAt','updatedAt'],
  region:    ['id','slug','regionName','countrySlug','publishedAt','updatedAt'],
  country:   ['id','slug','countryName','publishedAt','updatedAt'],
  compare:   ['id','slug','title','description','publishedAt','updatedAt'],
  addon:     ['id','slug','title','description','publishedAt','updatedAt'],
  tool:      ['id','slug','title','description','publishedAt','updatedAt'],
}
// 엔티티별 자동 기본값 (meta에 없으면 채움)
const DEFAULT_FIELDS = {
  hotel:     { gallery: [], hotelsCombinedDeepLink: '' },
  theme:     { name: null, icon: '🌍', category: 'theme', ymylLevel: 'C' },
  guide:     { ymylLevel: 'B' },
  situation: { ymylLevel: 'C' },
}

function appendToDataFile(entity, meta) {
  const MAP = {
    hotel: 'hotels.js', region: 'regions.js', country: 'countries.js',
    theme: 'themes.js', guide: 'guides.js', situation: 'situations.js',
    compare: 'compares.js', addon: 'addons.js', tool: 'tools.js',
  }
  const filename = MAP[entity]
  if (!filename) return
  const filepath = path.join(ROOT, 'data', filename)
  if (!fs.existsSync(filepath)) return
  const content = fs.readFileSync(filepath, 'utf8')
  if (content.includes(`slug: '${meta.slug}'`)) { log(`  이미 등록: ${meta.slug}`); return }

  // 필수 필드 검증 — 누락 필드는 경고 후 기본값으로 채움
  const required = REQUIRED_FIELDS[entity] || ['id','slug','title','description','publishedAt','updatedAt']
  const defaults = DEFAULT_FIELDS[entity] || {}
  const missing = required.filter(f => meta[f] === undefined && defaults[f] === undefined)
  if (missing.length > 0) {
    log(`  ⚠ ${entity}/${meta.slug} 누락 필드: ${missing.join(', ')} — 빈값으로 채움`)
  }
  // 기본값 적용 (없는 필드만) — 값 타입 그대로 유지 (string/array/boolean 등)
  const filledMeta = { ...meta }
  for (const [k, v] of Object.entries(defaults)) {
    if (filledMeta[k] === undefined) filledMeta[k] = v === null ? (meta.title || meta.slug) : v
  }
  for (const f of missing) {
    if (filledMeta[f] === undefined) filledMeta[f] = ''
  }

  const closeIdx = content.lastIndexOf('\n]\n')
  if (closeIdx === -1) return
  const entry = Object.entries(filledMeta)
    .filter(([, v]) => v !== null && v !== undefined)
    .map(([k, v]) => `    ${k}: ${typeof v === 'object' ? JSON.stringify(v) : typeof v === 'string' ? `'${v.replace(/'/g, "\\'")}'` : v}`)
    .join(',\n')
  const entryBlock = `  {\n${entry}\n  }`
  const contentBefore = content.slice(0, closeIdx)
  // 마지막 항목에 이미 trailing comma가 있으면 추가 쉼표 생략 (이중쉼표 방지)
  const separator = /,\s*$/.test(contentBefore) ? '\n' : ',\n'
  const newContent = contentBefore + separator + entryBlock + content.slice(closeIdx)
  fs.writeFileSync(filepath, newContent)

  // 이중 쉼표·문법 오류 즉시 검증 — 실패 시 롤백
  const check = spawnSync('node', ['--check', filepath], { encoding: 'utf8' })
  if (check.status !== 0) {
    log(`  ⚠ data/${filename} 문법 오류 → 롤백`)
    fs.writeFileSync(filepath, content)
    throw new Error(`data/${filename} 문법 오류: ${check.stderr?.slice(0, 200)}`)
  }
  log(`  data/${filename} → ${meta.slug} 추가`)
}

// ─── 쿠팡 상품 등록 ───────────────────────────────────────────
function registerProductsFromPost(post) {
  if (!post.products || !post.products.length) return
  const prodFile = path.join(ROOT, 'data', 'coupang-products.json')
  let products = []
  if (fs.existsSync(prodFile)) {
    try { products = JSON.parse(fs.readFileSync(prodFile, 'utf8')) } catch (_) {}
  }
  let changed = false
  for (const p of post.products) {
    if (!products.find(x => x.productKey === p.productKey)) {
      products.push({
        productKey: p.productKey,
        productName: p.productName,
        category: p.category || post.entity,
        coupangUrl: '',    // 어드민에서 등록
        postSlugs: [post.slug],
        notes: '',
      })
      changed = true
      log(`  상품 등록: ${p.productKey}`)
    } else {
      // 이미 있으면 postSlugs에만 추가
      const existing = products.find(x => x.productKey === p.productKey)
      if (!existing.postSlugs.includes(post.slug)) {
        existing.postSlugs.push(post.slug)
        changed = true
      }
    }
  }
  if (changed) fs.writeFileSync(prodFile, JSON.stringify(products, null, 2))
}

// ─── 큐 기반 포스트 생성 ──────────────────────────────────────
async function generateQueuePost(post) {
  const images = await fetchImages(post)
  log(`  이미지: ${images ? (images.gallery?.length || 0) + '장' : '없음'}`)

  const imgBlock = images
    ? `MainImage: ${images.main || '없음'}
ImageSource: ${images.source} | ${images.license} | ${images.credit}
ImageSourceUrl: ${images.sourceUrl}
GalleryImages:
${(images.gallery || []).map((g, i) => `  ${i+1}. url="${g.url}" caption="${g.caption || ''}"`).join('\n')}`
    : 'ImageSource: (이미지 없음, image/gallery 섹션 제외)'

  const metaBlock = post.meta
    ? Object.entries(post.meta)
        .filter(([k, v]) => v !== null && v !== undefined && k !== 'id')
        .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`)
        .join('\n')
    : ''

  const userPrompt = [
    `Entity: ${post.entity}`,
    `Slug: ${post.slug}`,
    `Title: ${post.title}`,
    `Keywords: ${(post.keywords || []).join(', ')}`,
    metaBlock,
    imgBlock,
    post.extraInstructions || '',
    ``,
    `Write a complete module.exports = { sections: [...] } for this page.`,
    `accessedAt date: ${TODAY}`,
  ].filter(Boolean).join('\n')

  const content = runClaude(userPrompt, { useWebSearch: false })
  return { content, mainImageUrl: images?.main || null }
}

// ─── 트렌드 포스트 생성 (WebSearch) ───────────────────────────
async function generateTrendPost(index) {
  const topicPrompts = [
    '지금 한국에서 가장 인기 있는 해외여행 프로모션이나 항공·호텔 특가 이벤트를 검색하라. 결과를 바탕으로 여행자들이 실제 활용할 수 있는 정보를 담은 포스팅 1개를 작성하라.',
    '지금 트렌딩 중인 한국발 인기 해외여행지 또는 여행 트렌드(해외 호텔 오픈, 항공 신규노선, 여행 특집 이벤트 등)를 검색하라. 그것에 대한 여행 정보 포스팅 1개를 작성하라.',
  ]

  const searchQuery = `아래 주제로 최신 정보를 WebSearch로 먼저 검색한 후, 검색 결과를 바탕으로 포스팅을 작성하라.

검색 주제: ${topicPrompts[index % 2]}

포스팅 작성 조건:
- Entity: guide
- 슬러그: trend-${TODAY.replace(/-/g, '')}-${index + 1}
- 오늘 날짜 기준 실제 이벤트/프로모션 정보 포함
- intro 섹션에 핵심 정보 요약
- 최소 6개 H2 섹션
- 실제 여행사/항공사 이름은 사용 가능 (특정 가격 단정 금지, "약" 사용)
- accessedAt: ${TODAY}

WebSearch 검색 후 반드시 module.exports = { sections: [...] } 형식으로만 출력하라.`

  return {
    slug: `trend-${TODAY.replace(/-/g, '')}-${index + 1}`,
    entity: 'guide',
    content: runClaude(searchQuery, { useWebSearch: true }),
    meta: {
      slug: `trend-${TODAY.replace(/-/g, '')}-${index + 1}`,
      title: `오늘의 여행 트렌드 ${index + 1} (${TODAY})`,
      category: 'guide',
      publishedAt: TODAY,
      updatedAt: TODAY,
    },
  }
}

// ─── Git 커밋 & 푸시 ──────────────────────────────────────────
function gitPush(slugs) {
  try {
    execSync('git add -A', { cwd: ROOT, stdio: 'pipe' })
    const msg = `auto(${slotArg}): ${TODAY} [${slugs.join(', ')}]`
    execSync(`git commit -m "${msg}" -m "Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"`, { cwd: ROOT, stdio: 'pipe' })
    execSync('git push', { cwd: ROOT, stdio: 'pipe' })
    log(`Git push 완료: ${slugs.join(', ')}`)
  } catch (e) {
    log(`Git 오류: ${e.message.slice(0, 300)}`)
  }
}

// ─── Prebuild ─────────────────────────────────────────────────
function prebuild() {
  try {
    execSync('npm run prebuild', { cwd: ROOT, stdio: 'pipe' })
    log('Prebuild 완료')
  } catch (e) {
    log(`Prebuild 오류 (무시): ${e.message.slice(0, 200)}`)
  }
}

// ─── 슬롯별 실행 ──────────────────────────────────────────────
async function runMorning() {
  log('=== 7시 morning 시작 ===')
  const generated = []
  const queue = loadQueue()

  // 1. 트렌드 포스팅 2개 (WebSearch)
  for (let i = 0; i < 2; i++) {
    try {
      log(`▶ 트렌드 포스팅 ${i + 1}/2 (WebSearch)`)
      if (dryRun) { log('  [DRY-RUN] 건너뜀'); continue }
      const { slug, entity, content, meta } = await generateTrendPost(i)
      if (!content || content.length < 500) throw new Error(`내용 너무 짧음`)
      validatePost(content, slug)
      savePost(entity, slug, content)
      appendToDataFile(entity, meta)
      generated.push(slug)
      log(`  ✅ 트렌드 완료: ${slug}`)
      await new Promise(r => setTimeout(r, 2000))
    } catch (e) {
      log(`  ❌ 트렌드 오류 ${i + 1}: ${e.message}`)
    }
  }

  // 2. 큐에서 허브 포스팅 1개
  const hubPosts = nextPending(queue, 'morning', 1)
  for (const post of hubPosts) {
    try {
      log(`▶ 허브 포스팅: ${post.slug} (${post.entity})`)
      if (dryRun) { log('  [DRY-RUN] 건너뜀'); continue }
      const { content, mainImageUrl } = await generateQueuePost(post)
      if (!content || content.length < 500) throw new Error(`내용 너무 짧음`)
      validatePost(content, post.slug)
      savePost(post.entity, post.slug, content)
      if (post.meta) appendToDataFile(post.entity, { ...post.meta, publishedAt: TODAY, updatedAt: TODAY })
      await generatePostThumbnail(post, mainImageUrl)
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'done'; qi.generatedAt = new Date().toISOString() }
      saveQueue(queue)
      generated.push(post.slug)
      log(`  ✅ 허브 완료: ${post.slug}`)
      await new Promise(r => setTimeout(r, 2000))
    } catch (e) {
      log(`  ❌ 허브 오류 [${post.slug}]: ${e.message}`)
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'error'; qi.error = e.message; qi.errorAt = new Date().toISOString() }
      saveQueue(queue)
    }
  }

  // morning: 파일만 생성, prebuild/push는 evening에서 일괄 처리
  log(`=== morning 완료: ${generated.length}개 (push 없음 — evening에서 일괄) ===`)
  return generated
}

async function runNoon() {
  log('=== 12시 noon 시작 ===')
  const generated = []
  const queue = loadQueue()

  // 1. 허브 포스팅 2개
  const hubPosts = nextPending(queue, 'noon', 2)
  for (const post of hubPosts) {
    try {
      log(`▶ 허브: ${post.slug}`)
      if (dryRun) { log('  [DRY-RUN] 건너뜀'); continue }
      const { content, mainImageUrl } = await generateQueuePost(post)
      if (!content || content.length < 500) throw new Error(`내용 너무 짧음`)
      validatePost(content, post.slug)
      savePost(post.entity, post.slug, content)
      if (post.meta) appendToDataFile(post.entity, { ...post.meta, publishedAt: TODAY, updatedAt: TODAY })
      registerProductsFromPost(post)
      await generatePostThumbnail(post, mainImageUrl)
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'done'; qi.generatedAt = new Date().toISOString() }
      saveQueue(queue)
      generated.push(post.slug)
      log(`  ✅ 완료: ${post.slug}`)
      await new Promise(r => setTimeout(r, 2000))
    } catch (e) {
      log(`  ❌ 오류 [${post.slug}]: ${e.message}`)
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'error'; qi.error = e.message; qi.errorAt = new Date().toISOString() }
      saveQueue(queue)
    }
  }

  // 2. 상품 추천 포스팅 2개 (addon slot)
  const addonPosts = nextPending(queue, 'noon-addon', 2)
  for (const post of addonPosts) {
    try {
      log(`▶ 상품 추천: ${post.slug}`)
      if (dryRun) { log('  [DRY-RUN] 건너뜀'); continue }
      const { content, mainImageUrl } = await generateQueuePost(post)
      if (!content || content.length < 500) throw new Error(`내용 너무 짧음`)
      validatePost(content, post.slug)
      savePost(post.entity, post.slug, content)
      if (post.meta) appendToDataFile(post.entity, { ...post.meta, publishedAt: TODAY, updatedAt: TODAY })
      registerProductsFromPost(post)
      await generatePostThumbnail(post, mainImageUrl)
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'done'; qi.generatedAt = new Date().toISOString() }
      saveQueue(queue)
      generated.push(post.slug)
      log(`  ✅ 완료: ${post.slug}`)
      await new Promise(r => setTimeout(r, 2000))
    } catch (e) {
      log(`  ❌ 오류 [${post.slug}]: ${e.message}`)
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'error'; qi.error = e.message; qi.errorAt = new Date().toISOString() }
      saveQueue(queue)
    }
  }

  // noon: 파일만 생성, prebuild/push는 evening에서 일괄 처리
  log(`=== noon 완료: ${generated.length}개 (push 없음 — evening에서 일괄) ===`)
  return generated
}

async function runEvening() {
  log('=== 18시 evening 시작 ===')
  const generated = []
  const queue = loadQueue()

  const posts = nextPending(queue, 'evening', 3)
  for (const post of posts) {
    try {
      log(`▶ 고단가 키워드: ${post.slug}`)
      if (dryRun) { log('  [DRY-RUN] 건너뜀'); continue }
      const { content, mainImageUrl } = await generateQueuePost(post)
      if (!content || content.length < 500) throw new Error(`내용 너무 짧음`)
      validatePost(content, post.slug)
      savePost(post.entity, post.slug, content)
      if (post.meta) appendToDataFile(post.entity, { ...post.meta, publishedAt: TODAY, updatedAt: TODAY })
      await generatePostThumbnail(post, mainImageUrl)
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'done'; qi.generatedAt = new Date().toISOString() }
      saveQueue(queue)
      generated.push(post.slug)
      log(`  ✅ 완료: ${post.slug}`)
      await new Promise(r => setTimeout(r, 2000))
    } catch (e) {
      log(`  ❌ 오류 [${post.slug}]: ${e.message}`)
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'error'; qi.error = e.message; qi.errorAt = new Date().toISOString() }
      saveQueue(queue)
    }
  }

  // evening: 하루 종일 생성된 모든 파일을 한번에 prebuild + 커밋 + 푸시
  prebuild()
  gitPush(generated.length > 0 ? generated : [`daily-${TODAY}`])
  log(`=== evening 완료: ${generated.length}개 생성 — sitemap 갱신 + 1회 commit·push ===`)
  return generated
}

// ─── 메인 ─────────────────────────────────────────────────────
async function main() {
  log(`=== 자동 포스팅 [${slotArg}] dryRun=${dryRun} ===`)

  if (!fs.existsSync(CLAUDE_BIN)) {
    log(`오류: Claude CLI 없음 (${CLAUDE_BIN})`)
    process.exit(1)
  }

  if (slotArg === 'morning') await runMorning()
  else if (slotArg === 'noon')    await runNoon()
  else if (slotArg === 'evening') await runEvening()
  else log(`알 수 없는 슬롯: ${slotArg}`)
}

main().catch(e => {
  log(`치명적 오류: ${e.message}`)
  process.exit(1)
})
