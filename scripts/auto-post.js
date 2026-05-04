#!/usr/bin/env node
/**
 * scripts/auto-post.js
 * 자동 포스팅 — Claude Code CLI (claude -p) 로컬 실행
 * Usage: node scripts/auto-post.js [--slot morning|noon|evening] [--count 3] [--dry-run]
 *
 * API 키 불필요. 로컬 claude CLI 사용 (Claude Code 구독 기반).
 * 토큰 최소화: 시스템 프롬프트 고정 + 포스트 스펙만 전달.
 */

'use strict'
const fs   = require('fs')
const path = require('path')
const { spawnSync, execSync } = require('child_process')

const ROOT       = path.resolve(__dirname, '..')
const QUEUE_FILE = path.join(__dirname, 'auto-post-queue.json')
const LOG_FILE   = path.join(ROOT, 'logs', 'autopost.log')
const CLAUDE_BIN = '/opt/homebrew/bin/claude'

// ─── 인자 파싱 ────────────────────────────────────────────────
const argv   = process.argv.slice(2)
const slotArg   = argv[argv.indexOf('--slot')  + 1] || 'morning'
const countArg  = parseInt(argv[argv.indexOf('--count') + 1] || '3', 10)
const dryRun    = argv.includes('--dry-run')

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
  const raw = fs.readFileSync(QUEUE_FILE, 'utf8')
  return JSON.parse(raw)
}

function saveQueue(queue) {
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2))
}

function getPendingPosts(queue, slot, count) {
  return queue.posts
    .filter(p => p.slot === slot && p.status === 'pending')
    .sort((a, b) => a.priority - b.priority)
    .slice(0, count)
}

// ─── 이미지 수집 ──────────────────────────────────────────────
async function fetchImages(post) {
  const TOUR_KEY  = process.env.TOUR_API_KEY_ENCODED
  const UNSPLASH  = process.env.UNSPLASH_ACCESS_KEY
  const TOUR_BASE = process.env.TOUR_API_ENDPOINT || 'https://apis.data.go.kr/B551011/KorService2'

  if (post.imageSource === 'tourapi' && post.imageQuery && TOUR_KEY) {
    try {
      const searchUrl = `${TOUR_BASE}/searchKeyword2?serviceKey=${TOUR_KEY}` +
        `&keyword=${encodeURIComponent(post.imageQuery)}&MobileOS=ETC&MobileApp=tripspot` +
        `&_type=json&numOfRows=3&pageNo=1` +
        (post.contentTypeId ? `&contentTypeId=${post.contentTypeId}` : '')
      const sr   = await fetch(searchUrl, { headers: { Accept: 'application/json' } })
      const sd   = await sr.json()
      const items = sd?.response?.body?.items?.item
      if (!items) return null
      const hit  = Array.isArray(items) ? items[0] : items

      const imgUrl = `${TOUR_BASE}/detailImage2?serviceKey=${TOUR_KEY}` +
        `&contentId=${hit.contentid}&imageYN=Y&MobileOS=ETC&MobileApp=tripspot` +
        `&_type=json&numOfRows=6&pageNo=1`
      const ir   = await fetch(imgUrl, { headers: { Accept: 'application/json' } })
      const id   = await ir.json()
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
      const r    = await fetch(url, { headers: { Authorization: `Client-ID ${UNSPLASH}`, 'Accept-Version': 'v1' } })
      const data = await r.json()
      if (!data.results?.length) return null
      const imgs = data.results
      return {
        main: `${imgs[0].urls.regular}&w=1200`,
        gallery: imgs.slice(0, 3).map(img => ({
          url: `${img.urls.regular}&w=1200`,
          caption: img.alt_description || post.imageQuery,
          photographer: img.user.name,
        })),
        source: 'Unsplash', license: 'Unsplash License',
        credit: `${imgs[0].user.name} on Unsplash`,
        sourceUrl: `${imgs[0].user.links.html}?utm_source=tripspot&utm_medium=referral`,
      }
    } catch (e) { log(`Unsplash 실패 (${post.slug}): ${e.message}`); return null }
  }

  return null
}

