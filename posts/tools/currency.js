module.exports = {
  sections: [
    { type: 'intro', html: `여행 환율 계산은 한국은행 ECOS API의 매매기준율을 기준으로 합니다. 실제 환전 환율은 매매기준율 + 수수료(0.5~3%) 더해진 값. 트래블카드는 매매기준율에 가깝게 적용되어 가장 유리합니다.` },

    { type: 'info', title: '계산기 위젯', html: '한국은행 ECOS API 일별 환율 자동 조회. KRW ↔ USD/JPY/EUR/CNY/THB/VND/IDR/SGD/HKD 등. (위젯 후속 추가)' },

    { type: 'h2', id: 'rates', text: '주요 통화 (2026년 4월 기준 평균)' },
    { type: 'body', html: `<ul>
      <li>USD 1 ≈ 1,350~1,420 KRW</li>
      <li>JPY 100 ≈ 950~1,000 KRW</li>
      <li>EUR 1 ≈ 1,400~1,450 KRW</li>
      <li>CNY 1 ≈ 190~200 KRW</li>
      <li>THB 100 ≈ 4,000~4,200 KRW</li>
      <li>VND 10,000 ≈ 540~580 KRW</li>
      <li>IDR 10,000 ≈ 850~900 KRW</li>
      <li>SGD 1 ≈ 1,000~1,050 KRW</li>
      <li>HKD 1 ≈ 175~185 KRW</li>
      <li>TWD 100 ≈ 4,200~4,400 KRW</li>
    </ul>매일 변동 — 한국은행 ECOS 또는 NaverFinance 실시간 확인.` },

    { type: 'h2', id: 'conversion', text: '환율 적용 — 실제 차이' },
    { type: 'body', html: `<strong>매매기준율</strong>(한국은행) → <strong>전신환매도율</strong>(은행 환전) 약 +1~1.5% → <strong>현찰매도율</strong>(현금 환전) +1.5~2.5% → <strong>공항 환전소</strong> +3~5%.<br/><br/><strong>트래블카드</strong>: 매매기준율 ≈ 100% 우대 = 가장 유리. <strong>시중은행 우대권</strong>: 50~80% 우대.` },

    { type: 'h2', id: 'tips', text: '환율 절약 팁' },
    { type: 'body', html: `<ul>
      <li>출국 1~2주 전 분할 환전 — 평균 비용 분산</li>
      <li>트래블카드 (트래블월렛·하나 트래블로그) — 환전 즉시 그 시점 환율 고정</li>
      <li>공항 환전 X — 환율 가장 불리</li>
      <li>해외 결제 시 DCC(원화 결제) X — 5~10% 손실</li>
      <li>여행 마치고 잔액 재환전 — 30~50% 손실, 가능한 만큼 사용</li>
    </ul>` },

    { type: 'h2', id: 'limit', text: '한계' },
    { type: 'body', html: '환율은 매일·매시간 변동. 본 계산기 결과는 작성일 기준 평균. 실제 환전 시 한국은행 ECOS·은행 앱·트래블카드 충전 시점 환율 확인.' },

    { type: 'faq', items: [
      { q: '환율 가장 좋은 시점?', a: '예측 불가. 평일 오후·주중·뉴욕 마감 후 변동성 작음. 분할 환전이 최선.' },
      { q: '엔화 약세 활용?', a: '엔화 약세 시 일본 여행 +면세점 쇼핑 인기. 출국 전 ECOS 확인.' },
      { q: '동남아는 어떻게?', a: 'USD 환전 후 현지에서 USD→현지통화 환율 가장 유리.' },
    ]},

    { type: 'sources', items: [
      { label: '한국은행 ECOS', url: 'https://ecos.bok.or.kr/', org: '한국은행', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
