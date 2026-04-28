module.exports = {
  sections: [
    { type: 'intro', html: `영국은 인천에서 12시간 직항으로 도착하는 유럽 여행의 입문지입니다. <strong>6개월 무비자</strong>이지만 <strong>ETA(전자여행허가)</strong> 시행으로 출국 전 사전 신청이 필수가 됐습니다(GBP 10).<br/><br/>런던·에든버러·코츠월드·옥스퍼드·바스·체스터까지 — 도시·자연·문학·역사가 결합된 다채로운 목적지. 7~8월 여름이 베스트, 한 해 절반은 흐림·비.` },

    { type: 'risk', title: '영국 ETA 사전 신청 (Level A)', html: '한국 일반 여권은 6개월 무비자이지만 <strong>ETA 사전 신청 의무화</strong> — 출국 전 gov.uk 에서 GBP 10로 신청. 출국 전 외교부 영사민원24·주영 한국대사관에서 최신 정책 재확인 필수.' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>비자: 6개월 무비자, ETA 사전 신청 의무</li>
      <li>통화: 파운드(GBP) — 1GBP ≈ 1,700~1,800원</li>
      <li>시차: GMT(UTC+0) — 한국보다 9시간 늦음(서머타임 8시간)</li>
      <li>비행: 인천→런던 12시간</li>
      <li>베스트: 5~9월, 12월 크리스마스 마켓</li>
      <li>전압: 230V, G타입(영국식 3핀)</li>
    </ul>` },

    { type: 'h2', id: 'regions', text: '핵심 지역' },
    { type: 'body', html: `<ul>
      <li><strong>런던</strong>: 빅벤·웨스트민스터·런던아이·타워브리지·하이드파크·뮤지컬. 5박</li>
      <li><strong>에든버러</strong>: 스코틀랜드 수도, 8월 프린지 페스티벌</li>
      <li><strong>코츠월드</strong>: 영국 시골 마을, 차로 2시간</li>
      <li><strong>바스</strong>: 로마 온천 도시, UNESCO</li>
      <li><strong>옥스퍼드·케임브리지</strong>: 대학가</li>
      <li><strong>스톤헨지</strong>: 신석기 거석</li>
    </ul>` },

    { type: 'h2', id: 'food', text: '미식' },
    { type: 'body', html: '피쉬앤칩스(GBP 12~18), 영국식 아침(잉글리시 브렉퍼스트), 애프터눈티(고든램지 호텔, 클래리지스), 선데이로스트, 인디안 카레(런던은 인도 음식 천국).' },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: '7박8일 런던: 1인 300~600만 원<br/>10박 영국 일주: 1인 500~900만 원' },

    { type: 'faq', items: [
      { q: 'ETA 신청은?', a: 'gov.uk 에서 출국 전 신청. GBP 10. 결과 문자/이메일.' },
      { q: '8월 페스티벌?', a: '에든버러 프린지 — 세계 최대 공연 축제. 호텔 가격 폭등, 6개월 전 예약.' },
      { q: '뮤지컬 추천?', a: '레미제라블·라이언킹·해리포터(웨스트엔드).' },
      { q: '런던 교통?', a: '오이스터카드·콘택트리스 카드. 메트로·버스 모두 터치.' },
    ]},

    { type: 'sources', items: [
      { label: '영국 정부 ETA', url: 'https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta', org: 'UK Government', accessedAt: '2026-04-25' },
      { label: '영국관광청', url: 'https://www.visitbritain.com/kr/ko', org: 'Visit Britain', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
