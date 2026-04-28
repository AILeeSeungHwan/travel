module.exports = {
  sections: [
    { type: 'intro', html: `인도네시아의 발리는 한국인 신혼여행 1순위 목적지 중 하나입니다. 인천에서 7시간 30분 직항(또는 KL/싱가포르 경유), 도착비자 30일, 풍부한 풀빌라·오버워터빌라·요가 리트리트·서핑 비치까지 — 신혼·기념일·디지털 노마드 모두에게 매력적인 섬입니다.<br/><br/>발리는 우붓(전통·문화·요가), 꾸따·세미냐크(비치·나이트라이프·쇼핑), 누사두아(럭셔리 리조트), 짐바란(선셋·시푸드) 등 권역 색채가 분명합니다. 신혼이라면 우붓 1박 + 비치 권역 2박 동선이 인기.` },

    { type: 'info', title: '인도네시아 비자', html: '한국인은 <strong>도착비자(VOA) 30일</strong> 발급 가능, USD 35. 또는 e-VOA 사전 신청. 1회 연장 가능(30일 추가, USD 35). 여권 잔여 6개월 + 출국 항공권 증빙 필수.' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>비자: VOA 30일 (USD 35)</li>
      <li>통화: 루피아(IDR) — 1만 IDR ≈ 850~900원</li>
      <li>시차: WIB(UTC+7) 자카르타 / WITA(UTC+8) 발리</li>
      <li>비행: 인천→발리 7시간 30분 (직항 또는 1회 경유)</li>
      <li>베스트: 4~10월 건기, 11~3월 우기</li>
      <li>전압: 220V, C·F타입</li>
    </ul>` },

    { type: 'h2', id: 'regions', text: '발리 권역' },
    { type: 'body', html: `<ul>
      <li><strong>우붓 (Ubud)</strong>: 전통 마을, 라이스테라스(테가랄랑), 요가, 갤러리, 원숭이숲</li>
      <li><strong>꾸따·레기안</strong>: 비치, 서핑, 야시장</li>
      <li><strong>세미냐크</strong>: 비치 클럽, 부티크 호텔, 미식</li>
      <li><strong>누사두아</strong>: 럭셔리 5성 리조트, 가족 안전 비치</li>
      <li><strong>짐바란</strong>: 선셋 시푸드, 풀빌라</li>
      <li><strong>울루와뚜</strong>: 절벽 사원, 케차 댄스, 럭셔리 빌라</li>
    </ul>` },

    { type: 'h2', id: 'food', text: '미식' },
    { type: 'body', html: `<ul>
      <li>나시고렝 — 인도네시아 볶음밥, IDR 30,000~80,000</li>
      <li>미고렝 — 볶음면, IDR 25,000~60,000</li>
      <li>사테 — 꼬치구이</li>
      <li>가도가도 — 채소 + 땅콩소스</li>
      <li>바비굴링 — 발리 통돼지구이</li>
    </ul>` },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: '5박6일 발리 신혼: 1인 150~300만 원<br/>1주일 풀빌라 4인: 350~700만 원<br/>한 달 살기 우붓: 1인 150~250만 원/월' },

    { type: 'faq', items: [
      { q: '신혼 베스트 동선?', a: '우붓 2박 (라이스테라스·요가) → 세미냐크 또는 누사두아 3박 (비치·풀빌라).' },
      { q: '환전?', a: '공항 X. 시내 합법 환전소(BMC, Central Kuta) — 영수증·이중 카운트 확인.' },
      { q: '안전?', a: '오토바이 도로 주의, 길거리 음식·얼음 첫 1~2일 보수적, 발리 위장염(발리 벨리) 주의.' },
      { q: '풀빌라 추천?', a: '우붓 — Hanging Gardens, Como Shambhala. 누사두아 — 무리아 인터컨티넨탈. 울루와뚜 — Bulgari, Alila.' },
    ]},

    { type: 'sources', items: [
      { label: '인도네시아 e-VOA', url: 'https://molina.imigrasi.go.id/', org: '인도네시아 이민국', accessedAt: '2026-04-25' },
      { label: '인도네시아관광청', url: 'https://www.indonesia.travel/', org: 'Wonderful Indonesia', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
