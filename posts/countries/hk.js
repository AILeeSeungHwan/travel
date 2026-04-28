module.exports = {
  sections: [
    { type: 'intro', html: `홍콩은 인천에서 3시간 30분 직항으로 도착하는 미식·야경·쇼핑의 도시입니다. 90일 무비자, 영어·광동어·중국어 사용으로 의사소통 가능, MTR(지하철) 시스템이 정확해 1박2일·2박3일 압축 일정이 가능합니다.<br/><br/>빅토리아피크 야경, 심포니오브라이트 레이저쇼, 딤섬·완탕면·로스트구스의 미식 천국, 침사추이·센트럴·란콰이퐁의 야경·바·쇼핑 — 도시 여행의 정수를 압축한 목적지입니다. 디즈니랜드(란타우)·오션파크 등 가족 콘텐츠도 풍부.` },

    { type: 'info', title: '홍콩 비자 안내', html: '한국인은 <strong>90일 무비자</strong> 입국. 입국 카드 사전 작성 권장. 일부 시기 외교부 여행유의 — 출국 전 0404.go.kr 확인.' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li><strong>비자</strong>: 90일 무비자</li>
      <li><strong>통화</strong>: 홍콩달러(HKD) — 1HKD ≈ 175~185원</li>
      <li><strong>시간대</strong>: HKT(UTC+8) — 한국보다 1시간 늦음</li>
      <li><strong>비행시간</strong>: 인천→홍콩 3시간 30분</li>
      <li><strong>베스트 시즌</strong>: 10~3월 시원, 6~9월 태풍·우기</li>
      <li><strong>전압</strong>: 220V·50Hz, G타입(영국식) — 어댑터 필수</li>
    </ul>` },

    { type: 'h2', id: 'attractions', text: '핵심 명소' },
    { type: 'body', html: `<ul>
      <li><strong>빅토리아피크</strong>: 피크트램, 홍콩 야경 1순위</li>
      <li><strong>심포니오브라이트</strong>: 매일 20시 빅토리아 항구 레이저쇼 (10분)</li>
      <li><strong>침사추이·스타의 거리</strong>: 야경·쇼핑 거점</li>
      <li><strong>센트럴·란콰이퐁</strong>: 바·이자카야·파인다이닝</li>
      <li><strong>몽콕·여인거리</strong>: 야시장·쇼핑</li>
      <li><strong>홍콩디즈니랜드 / 오션파크</strong>: 가족여행</li>
      <li><strong>스탠리·라마섬</strong>: 휴양·시푸드</li>
    </ul>` },

    { type: 'h2', id: 'food', text: '미식' },
    { type: 'body', html: `<ul>
      <li><strong>딤섬</strong>: 팀호완(미슐랭 가이드)·룽킹힌·예상푼 — 1인 HKD 80~200</li>
      <li><strong>완탕면</strong>: 막인기·창팟청 — HKD 50~80</li>
      <li><strong>로스트구스</strong>: 욱림(미슐랭) — HKD 200~400</li>
      <li><strong>밀크티</strong>: 차찬텡(홍콩 다방) — HKD 20~40</li>
      <li><strong>빙수·디저트</strong>: 허만·엽시 — HKD 50~100</li>
    </ul>` },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: `1박2일: 1인 50~100만 원<br/>2박3일: 1인 80~150만 원<br/>3박4일 가족 4인: 350~600만 원<br/><br/>호텔비가 동남아 대비 비싼 편(1박 HKD 800~2,000) — 호스텔·게스트하우스(HKD 300~600)도 옵션.` },

    { type: 'faq', items: [
      { q: '추천 일정?', a: '2박3일 — 1일차 빅토리아피크·심포니, 2일차 침사추이·란콰이퐁, 3일차 디즈니 또는 라마섬.' },
      { q: '옥토퍼스 카드는?', a: 'MTR·버스·편의점 모두 사용. 보증금 HKD 50 + 충전. 공항 도착 즉시 발급.' },
      { q: '신용카드?', a: '식당·쇼핑몰 OK. 야시장·일부 차찬텡은 현금. 옥토퍼스로 대부분 해결.' },
      { q: '날씨 6~9월 태풍?', a: '태풍 직격 시 MTR·항공 일부 운행 중단. 여행자보험 필수.' },
      { q: '아이와 함께?', a: '디즈니 + 오션파크 + 피크 + 스타페리 = 4일 가능.' },
    ]},

    { type: 'sources', items: [
      { label: '홍콩관광청', url: 'https://www.discoverhongkong.com/kr/', org: 'HKTB', accessedAt: '2026-04-25' },
      { label: '외교부 해외안전여행 — 홍콩', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
