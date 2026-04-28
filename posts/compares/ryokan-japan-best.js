module.exports = {
  sections: [
    { type: 'intro', html: `일본 료칸·온천 4대 지역(유후인·하코네·구사쓰·벳푸)을 비교합니다. 거리·분위기·물질·가격·접근성 기준. 신혼·효도·기념일 여행에 적합한 료칸을 선택하는 가이드입니다.` },

    { type: 'h2', id: 'matrix', text: '비교 매트릭스' },
    { type: 'body', html: `<table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="background:#F8FAFC"><th style="padding:6px;border:1px solid #E2E8F0">지역</th><th style="padding:6px;border:1px solid #E2E8F0">접근</th><th style="padding:6px;border:1px solid #E2E8F0">분위기</th><th style="padding:6px;border:1px solid #E2E8F0">물질</th><th style="padding:6px;border:1px solid #E2E8F0">1박</th></tr>
      <tr><td style="padding:6px;border:1px solid #E2E8F0"><strong>유후인 (오이타)</strong></td><td style="padding:6px;border:1px solid #E2E8F0">후쿠오카 차로 2시간</td><td style="padding:6px;border:1px solid #E2E8F0">잔잔·마을·산기슭</td><td style="padding:6px;border:1px solid #E2E8F0">단순천·중탄산천</td><td style="padding:6px;border:1px solid #E2E8F0">30~80만 원</td></tr>
      <tr><td style="padding:6px;border:1px solid #E2E8F0"><strong>하코네 (가나가와)</strong></td><td style="padding:6px;border:1px solid #E2E8F0">도쿄 1.5시간</td><td style="padding:6px;border:1px solid #E2E8F0">후지산·아시노코·관광</td><td style="padding:6px;border:1px solid #E2E8F0">유황천·산성천·다양</td><td style="padding:6px;border:1px solid #E2E8F0">40~100만 원</td></tr>
      <tr><td style="padding:6px;border:1px solid #E2E8F0"><strong>구사쓰 (군마)</strong></td><td style="padding:6px;border:1px solid #E2E8F0">도쿄 차로 3시간</td><td style="padding:6px;border:1px solid #E2E8F0">전통·산악·온천 3대</td><td style="padding:6px;border:1px solid #E2E8F0">강산성천 (피부 강함)</td><td style="padding:6px;border:1px solid #E2E8F0">30~70만 원</td></tr>
      <tr><td style="padding:6px;border:1px solid #E2E8F0"><strong>벳푸 (오이타)</strong></td><td style="padding:6px;border:1px solid #E2E8F0">후쿠오카 2시간</td><td style="padding:6px;border:1px solid #E2E8F0">번화·8지옥·체험</td><td style="padding:6px;border:1px solid #E2E8F0">9가지 천질 (일본 최다)</td><td style="padding:6px;border:1px solid #E2E8F0">25~60만 원</td></tr>
    </table>` },

    { type: 'h2', id: 'recommend', text: '타겟별 추천' },
    { type: 'body', html: `<ul>
      <li><strong>신혼·기념일</strong>: 유후인 — 잔잔·고요·갤러리</li>
      <li><strong>관광 + 료칸</strong>: 하코네 — 후지산·아시노코·도쿄 1.5시간</li>
      <li><strong>온천 정통</strong>: 구사쓰 — 일본 3대 온천</li>
      <li><strong>가성비·체험</strong>: 벳푸 — 8지옥·9천질·시영온천 200엔</li>
      <li><strong>효도여행</strong>: 유후인·하코네 (잔잔·접근성)</li>
    </ul>` },

    { type: 'h2', id: 'reservation', text: '예약 팁' },
    { type: 'body', html: `<ul>
      <li>라쿠텐 트래블·자란·일본의 료칸 사이트</li>
      <li>11~3월(단풍·설경) 6개월 전</li>
      <li>가족 료칸: 객실 전용탕 (아이 동반)</li>
      <li>고급 료칸 (호시노야·아만): 1박 100만 원+, 12개월 전</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '한국인 1순위?', a: '유후인 — 잔잔하고 SNS 분위기 좋음. 후쿠오카 1박2일 + 유후인 1박 인기.' },
      { q: '도쿄에서 가까운?', a: '하코네 — 1.5시간. 도쿄 일정 중 1박 추가.' },
      { q: '온천 강도?', a: '구사쓰 강산성천 = 자극 강함, 짧게(5~10분). 유후인 단순천 = 부드러움.' },
    ]},

    { type: 'sources', items: [
      { label: 'JNTO', url: 'https://www.jnto.go.jp/', org: 'JNTO', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
