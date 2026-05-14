#!/usr/bin/env node
/**
 * scripts/rewrite-thin.js
 * 씬 콘텐츠(H2 <7 or 자수 <3000) 포스트를 Claude CLI로 일괄 재작성
 * node scripts/rewrite-thin.js --cat compares [--limit 3] [--dry-run]
 */
'use strict'

const fs    = require('fs')
const path  = require('path')
const { spawnSync } = require('child_process')

const ROOT       = path.resolve(__dirname, '..')
const CLAUDE_BIN = '/opt/homebrew/bin/claude'
const TODAY      = new Date().toISOString().slice(0, 10)

const argv    = process.argv.slice(2)
const catArg  = argv[argv.indexOf('--cat') + 1] || 'compares'
const limitIdx = argv.indexOf('--limit')
const limitN   = limitIdx >= 0 ? parseInt(argv[limitIdx + 1] || '999', 10) : 999
const dryRun  = argv.includes('--dry-run')

// ─── 카테고리 설정 ────────────────────────────────────────────
const CAT_MAP = {
  compares:   { entity: 'compare',   dataFile: 'data/compares.js',   postDir: 'posts/compares',   targetChars: 5000, targetH2: 10 },
  tools:      { entity: 'tool',      dataFile: 'data/tools.js',       postDir: 'posts/tools',      targetChars: 4500, targetH2: 9  },
  situations: { entity: 'situation', dataFile: 'data/situations.js',  postDir: 'posts/situations', targetChars: 5000, targetH2: 10 },
  addons:     { entity: 'addon',     dataFile: 'data/addons.js',      postDir: 'posts/addons',     targetChars: 5000, targetH2: 10 },
}

// ─── SYSTEM PROMPT ────────────────────────────────────────────
const SYSTEM_PROMPT = `You are a Korean travel content writer for travel.ambitstock.com (트립스팟 에디터).
Output ONLY valid JavaScript — no markdown fences, no explanations, no text before or after.

OUTPUT FORMAT:
module.exports = {
  sections: [
    { type: 'intro', html: \`...\` },
    ...
  ]
}

SECTION TYPES:
intro      : { type:'intro', html:'<p>...</p>' }
h2         : { type:'h2', id:'en-slug', text:'한국어 제목' }
h3         : { type:'h3', id:'en-slug', text:'소제목' }
body       : { type:'body', html:'<ul><li>...</li></ul>' }
callout    : { type:'callout', html:'...' }
info       : { type:'info', title:'제목', html:'...' }
warning    : { type:'warning', title:'주의', html:'...' }
faq        : { type:'faq', items:[{q:'?',a:'.'}] }
sources    : { type:'sources', items:[{label:'',url:'',org:'',accessedAt:'${TODAY}'}] }
disclaimer : { type:'disclaimer' }

OPERATOR VOICE (AI 냄새 제거):
Level 2 (경험 어투): "처음 방문했을 때 예상보다 숙박비가 높아서 당황했는데..."
Level 3 (현지인 시선): "현지인들이 실제로 이용하는 골목 식당은..."
→ 각 포스트에 Level 2~3 최소 2회 사용.

QUALITY STANDARDS:
- H2 최소 10개
- 한국어 본문 최소 5000자
- Intro: 3~4문단, 각 3~5문장
- FAQ: 정확히 6개
- sources: 최소 2개 공식 출처
- 마지막 H2 뒤에 callout (마무리·체크리스트·편집자 한마디 중 1개)
- 표: <table style="width:100%;border-collapse:collapse;font-size:14px">
- 셀: style="padding:8px 10px;border:1px solid #CBD5E1"

TEMPLATE BY ENTITY:
compare  : intro→h2:개요→h2:비교기준(표)→h2:옵션A→h2:옵션B→h2:옵션C→h2:예산(표)→h2:추천유형→h2:예약팁→h2:주의사항→callout→faq(6)→sources→disclaimer
tool     : intro→h2:왜필요한가→h2:사용법→h2:계산예시(표)→h2:활용팁×3→h2:주의사항→h2:자주묻는실수→callout→faq(6)→sources→disclaimer
situation: intro→h2:상황분석→h2:추천코스A→h2:추천코스B→h2:추천코스C→h2:체크리스트→h2:예산(표)→h2:주의사항→h2:꿀팁→callout→faq(6)→sources→disclaimer
addon    : intro→h2:왜필요한가→h2:선택기준→h2:가격대별추천(표)→h2:브랜드비교→h2:구매가이드→h2:사용법·관리→h2:실사용후기→h2:주의사항→callout→faq(6)→sources→disclaimer`

