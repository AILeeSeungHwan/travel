module.exports = {
  sections: [
    { type: 'intro', html: `필리핀은 인천에서 4~4시간 30분 직항으로 도착하는 7,641개 섬의 비치 휴양지입니다. 30일 무비자, 영어 공용 공식어 중 하나로 의사소통이 부담 없고, 세부·보라카이·팔라완 등 권역마다 비치·다이빙·풀빌라가 풍부합니다.<br/><br/>호핑투어·다이빙(워라이드 보트로 산호초·바다거북·고래상어), 풀빌라·5성 리조트 가성비, 한국인 운영 식당·여행사 풍부 — 신혼·가족·다이빙 마니아 모두에게 인기 동남아 휴양지.` },

    { type: 'info', title: '필리핀 비자 안내', html: '한국인은 <strong>30일 무비자</strong> 입국. 30일 초과 시 이민국에서 연장(29일 추가, PHP 3,030). 여권 유효기간 잔여 6개월 이상 + 왕복 항공권 증빙 필수. 일부 지역(남부 민다나오) 외교부 여행자제·철수권고 — 출국 전 반드시 0404.go.kr 확인.' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li><strong>비자</strong>: 30일 무비자, 연장 가능</li>
      <li><strong>통화</strong>: 필리핀 페소(PHP) — 100PHP ≈ 2,400~2,500원</li>
      <li><strong>시간대</strong>: PHT(UTC+8) — 한국보다 1시간 늦음</li>
      <li><strong>비행시간</strong>: 인천→마닐라 4시간, 세부 4시간 30분</li>
      <li><strong>베스트 시즌</strong>: 12~5월 건기, 6~11월 우기·태풍</li>
      <li><strong>전압</strong>: 220V·60Hz, A·B타입</li>
      <li><strong>안전 등급</strong>: 일부 남부 지역 여행자제 — 핵심 관광지(세부·보라카이·팔라완)는 안전</li>
    </ul>` },

    { type: 'h2', id: 'regions', text: '핵심 지역' },
    { type: 'body', html: `<ul>
      <li><strong>세부 (Cebu)</strong>: 막탄섬 5성 리조트, 호핑투어, 고래상어(오슬롭), 카와산폭포</li>
      <li><strong>보라카이 (Boracay)</strong>: 화이트비치(세계 5대 비치), 풀빌라, 야간 파티</li>
      <li><strong>팔라완 (Palawan)</strong>: 엘니도(절경)·푸에르토프린세사 지하강(UNESCO)</li>
      <li><strong>마닐라 / 따가이따이</strong>: 화산호수 + 도시</li>
      <li><strong>바탕가스 / 푸에르토 갈레라</strong>: 마닐라 차로 2시간 다이빙</li>
    </ul>` },

    { type: 'h2', id: 'food', text: '미식' },
    { type: 'body', html: `<ul>
      <li><strong>레촌</strong>: 통돼지 바비큐 — 잔치·기념일 메뉴</li>
      <li><strong>아도보</strong>: 닭/돼지 + 간장·식초 — 가정식</li>
      <li><strong>시니강</strong>: 매콤 신맛 수프</li>
      <li><strong>망고·할로할로</strong>: 디저트 천국</li>
      <li><strong>씨푸드</strong>: 막탄·보라카이 — 1인 PHP 800~1,500</li>
    </ul>` },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: `4박5일 세부 풀빌라 가족 4인: 250~500만 원<br/>5박6일 보라카이: 1인 100~200만 원<br/>5박6일 팔라완: 1인 130~250만 원` },

    { type: 'h2', id: 'safety', text: '안전 주의' },
    { type: 'body', html: `남부 민다나오 일부 지역(술루·마라위) 외교부 <strong>여행자제·철수권고</strong>. 핵심 관광지(세부·보라카이·팔라완)는 일반 여행안전이지만 다음 주의:<br/><ul><li>야간 외출은 그룹·호텔 셔틀 이용</li><li>현금 노출 자제, 분실 시 대응 절차 사전 숙지</li><li>호핑투어·다이빙 — 자격증 보유 업체 선택</li><li>택시·뚝뚝 — 미터기 또는 Grab</li></ul>` },

    { type: 'faq', items: [
      { q: '세부 vs 보라카이?', a: '세부 — 다이빙·고래상어·가족 리조트. 보라카이 — 화이트비치·신혼·파티. 둘 다 가족 OK.' },
      { q: '환전은?', a: '한국 USD 환전 후 현지 USD→PHP가 환율 유리. 공항 환전소는 불리.' },
      { q: '신용카드?', a: '5성 리조트 OK. 비치 식당·노점·호핑투어는 현금. 1만 PHP 보유 권장.' },
      { q: '아이와 함께 안전한가요?', a: '5성 리조트 내부는 안전. 외부 호핑투어는 가이드 동반. 음식·물 보수적으로.' },
      { q: '한국 여행객 많은가요?', a: '세부 막탄·보라카이·팔라완 모두 한국인 인구 多. 한식당·한국인 가이드 풍부.' },
    ]},

    { type: 'sources', items: [
      { label: '외교부 해외안전여행 — 필리핀', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
      { label: '필리핀관광청', url: 'https://philippines.travel/', org: 'DOT', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