// ─── 프롬프트 조립 ────────────────────────────────────────────
const SYSTEM_INSTRUCTIONS = `You are a Korean travel content writer for tripspot.ambitstock.com.
Write posts in STRICT JavaScript module format. Output ONLY valid JavaScript — no explanation, no markdown fences, no comments before the code.

=== OUTPUT FORMAT ===
module.exports = {
  sections: [
    { type: 'intro', html: \`...\` },
    { type: 'h2', id: 'slug', text: '제목' },
    ...
  ]
}

=== SECTION TYPES ===
intro: { type:'intro', html:'<strong>키워드</strong> 설명...' }
h2: { type:'h2', id:'영문-slug', text:'한국어 제목' }
h3: { type:'h3', id:'영문-slug', text:'소제목' }
body: { type:'body', html:'<ul><li><strong>항목</strong>: 내용</li></ul>' }
image: { type:'image', src:'URL', alt:'설명', caption:'캡션', imageSource:'출처기관', imageLicense:'라이선스', imageCredit:'크레딧', imageSourceUrl:'URL' }
gallery: { type:'gallery', images:[{url:'',caption:''}], imageSource:'', imageLicense:'', imageCredit:'', imageSourceUrl:'' }
callout: { type:'callout', html:'팁이나 강조 내용' }
info: { type:'info', title:'알림 제목', html:'내용' }
warning: { type:'warning', title:'주의 제목', html:'내용' }
faq: { type:'faq', items:[{q:'질문?',a:'답변.'}] }
hotelsCombinedCTA: { type:'hotelsCombinedCTA', text:'버튼 텍스트', subText:'설명', href:'#' }
sources: { type:'sources', items:[{label:'이름',url:'https://...',org:'기관명',accessedAt:'2026-05-03'}] }
disclaimer: { type:'disclaimer' }

=== QUALITY RULES ===
1. MINIMUM 8 H2 sections, MINIMUM 4000 Korean characters total
2. intro: 3 paragraphs. First sentence must contain <strong>main keyword</strong>. Use bold for key facts.
3. Use realistic price estimates: "약 XX만 원" or "USD XX~XX/박" format
4. All HTML must be valid (properly closed tags)
5. Sources: minimum 2 official sources (government/official hotel/tourism board)
6. FAQ: exactly 5-6 items. Use real questions travelers ask.
7. Hotel posts: MUST include hotelsCombinedCTA section before sources.
8. Tables: use <table style="width:100%;border-collapse:collapse;font-size:14px"> with thead/tbody
9. No fabricated specific phone numbers.
10. Template literals use backtick. Escape backticks inside: \\\`
11. Use Korean throughout. No English except proper nouns.
12. Table cell style: style="padding:8px 10px;border:1px solid #CBD5E1"

=== ENTITY STRUCTURE ===
hotel: intro → image(main) → h2:overview → gallery(3img) → h2:differentiators → h2:rooms(table) → h2:dining → gallery → h2:facilities(pool/spa) → h2:access → h2:nearby → h2:season-price(table) → faq(6) → hotelsCombinedCTA → warning → sources → disclaimer
region: intro → image(main) → h2:overview → gallery → h2:highlight1 → h2:highlight2 → h2:highlight3 → h2:food → h2:transport → h2:accommodation → h2:budget → h2:season → faq(5) → sources → disclaimer
country: intro → image(main) → h2:overview → h2:region1 → h2:region2 → h2:region3 → h2:visa → h2:food → h2:transport → h2:budget → h2:safety → faq(6) → sources → disclaimer
guide: intro → h2:why-important → h2:step1 → h2:step2 → h2:step3 → h2:costs → h2:tips → faq(5) → warning → sources → disclaimer
theme: intro → h2:destination1 → h2:destination2 → h2:destination3 → h2:tips → h2:budget → faq(5) → sources → disclaimer
situation: intro → h2:recommendation1 → h2:recommendation2 → h2:recommendation3 → h2:checklist → h2:budget → faq(5) → sources → disclaimer
compare: intro → h2:criteria → h2:item1 → h2:item2 → h2:comparison-table → h2:verdict → faq(5) → sources → disclaimer
addon: intro → h2:why-need → h2:pick1 → h2:pick2 → h2:pick3 → h2:buying-guide → faq(5) → sources → disclaimer`