// ─── 씬 판정 ──────────────────────────────────────────────────
function isThin(filePath, targetChars, targetH2) {
  if (!fs.existsSync(filePath)) return true
  const src = fs.readFileSync(filePath, 'utf8')
  const charApprox = src.replace(/<[^>]+>/g, '').replace(/[{}'":,\[\]]/g, '').replace(/\s+/g, ' ').length
  const h2Count = (src.match(/type:\s*'h2'/g) || []).length
  return charApprox < targetChars || h2Count < targetH2
}

// ─── Claude 실행 ─────────────────────────────────────────────
function runClaude(prompt) {
  const result = spawnSync(CLAUDE_BIN, ['--print', '--output-format', 'text', '--allowedTools', 'Bash(echo)'], {
    input: SYSTEM_PROMPT + '\n\n---\n\n' + prompt,
    encoding: 'utf8',
    timeout: 360000,
    maxBuffer: 20 * 1024 * 1024,
    env: { ...process.env, HOME: process.env.HOME || '/Users/lee', PATH: '/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin' },
  })
  if (result.error) throw result.error
  if (result.status !== 0) throw new Error(`Claude 오류: ${(result.stderr || '').slice(0, 300)}`)
  let content = (result.stdout || '').trim()
  content = content.replace(/^```(?:javascript|js)?\s*\n?/m, '').replace(/\n?```\s*$/m, '').trim()
  return content
}

// ─── 검증 ────────────────────────────────────────────────────
function validate(content, slug) {
  if (!content.includes('module.exports')) throw new Error('module.exports 없음')
  if (!content.includes('sections')) throw new Error('sections 없음')
  if (!/type:\s*['"]intro['"]/.test(content)) throw new Error('intro 없음')
  const tmp = path.join(ROOT, `_tmp_${slug}_${Date.now()}.js`)
  try {
    fs.writeFileSync(tmp, content)
    const r = spawnSync('node', ['--check', tmp], { encoding: 'utf8' })
    if (r.status !== 0) throw new Error(r.stderr || '문법 오류')
  } finally {
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp)
  }
}

// ─── 데이터 정보 읽기 ─────────────────────────────────────────
function getItemMeta(dataFile, slug) {
  try {
    const items = require(path.join(ROOT, dataFile))
    return items.find(x => x?.slug === slug) || null
  } catch (_) { return null }
}

// ─── 메인 ────────────────────────────────────────────────────
async function main() {
  const cfg = CAT_MAP[catArg]
  if (!cfg) { console.error('알 수 없는 카테고리:', catArg, '| 가능:', Object.keys(CAT_MAP).join(', ')); process.exit(1) }

  const items = require(path.join(ROOT, cfg.dataFile)).filter(x => x?.slug)
  const thin = items.filter(item => {
    const f = path.join(ROOT, cfg.postDir, item.slug + '.js')
    return isThin(f, cfg.targetChars, cfg.targetH2)
  }).slice(0, limitN)

  console.log(`\n=== ${catArg} 씬 재작성 시작: ${thin.length}개 ===\n`)

  let ok = 0, fail = 0
  for (const item of thin) {
    const postFile = path.join(ROOT, cfg.postDir, item.slug + '.js')
    console.log(`▶ [${ok + fail + 1}/${thin.length}] ${item.slug}`)

    if (dryRun) { console.log('  [DRY-RUN]'); ok++; continue }

    const meta = getItemMeta(cfg.dataFile, item.slug)
    const metaBlock = meta
      ? Object.entries(meta).filter(([k, v]) => v !== null && v !== undefined)
          .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`).join('\n')
      : ''

    const existingH2s = fs.existsSync(postFile)
      ? (fs.readFileSync(postFile, 'utf8').match(/text:\s*['"`]([^'"`]+)['"`]/g) || []).slice(0, 5).join(' | ')
      : '(파일 없음)'

    const prompt = `REWRITE — 아래 ${cfg.entity} 포스트를 완전히 새로 작성하라. 기존 내용이 너무 짧으므로 5000자 이상·H2 최소 10개로 전면 확장.

Entity: ${cfg.entity}
Slug: ${item.slug}
Title: ${item.title || item.name || item.slug}
Keywords: ${(item.tags || item.keywords || []).join(', ')}
ExistingH2s(참고): ${existingH2s}
${metaBlock}
AccessedAt: ${TODAY}

Write a complete module.exports = { sections: [...] } — 5000자 이상, H2 10개 이상, FAQ 6개, sources 2개 이상, 마무리 callout 포함.`

    try {
      const content = runClaude(prompt)
      validate(content, item.slug)
      fs.mkdirSync(path.join(ROOT, cfg.postDir), { recursive: true })
      fs.writeFileSync(postFile, content)
      const newChars = content.replace(/<[^>]+>/g, '').replace(/[{}'":,\[\]]/g, '').replace(/\s+/g, ' ').length
      const newH2s = (content.match(/type:\s*'h2'/g) || []).length
      console.log(`  ✅ 완료: ${newChars}자 H2:${newH2s}`)
      ok++
      // 연속 호출 간격
      await new Promise(r => setTimeout(r, 3000))
    } catch (e) {
      console.log(`  ❌ 실패: ${e.message.slice(0, 100)}`)
      fail++
    }
  }

  console.log(`\n=== 완료: ✅${ok} ❌${fail} ===`)
}

main().catch(e => { console.error(e); process.exit(1) })
