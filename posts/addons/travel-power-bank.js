module.exports = {
  sections: [
    { type: 'intro', html: `보조배터리는 여행 중 휴대폰·노트북 충전에 필수입니다. 항공 안전 규정상 100Wh(약 27,000mAh) 이하만 자유롭게 기내 반입 가능, 100~160Wh는 항공사 승인 필요, 160Wh 초과는 금지.` },

    { type: 'h2', id: 'spec', text: '용량별 추천' },
    { type: 'body', html: `<ul>
      <li><strong>10,000mAh (37Wh)</strong>: 휴대폰 2~3회 — 1박2일 가벼운 여행</li>
      <li><strong>20,000mAh (74Wh)</strong>: 휴대폰 5~6회 + 태블릿 — 1주일 표준</li>
      <li><strong>26,800mAh (99Wh)</strong>: 휴대폰 7~8회 + 노트북 1회 — 워케이션·장기</li>
      <li><strong>30,000mAh+</strong>: 100Wh 초과 — 항공 X 또는 항공사 승인</li>
    </ul>` },

    { type: 'h2', id: 'fast-charge', text: '고속충전 PD/QC' },
    { type: 'body', html: `<ul>
      <li><strong>USB PD (Power Delivery)</strong>: 18~100W. 노트북·아이폰·갤럭시 고속</li>
      <li><strong>퀄컴 QC (Quick Charge)</strong>: 3.0/4.0. 안드로이드 고속</li>
      <li><strong>일반 5V 2A</strong>: 표준</li>
    </ul>구매 시 PD 65W 이상 권장 — 노트북·휴대폰·태블릿 모두 고속.` },

    { type: 'h2', id: 'air', text: '항공 규정' },
    { type: 'body', html: `<ul>
      <li><strong>위탁 X</strong>: 모든 보조배터리 기내만</li>
      <li><strong>100Wh 이하</strong>: 자유로 — 휴대 가능 (1인 2~3개)</li>
      <li><strong>100~160Wh</strong>: 항공사 승인 — 1인 2개</li>
      <li><strong>160Wh 초과</strong>: 항공기 반입 금지</li>
    </ul>27,000mAh 이상이면 항공사 사전 확인.` },

    { type: 'h2', id: 'recommended', text: '추천 모델' },
    { type: 'body', html: `<ul>
      <li>샤오미·앤커·아이리버 — 가성비</li>
      <li>샌이지 슈퍼차저 — PD 100W 노트북 충전</li>
      <li>로미오스 — 슬림 디자인</li>
      <li>샤오미 50000mAh — 100Wh 초과 — 항공 승인 필요</li>
    </ul>` },

    { type: 'productSlot', productKey: 'travel-power-bank' },

    { type: 'faq', items: [
      { q: '몇 개 가져갈 수?', a: '100Wh 이하 1인 2~3개. 100~160Wh 1인 2개.' },
      { q: '노트북도 충전?', a: 'PD 65W 이상 + USB-C 노트북 호환. 맥북·델·LG 그램 OK.' },
      { q: '어떤 용량?', a: '20,000mAh PD 1개가 가장 범용. 가족은 30,000mAh 또는 2개.' },
    ]},

    { type: 'disclaimer' },
  ]
}
