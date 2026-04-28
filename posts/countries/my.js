module.exports = {
  sections: [
    { type: 'intro', html: `말레이시아는 인천에서 6시간 30분 직항으로 도착하는 다민족 국가입니다. 90일 무비자, 영어 사용 가능, 쿠알라룸푸르(도시·페트로나스 트윈타워)와 코타키나발루(보르네오섬 비치·다이빙)가 양대 거점으로 도시 + 자연을 한 번에 경험할 수 있습니다.<br/><br/>말레이·중국·인도 문화가 어우러져 음식 다양성이 동남아 최고 수준입니다. 가성비도 양호해 1주일 가족여행이 부담 없습니다.` },

    { type: 'info', title: '말레이시아 비자', html: '한국인은 <strong>90일 무비자</strong>. MDAC(Malaysia Digital Arrival Card) 사전 등록 필수 — imigresen-online.imi.gov.my 에서 입국 3일 전부터 작성.' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>비자: 90일 무비자, MDAC 사전 등록</li>
      <li>통화: 링깃(MYR) — 1MYR ≈ 290~310원</li>
      <li>시차: UTC+8 (한국보다 1시간 늦음)</li>
      <li>비행: 인천→KL 6시간 30분, 코타키나발루 5시간 30분</li>
      <li>베스트: KL 연중, 코타키나발루 4~10월</li>
      <li>전압: 230V, G타입</li>
    </ul>` },

    { type: 'h2', id: 'regions', text: '핵심 지역' },
    { type: 'body', html: `<ul>
      <li><strong>쿠알라룸푸르 (KL)</strong>: 페트로나스 트윈타워(443m), 부킷 빈탕 쇼핑·미식, 바투 동굴, 차이나타운</li>
      <li><strong>코타키나발루 (KK)</strong>: 보르네오섬 비치, 키나발루산 트레킹, 호핑투어, 풀빌라</li>
      <li><strong>페낭</strong>: UNESCO 조지타운, 미식 거리</li>
      <li><strong>랑카위</strong>: 면세 섬, 케이블카, 비치</li>
      <li><strong>말라카</strong>: UNESCO 식민지 유산, 강변 도시</li>
    </ul>` },

    { type: 'h2', id: 'food', text: '미식' },
    { type: 'body', html: `<ul>
      <li>나시르막 — 말레이 국민 음식, MYR 5~15</li>
      <li>락사 — 매콤 코코넛 국수, MYR 8~15</li>
      <li>로띠 차나이 — 인도식 팬케이크, MYR 2~5</li>
      <li>찰리 — 호커 면 요리, MYR 8~15</li>
      <li>두리안 — 동남아 과일의 왕(시즌 5~9월)</li>
    </ul>` },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: '5박6일 KL+코타키나발루: 1인 100~200만 원<br/>4박5일 코타키나발루 풀빌라 가족 4인: 250~500만 원' },

    { type: 'faq', items: [
      { q: '코타키나발루 vs 푸켓?', a: '코타키나발루 — 키나발루산·자연·호핑. 푸켓 — 비치·풀빌라 풍부. 두 곳 다 가족 OK.' },
      { q: '아이와 함께?', a: 'KL 트윈타워 + 선웨이 라군 + 코타키나발루 풀빌라 7박8일 가성비 좋음.' },
      { q: '환전?', a: 'KL Mid Valley·부킷 빈탕 환전소 환율 좋음. 공항 환전 불리.' },
      { q: '한국 음식 가능?', a: 'KL·코타키나발루 한식당 풍부. 라면·반찬 챙겨가면 한 달 살기도 OK.' },
    ]},

    { type: 'sources', items: [
      { label: '말레이시아관광청', url: 'https://www.malaysia.travel/', org: 'Tourism Malaysia', accessedAt: '2026-04-25' },
      { label: 'MDAC 사전 등록', url: 'https://imigresen-online.imi.gov.my/mdac/main', org: '말레이시아 이민국', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