function buildUserPrompt(post, images) {
  const imgBlock = images ? [
    `MainImage: ${images.main || '없음'}`,
    `GalleryImages:`,
    ...(images.gallery || []).map((g, i) => `  ${i+1}. url="${g.url}" caption="${g.caption || ''}"`),
    `ImageSource: ${images.source} | ${images.license} | ${images.credit}`,
    `ImageSourceUrl: ${images.sourceUrl}`,
  ].join('\n') : `ImageSource: (이미지 없음, image/gallery 섹션 제외)`

  const metaBlock = post.meta ? Object.entries(post.meta)
    .filter(([k, v]) => v !== null && v !== undefined && k !== 'id')
    .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`)
    .join('\n') : ''

  return [
    `Entity: ${post.entity}`,
    `Slug: ${post.slug}`,
    `Title: ${post.title}`,
    `Keywords: ${(post.keywords || []).join(', ')}`,
    metaBlock,
    imgBlock,
    ``,
    `Write a complete module.exports = { sections: [...] } for this page.`,
    `Today date for accessedAt fields: 2026-05-03`,
  ].filter(l => l !== null && l !== undefined).join('\n')
}

// ─── Claude CLI 실행 ──────────────────────────────────────────
function runClaude(post, images) {
  if (!fs.existsSync(CLAUDE_BIN)) {
    throw new Error(`Claude CLI 없음: ${CLAUDE_BIN}`)
  }

  const userPrompt = buildUserPrompt(post, images)
  log(`  claude --print 실행: ${post.slug}`)

  // stdin으로 userPrompt 전달 / system-prompt 플래그 분리 / 도구 비활성화
  const result = spawnSync(CLAUDE_BIN, [
    '--print',
    '--system-prompt', SYSTEM_INSTRUCTIONS,
    '--output-format', 'text',
    '--tools', '',              // 도구 불필요 (순수 텍스트 생성)
    '--no-session-persistence', // 디스크 세션 저장 생략 (빠름)
  ], {
    input: userPrompt,          // stdin으로 전달 (긴 프롬프트 안전)
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
    const errMsg = (result.stderr || '').trim().slice(0, 400)
    throw new Error(`claude 종료 코드 ${result.status}: ${errMsg}`)
  }

  let content = (result.stdout || '').trim()

  // 마크다운 코드 펜스 제거 (혹시라도 감싸는 경우)
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

  const tmpFile = path.join(ROOT, `_tmp_check_${slug}_${Date.now()}.js`)
  try {
    fs.writeFileSync(tmpFile, content)
    const r = spawnSync('node', ['--check', tmpFile], { encoding: 'utf8' })
    if (r.status !== 0) throw new Error(r.stderr || '문법 오류')
  } finally {
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile)
  }
  return true
}

// ─── 데이터 파일 업데이트 ─────────────────────────────────────
function appendToDataFile(entity, meta) {
  const FILE_MAP = {
    hotel: 'hotels.js', region: 'regions.js', country: 'countries.js',
    theme: 'themes.js', guide: 'guides.js', situation: 'situations.js',
    compare: 'compares.js', addon: 'addons.js', tool: 'tools.js',
  }
  const filename = FILE_MAP[entity]
  if (!filename) return

  const filepath = path.join(ROOT, 'data', filename)
  if (!fs.existsSync(filepath)) { log(`  데이터 파일 없음: ${filename}`); return }

  const content = fs.readFileSync(filepath, 'utf8')
  if (content.includes(`slug: '${meta.slug}'`)) {
    log(`  이미 존재: ${meta.slug}`)
    return
  }

  const closeIdx = content.lastIndexOf('\n]\n')
  if (closeIdx === -1) { log(`  삽입 위치 없음: ${filename}`); return }

  const entryLines = JSON.stringify(meta, null, 2)
    .split('\n').map((l, i) => (i === 0 ? '  ' : '  ') + l).join('\n')
  const newContent = content.slice(0, closeIdx) + ',\n' + entryLines + content.slice(closeIdx)
  fs.writeFileSync(filepath, newContent)
  log(`  data/${filename} → ${meta.slug} 추가`)
}

// ─── Git 커밋 & 푸시 ──────────────────────────────────────────
function gitCommit(slugs) {
  try {
    execSync('git add -A', { cwd: ROOT, stdio: 'pipe' })
    const msg = `auto: ${new Date().toISOString().slice(0,16)} [${slotArg}] ${slugs.join(', ')}`
    execSync(`git commit -m "${msg}"`, { cwd: ROOT, stdio: 'pipe' })
    execSync('git push', { cwd: ROOT, stdio: 'pipe' })
    log(`Git push 완료: ${slugs.join(', ')}`)
  } catch (e) {
    log(`Git 오류 (무시): ${e.message.slice(0, 200)}`)
  }
}

// ─── 메인 ─────────────────────────────────────────────────────
async function main() {
  log(`=== 자동 포스팅 시작 [${slotArg}] count=${countArg} dryRun=${dryRun} ===`)

  if (!fs.existsSync(CLAUDE_BIN)) {
    log(`오류: ${CLAUDE_BIN} 없음. Claude Code CLI가 설치되어 있어야 합니다.`)
    process.exit(1)
  }

  const queue   = loadQueue()
  const pending = getPendingPosts(queue, slotArg, countArg)

  if (pending.length === 0) {
    log(`[${slotArg}] 대기 포스팅 없음`)
    return
  }

  log(`처리 대상: ${pending.map(p => p.slug).join(', ')}`)

  const generated = []

  for (const post of pending) {
    try {
      log(`▶ 시작: ${post.slug} (${post.entity})`)

      // 1. 이미지 수집
      const images = await fetchImages(post)
      log(`  이미지: ${images ? (images.gallery?.length || 0) + '장' : '없음'}`)

      if (dryRun) {
        log(`  [DRY-RUN] 건너뜀: ${post.slug}`)
        continue
      }

      // 2. Claude CLI로 포스트 생성
      const content = runClaude(post, images)
      if (!content || content.length < 500) throw new Error(`생성 내용 너무 짧음 (${content.length}자)`)

      // 3. 검증
      validatePost(content, post.slug)

      // 4. 파일 저장
      const dir      = path.join(ROOT, 'posts', post.entity + 's')
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
      const postFile = path.join(dir, `${post.slug}.js`)
      fs.writeFileSync(postFile, content)
      log(`  저장: posts/${post.entity}s/${post.slug}.js`)

      // 5. 데이터 파일 업데이트
      if (post.meta) {
        const today = new Date().toISOString().slice(0, 10)
        appendToDataFile(post.entity, { ...post.meta, publishedAt: today, updatedAt: today })
      }

      // 6. 큐 상태 업데이트
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'done'; qi.generatedAt = new Date().toISOString() }
      saveQueue(queue)

      generated.push(post.slug)
      log(`  ✅ 완료: ${post.slug}`)

      // 연속 실행 시 잠깐 대기
      await new Promise(r => setTimeout(r, 1500))

    } catch (e) {
      log(`  ❌ 오류 [${post.slug}]: ${e.message}`)
      const qi = queue.posts.find(p => p.id === post.id)
      if (qi) { qi.status = 'error'; qi.error = e.message; qi.errorAt = new Date().toISOString() }
      saveQueue(queue)
    }
  }

  if (generated.length === 0) {
    log('생성된 포스팅 없음')
    return
  }

  // 7. Prebuild (sitemap + feeds)
  try {
    log('Prebuild 실행...')
    execSync('npm run prebuild', { cwd: ROOT, stdio: 'pipe' })
    log('Prebuild 완료')
  } catch (e) {
    log(`Prebuild 오류 (무시): ${e.message.slice(0, 200)}`)
  }

  // 8. Git commit & push
  gitCommit(generated)

  log(`=== 완료 [${slotArg}] 생성 ${generated.length}개: ${generated.join(', ')} ===`)
}

main().catch(err => {
  log(`치명적 오류: ${err.message}`)
  process.exit(1)
})
