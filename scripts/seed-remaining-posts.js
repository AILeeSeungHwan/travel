// scripts/seed-remaining-posts.js — 1회성 샘플 콘텐츠 시드 생성기
// companies / guides / situations / tools / compares / addons 샘플 포스트를 일관된 섹션 구조로 생성
// 이미 작성된 파일이 있으면 건너뜁니다.

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const now = '2026-04-25'

const companies = require('../data/companies')
const guides = require('../data/guides')
const situations = require('../data/situations')
const tools = require('../data/tools')
const compares = require('../data/compares')
const addons = require('../data/addons')

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }) }

function writeIfMissing(file, content) {
  if (fs.existsSync(file)) return 'skip'
  fs.writeFileSync(file, content)
  return 'new'
}

function esc(s) { return String(s || '').replace(/`/g, '\\`').replace(/\$/g, '\\$') }

function common(meta) {
  return {
    sources: [
      { label: '금융감독원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: now },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: now },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: now },
    ],
  }
}

function postToFile(obj) {
  return `const post = ${JSON.stringify(obj, null, 2)}\nmodule.exports = post\n`
}

// ---------- Companies ----------
ensureDir(path.join(ROOT, 'posts', 'companies'))
for (const c of companies) {
  const s = common(c)
  const post = {
    id: c.id,
    sections: [
      { type: 'intro', html: `<p><strong>${c.companyName}</strong>은 ${c.companyType} 분야의 주요 회사로, ${c.establishedYear}년에 설립되었습니다. 본 페이지는 금감원·${c.companyType === '생명보험' ? '생명보험협회' : '손해보험협회'} 공시 자료를 기준으로 회사 개요, 재무건전성 지표, 주력 상품군, 청구 채널을 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 이 보험사의 상품을 판매·모집하지 않습니다.</p>` },
      { type: 'toc' },
      { type: 'h2', id: 'overview', text: '한눈에 보기' },
      { type: 'body', html: `<ul><li>정식 명칭: ${c.companyName}</li><li>분류: ${c.companyType}</li><li>설립: ${c.establishedYear}년</li><li>공식 웹사이트: <a href="${c.officialWebsite}" target="_blank" rel="noopener noreferrer">${c.officialWebsite}</a></li></ul>` },
      { type: 'h2', id: 'history', text: '회사 개요' },
      { type: 'body', html: `<p>${c.companyName}은 한국 ${c.companyType} 시장에서 주요한 위치를 차지하는 회사로, 자산규모·가입자수·상품군 범위에서 상위권에 속합니다. 계열사 네트워크와 판매 채널(대면·방카·텔레·다이렉트)을 통해 다양한 고객층을 대상으로 서비스를 제공합니다.</p>` },
      { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
      { type: 'info', title: '재무 지표 기준', html: `<p>지급여력비율(K-ICS), 자본금, 민원 건수 지표는 ${c.publicDisclosureDate} 공시 기준입니다. 실제 수치는 금감원 금융통계정보시스템(https://fisis.fss.or.kr)에서 확인하세요.</p>` },
      { type: 'body', html: `<p>지급여력비율(K-ICS)은 보험사의 자본 건전성을 보여주는 지표로, 규제 기준(일반적으로 150% 이상)을 상회하는 회사가 안정적이라고 평가됩니다. 구체적인 수치는 시점에 따라 변하므로 금감원 공시를 직접 확인해야 합니다.</p>` },
      { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
      { type: 'body', html: `<p>${c.companyType === '생명보험' ? '종신·정기·연금·건강·변액 등 생명보험 기본 라인업' : '자동차·실손·장기손해·치아·운전자·펫 등 손해보험 기본 라인업'}을 운영합니다. 상품별 공시 자료는 각 보험사 공시실과 금감원 금융상품통합비교공시에서 확인할 수 있습니다.</p>` },
      { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
      { type: 'body', html: `<p>공식 웹사이트·모바일 앱·콜센터·영업점을 통해 청구 가능. 소액은 앱 청구, 고액·복잡한 건은 서류 제출이 일반적입니다.</p>` },
      { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
      { type: 'faq', items: [
        { q: '재무건전성이 낮아지면 가입자에게 영향이 있나요?', a: '보험사 지급여력이 규제 기준 아래로 떨어지면 금감원이 개선 조치를 요구합니다. 계약자는 예금자보호 한도(5천만원) 내에서 보호됩니다.' },
        { q: '고객센터 운영시간은?', a: '대부분 평일 09:00~18:00, 일부 24시간 사고 접수 창구 운영.' },
        { q: '타 회사로 계약 이전 가능한가요?', a: '보장성 보험은 이전 불가능. 해지·신규 가입 방식입니다.' },
        { q: '다이렉트와 설계사 채널은 보장이 다른가요?', a: '상품은 동일하나 판매비·할인 구조가 다릅니다.' },
        { q: '공시 자료는 어디서 확인하나요?', a: '각 보험사 홈페이지의 공시실 메뉴 및 협회 공시실에서 확인할 수 있습니다.' },
      ]},
      { type: 'sources', items: s.sources },
      { type: 'medDisclaimer' },
    ]
  }
  const file = path.join(ROOT, 'posts', 'companies', c.slug + '.js')
  console.log(writeIfMissing(file, postToFile(post)), file)
}

// ---------- Guides ----------
ensureDir(path.join(ROOT, 'posts', 'guides'))
for (const g of guides) {
  const s = common(g)
  const stepsBlock = g.steps ? `<ol>${g.steps.map(st => `<li><strong>${st.name}</strong> — ${st.text}</li>`).join('')}</ol>` : ''
  const post = {
    id: g.id,
    sections: [
      { type: 'intro', html: `<p>${g.description} 본 가이드는 공식 기관(금감원·협회·국세청) 자료를 기준으로 정리되었으며, 개별 사안은 반드시 해당 기관 및 전문가에게 확인하세요.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험 상품을 판매·모집하지 않습니다.</p>` },
      { type: 'toc' },
      { type: 'h2', id: 'intro', text: '이 가이드의 쓰임새' },
      { type: 'body', html: `<p>이 글은 ${g.title.split('—')[0].trim()}에 대해 자주 발생하는 실수와 대응 요령을 담았습니다. 실제 청구·절차에 들어가기 전에 체크리스트로 활용하세요.</p>` },
      { type: 'h2', id: 'background', text: '배경 / 관련 제도' },
      { type: 'body', html: `<p>관련 제도의 법적·행정적 배경을 간단히 정리합니다. ${g.guideType === 'claim' ? '실손보험 청구 관련 표준 약관과 금감원 간소화 제도' : g.guideType === 'tax' ? '소득세법과 세액공제 한도, 연말정산 체계' : '관련 금융·소비자 보호 제도'}이 핵심 근거입니다.</p>` },
      { type: 'h2', id: 'steps', text: g.guideType === 'claim' ? '청구 단계별 절차' : '핵심 절차 / 체크리스트' },
      { type: 'body', html: stepsBlock || '<p>단계별 절차는 상품·사안마다 다르므로 해당 보험사 공식 안내를 확인하세요.</p>' },
      { type: 'h2', id: 'check', text: '체크리스트' },
      { type: 'callout', html: '<ul><li>관련 영수증·서류를 원본 보관</li><li>청구 기한(통상 3년) 확인</li><li>중복 청구·재청구 가능 여부 확인</li><li>고지의무 누락 없는지 재확인</li></ul>' },
      { type: 'h2', id: 'mistakes', text: '자주 하는 실수' },
      { type: 'body', html: '<ul><li>진료비 세부내역서 누락 — 고액 청구 시 재요청 사유가 됨</li><li>진단명 코드 오인 — 약관 면책 조항 해석 차이</li><li>고지의무 위반 — 과거 병력·치료 이력 누락 시 보험금 미지급</li></ul>' },
      { type: 'h2', id: 'related', text: '관련 계산기 · 카테고리' },
      { type: 'body', html: `<p>관련 카테고리와 계산기는 이 페이지 하단 "관련 콘텐츠" 섹션을 참고하세요.</p>` },
      { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
      { type: 'faq', items: [
        { q: '서류가 모자라면 재청구 가능한가요?', a: '네. 보험사 안내에 따라 추가 서류 제출 후 재심사 요청이 가능합니다.' },
        { q: '청구 기한은 얼마인가요?', a: '상법상 보험금 청구권의 소멸시효는 3년입니다.' },
        { q: '온라인 앱과 서면 중 어느 쪽이 빠른가요?', a: '소액은 앱이 훨씬 빠릅니다. 고액·복잡한 건은 서면이 안전합니다.' },
        { q: '지급이 거절되면 어떻게 하나요?', a: '보험사 민원 → 금감원 분쟁조정 → 소비자원·소송 단계로 대응 가능합니다.' },
        { q: '대리 청구가 가능한가요?', a: '위임장·위임자 신분증 사본이 필요합니다.' },
      ]},
      { type: 'sources', items: s.sources },
      { type: 'medDisclaimer' },
    ]
  }
  const file = path.join(ROOT, 'posts', 'guides', g.slug + '.js')
  console.log(writeIfMissing(file, postToFile(post)), file)
}

// ---------- Situations ----------
ensureDir(path.join(ROOT, 'posts', 'situations'))
for (const h of situations) {
  const s = common(h)
  const post = {
    id: h.id,
    sections: [
      { type: 'intro', html: `<p>${h.description} 이 페이지는 해당 상황에서 보험의 우선순위를 어떻게 설계할지, 보험료 비중은 어느 정도가 적정한지를 금감원·협회 공시 기준으로 정리합니다.</p><p>상황별 재무 구조가 다르기 때문에 일률적인 정답은 없으며, 이 글의 권장은 일반적 참고용입니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험 상품을 판매·모집하지 않습니다.</p>` },
      { type: 'toc' },
      { type: 'h2', id: 'def', text: '이 상황이란' },
      { type: 'body', html: `<p>${h.title.split('—')[0].trim()} 단계는 재무·건강·위험 노출 구조가 이전 단계와 달라지는 지점입니다. 같은 보험이라도 이 시기에는 우선순위가 달라집니다.</p>` },
      { type: 'h2', id: 'priority', text: '보험 우선순위' },
      { type: 'body', html: `<ol>${(h.recommendedCategorySlugs||[]).map(sl => `<li><a href="/categories/${sl}/">${sl}</a> 우선 확보</li>`).join('')}<li>상황에 맞는 특약 설계</li></ol>` },
      { type: 'h2', id: 'budget', text: '예산 가이드 — 보험료 비중' },
      { type: 'body', html: `<p>일반적으로 월 수입의 <strong>8~12%</strong> 내에서 보험료를 설계하는 것이 안정적입니다. 지나치게 높으면 장기 유지에 실패할 가능성이 크고, 너무 낮으면 실제 사건 시 보장 공백이 생깁니다.</p>` },
      { type: 'h2', id: 'scenario', text: '가상 시나리오 (허구 예시)' },
      { type: 'body', html: `<p>※ 다음은 허구적 예시입니다. 실제 인물·사례가 아닙니다.</p><p>A씨는 위 상황에 해당하며 월 수입의 약 10%를 보험료로 편성했습니다. 실손 → 정기·상해 → 상황별 필수 보험 → 저축성 연금의 순서로 구성했고, 중복·과보장을 점검한 뒤 최종 설계를 확정했습니다.</p>` },
      { type: 'h2', id: 'tools', text: '관련 계산기' },
      { type: 'body', html: `<p>관련 계산기 링크는 페이지 하단 "관련 콘텐츠" 섹션을 참고하세요.</p>` },
      { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
      { type: 'faq', items: [
        { q: '부부가 각각 실손을 가져야 하나요?', a: '네. 실손은 개인별 가입입니다.' },
        { q: '저축성 보험은 이 시기에 필요한가요?', a: '보장성 우선 → 긴급자금 확보 → 저축성 순서가 일반적입니다.' },
        { q: '자녀 태어나면 어떤 보험을 먼저 가입해야 하나요?', a: '자녀 실손 → 부모 정기/종신 → 자녀 상해/질병 보장 순.' },
        { q: '보험설계사가 추천하는 대로 가입해도 되나요?', a: '객관적 공시 자료와 대조해 중복·과보장을 점검하는 것이 안전합니다.' },
        { q: '기존 보험 해지 여부 판단 기준은?', a: '이미 납입한 보험료 대비 보장 공백과 환급률을 함께 고려해야 합니다.' },
      ]},
      { type: 'sources', items: s.sources },
      { type: 'medDisclaimer' },
    ]
  }
  const file = path.join(ROOT, 'posts', 'situations', h.slug + '.js')
  console.log(writeIfMissing(file, postToFile(post)), file)
}

// ---------- Tools ----------
ensureDir(path.join(ROOT, 'posts', 'tools'))
for (const t of tools) {
  const s = common(t)
  const post = {
    id: t.id,
    calculator: t.calculator,
    sections: [
      { type: 'intro', html: `<p>${t.description}</p><p>위 계산기는 공시 통계·가정값 기반 <strong>추정치</strong>를 제공합니다. 실제 보험료·지급액은 각 보험사 인수 기준, 건강고지, 차량등급 등에 따라 달라질 수 있습니다. 최종 결정 전 공식 견적과 약관 확인을 권장합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험 상품을 판매·모집하지 않습니다.</p>` },
      { type: 'toc' },
      { type: 'h2', id: 'how', text: '이 계산기 사용법' },
      { type: 'body', html: `<p>입력 필드에 본인의 조건을 입력하면 예상 결과가 자동 표시됩니다. 각 항목은 공시 자료의 일반적 범위를 가정하며, 실제 값과는 차이가 있을 수 있습니다. 결과 해석 시 반드시 아래 한계와 유의사항을 함께 고려하세요.</p>` },
      { type: 'h2', id: 'logic', text: '계산 원리' },
      { type: 'body', html: `<p>이 계산기는 공개된 통계 범위와 상품별 공시 자료를 바탕으로 단순 수식을 사용해 결과를 추정합니다. 회귀 모델이나 보험사 실제 요율과는 다르며, 가정값이 다르면 결과도 달라집니다. 따라서 절대값이 아닌 <strong>비교·참고 용도</strong>로 활용하는 것이 바람직합니다.</p>` },
      { type: 'h2', id: 'interpret', text: '결과 해석하기' },
      { type: 'body', html: `<p>계산 결과를 볼 때는 <strong>범위</strong>로 보는 것이 좋습니다. 예컨대 월 12,000원이 나왔다면 실제 보험료는 9,000~16,000원 사이일 가능성이 높습니다. 단일 수치가 아니라 구간으로 이해하고, 2~3개 보험사 공식 견적과 비교해 최종 선택하세요.</p>` },
      { type: 'h2', id: 'limits', text: '한계와 유의사항' },
      { type: 'warning', title: '이 결과는 절대값이 아닙니다', html: '<p>실제 보험료는 건강고지·직업·주행 이력·과거 청구 기록 등으로 크게 달라집니다. 본 계산기는 "대략의 감을 잡기 위한 추정"일 뿐 공식 견적을 대체하지 않습니다.</p>' },
      { type: 'h2', id: 'misuse', text: '흔한 오해' },
      { type: 'body', html: `<ul><li>"계산기 결과가 실제 보험료다" → 아닙니다. 요율은 인수 기준으로 결정됩니다.</li><li>"한 사이트의 결과를 신뢰할 수 있다" → 여러 도구·보험사 견적을 교차 검증해야 합니다.</li><li>"계산 결과만 보고 해지 결정" → 해지 전 기존 보장 손실을 반드시 점검해야 합니다.</li></ul>` },
      { type: 'h2', id: 'howto-use', text: '실제 활용 시나리오' },
      { type: 'body', html: `<p>이 계산기는 다음 상황에 유용합니다: (1) 새 보험을 검토할 때 예산 범위를 먼저 잡기 (2) 기존 가입 보험의 보험료가 적정한지 비교 (3) 갱신형/비갱신형 장기 비용 시뮬레이션. 본격적 결정 단계에서는 반드시 공식 견적을 확인하세요.</p>` },
      { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
      { type: 'faq', items: [
        { q: '왜 실제 보험료와 차이가 나나요?', a: '요율은 개인별 인수 조건(건강고지·직업·연령·지역 등) 조합으로 결정되기 때문입니다.' },
        { q: '계산기 결과로 보험 해지 결정을 해도 되나요?', a: '권장하지 않습니다. 공식 견적과 기존 보장 공백을 함께 점검하세요.' },
        { q: '같은 조건인데 보험사마다 결과가 다릅니다.', a: '보험사별 요율 체계와 손해율이 다릅니다. 공식 견적 비교가 필수입니다.' },
        { q: '얼마나 자주 계산해보는 것이 좋을까요?', a: '주요 변동(결혼·출산·자녀 성인화·차량 교체) 때마다 점검 권장.' },
        { q: '이 결과는 세금·할인 반영인가요?', a: '일반적 평균값 기준이며 세제·할인·경력 할증은 미반영입니다.' },
      ]},
      { type: 'sources', items: s.sources },
      { type: 'medDisclaimer' },
    ]
  }
  const file = path.join(ROOT, 'posts', 'tools', t.slug + '.js')
  console.log(writeIfMissing(file, postToFile(post)), file)
}

// ---------- Compares ----------
ensureDir(path.join(ROOT, 'posts', 'compares'))
for (const m of compares) {
  const s = common(m)
  const post = {
    id: m.id,
    sections: [
      { type: 'intro', html: `<p>${m.description}</p><p>비교 기준일은 <strong>${m.publicDisclosureDate}</strong>이며, 수치는 금감원·협회 공시실에서 제공하는 공개 자료 범위의 예시입니다. 실제 청약 보험료는 인수 기준과 특약 선택에 따라 달라집니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험 상품을 판매·모집하지 않습니다.</p>` },
      { type: 'toc' },
      { type: 'h2', id: 'purpose', text: '이 비교의 목적' },
      { type: 'body', html: `<p>이 페이지는 ${m.title.split('—')[0].trim()}의 핵심 비교 포인트를 공시 기준으로 정리해, 독자가 공식 견적을 비교할 때 기준점을 가질 수 있도록 돕습니다.</p>` },
      { type: 'h2', id: 'criteria', text: '비교 기준' },
      { type: 'body', html: `<ul><li>동일 조건 가정: 연령·성별·보장기간 동일 기준</li><li>공시 기준일: ${m.publicDisclosureDate}</li><li>주계약만 비교(특약 포함 시 개별 차이 큼)</li></ul>` },
      { type: 'h2', id: 'matrix', text: '비교 매트릭스' },
      { type: 'body', html: `<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">항목</th><th style="padding:8px;border:1px solid #E5E7EB">보험사 A</th><th style="padding:8px;border:1px solid #E5E7EB">보험사 B</th><th style="padding:8px;border:1px solid #E5E7EB">보험사 C</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">주요 한도</td><td style="padding:8px;border:1px solid #E5E7EB">공시 기준 예시</td><td style="padding:8px;border:1px solid #E5E7EB">공시 기준 예시</td><td style="padding:8px;border:1px solid #E5E7EB">공시 기준 예시</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">월 보험료 범위</td><td style="padding:8px;border:1px solid #E5E7EB">공시 기준 예시</td><td style="padding:8px;border:1px solid #E5E7EB">공시 기준 예시</td><td style="padding:8px;border:1px solid #E5E7EB">공시 기준 예시</td></tr></table><p style="margin-top:8px">※ 정확한 수치는 각 보험사 공시실과 금감원 금융상품통합비교공시에서 실시간으로 확인하세요.</p>` },
      { type: 'h2', id: 'by-item', text: '항목별 해설' },
      { type: 'body', html: `<h3>보장 한도</h3><p>상품별 기본 한도와 옵션 한도가 다릅니다. 같은 "실손"이라도 비급여 특약 조합에서 차이가 발생합니다.</p><h3>갱신 구조</h3><p>갱신 주기와 재가입 주기의 차이로 장기 총 납입액이 달라집니다.</p><h3>면책·감액 조건</h3><p>상품별 면책기간·감액 기간 규정을 반드시 확인해야 합니다.</p>` },
      { type: 'h2', id: 'target', text: '타겟별 추천(참고)' },
      { type: 'body', html: `<ul><li>초기 보험료 민감자 → 갱신형·다이렉트 채널</li><li>장기 안정성 중시 → 비갱신형·고 신뢰도 회사</li><li>청구 빈도가 높은 사용자 → 청구 편의성·민원 지표 좋은 회사</li></ul><p>이는 일반적 참고이며 "최고" 상품이라고 단정하지 않습니다.</p>` },
      { type: 'h2', id: 'caution', text: '주의사항' },
      { type: 'warning', title: '보험료만 보지 말 것', html: '<p>보험은 사고 시 실질 보상이 핵심입니다. 보험료만 낮은 상품을 선택했다가 정작 청구 시 약관 면책으로 어려움을 겪는 사례가 많습니다.</p>' },
      { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
      { type: 'faq', items: [
        { q: '비교 결과가 실제 청약 결과와 다른 이유는?', a: '인수 기준·건강고지·특약 선택이 반영되지 않은 공시 기준 예시이기 때문입니다.' },
        { q: '가장 저렴한 회사가 언제나 좋은가요?', a: '민원·청구 처리·재무건전성도 함께 봐야 합니다.' },
        { q: '비교표는 얼마나 자주 업데이트되나요?', a: '원칙적으로 분기 1회 이상 갱신합니다.' },
        { q: '특약 포함 비교는 왜 어려운가요?', a: '보험사별 특약 설계가 달라 1:1 대조가 어렵기 때문입니다.' },
        { q: '어떤 보험사 공시를 신뢰해야 하나요?', a: '금감원·협회 공시실이 가장 중립적이며, 보험사 자체 공시실은 최신성이 높습니다.' },
      ]},
      { type: 'sources', items: s.sources },
      { type: 'medDisclaimer' },
    ]
  }
  const file = path.join(ROOT, 'posts', 'compares', m.slug + '.js')
  console.log(writeIfMissing(file, postToFile(post)), file)
}

// ---------- Addons ----------
ensureDir(path.join(ROOT, 'posts', 'addons'))
for (const a of addons) {
  const post = {
    id: a.id,
    sections: [
      { type: 'intro', html: `<p>${a.description}</p><p>본 페이지는 Level C 보조 생활정보로, 보험상품과는 독립된 생활 안전·건강 용품 안내입니다. 이 영역에만 쿠팡 파트너스 제휴 링크가 연결되며, 보험상품 자체에는 절대 연결하지 않습니다.</p>` },
      { type: 'toc' },
      { type: 'h2', id: 'why', text: '왜 필요한가' },
      { type: 'body', html: `<p>${a.title.split('—')[0].trim()}은(는) 사고·질환 예방과 직접 연관되어 있어, 관련 보험 가입 시 함께 챙기면 좋은 실물 장비입니다.</p>` },
      { type: 'h2', id: 'criteria', text: '선택 기준' },
      { type: 'body', html: '<ul><li>공식 인증(KC·ISO 등) 여부</li><li>실사용 리뷰와 AS 정책</li><li>가격대와 품질 균형</li></ul>' },
      { type: 'h2', id: 'link', text: '관련 보험 카테고리' },
      { type: 'body', html: `<ul>${(a.relatedInsuranceCategorySlugs||[]).map(s => `<li><a href="/categories/${s}/">${s} 카테고리 가이드</a></li>`).join('')}</ul>` },
      { type: 'h2', id: 'shop', text: '쿠팡 파트너스 링크' },
      { type: 'productSlot', productKey: a.coupangProductKey },
      { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
      { type: 'faq', items: [
        { q: '이 용품이 있으면 보험이 필요없나요?', a: '아닙니다. 생활 안전용품과 보험은 보완 관계입니다.' },
        { q: '쿠팡 링크는 왜 보험상품에는 없나요?', a: '보험업법 및 보험모집 규제를 준수하기 위함입니다. 쿠팡 링크는 생활용품(Addon)에만 연결합니다.' },
        { q: '가장 인기있는 제품은?', a: '공식 리뷰 수·평점·판매량을 참고해 균형 잡힌 선택을 권장합니다.' },
        { q: '이 용품이 보험 할인과 직접 연결되나요?', a: '블랙박스 등 일부 용품은 자동차보험 할인에 직접 영향을 줍니다.' },
        { q: '반품이 가능한가요?', a: '쿠팡 정책에 따라 개봉 여부·사용 여부로 반품 가능 여부가 달라집니다.' },
      ]},
      { type: 'medDisclaimer' },
    ]
  }
  const file = path.join(ROOT, 'posts', 'addons', a.slug + '.js')
  console.log(writeIfMissing(file, postToFile(post)), file)
}

console.log('Seed complete.')
