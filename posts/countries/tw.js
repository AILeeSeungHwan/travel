module.exports = {
  sections: [
    { type: 'intro', html: `대만은 인천에서 2시간 30분 직항으로 도착하는 가장 가까운 동아시아 미식·문화 여행지입니다. 90일 무비자, 한국과 시차 1시간, 영어·중국어 표지가 풍부해 첫 해외여행에도 부담 없습니다.<br/><br/>타이페이 도심 야시장(스린·라오허·닝샤)의 풍부한 미식, 지우펀의 홍등 골목과 센과 치히로 분위기, 스펀 천등 날리기, 단수이 일몰까지 1박2일·2박3일 압축 동선으로 모두 즐길 수 있어 직장인 주말 여행 1순위로 자리잡았습니다.<br/><br/>본 페이지는 타이페이를 중심으로 가오슝·타이중·화롄까지 광역별 추천과 비자·교통·미식·시즌을 정리합니다.` },

    { type: 'info', title: '대만 비자 안내', html: '한국인은 <strong>90일 무비자</strong> 입국 가능. 여권 유효기간 잔여 6개월 이상 필수. 입국 카드는 출발 전 immigration.gov.tw 에서 사전 작성 가능.' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li><strong>비자</strong>: 90일 무비자</li>
      <li><strong>통화</strong>: 신대만달러(TWD) — 100TWD ≈ 4,200~4,400원</li>
      <li><strong>시간대</strong>: CST(UTC+8) — 한국보다 1시간 늦음</li>
      <li><strong>비행시간</strong>: 인천→타이페이 2시간 30분</li>
      <li><strong>베스트 시즌</strong>: 10~4월, 6~9월 태풍·습기</li>
      <li><strong>전압</strong>: 110V·60Hz, A·B타입 — 한국 220V 어댑터 필수</li>
    </ul>` },

    { type: 'h2', id: 'why', text: '왜 대만 여행인가' },
    { type: 'body', html: '대만은 <strong>야시장 미식의 본고장</strong>입니다. 1인 1끼 100~250TWD(약 4,000~10,000원)에 샤오롱바오·우육면·지파이·버블티·망고빙수까지 모두 즐길 수 있어 음식 평균 비용이 가장 낮은 동아시아 목적지 중 하나입니다. 또한 <strong>일본 료칸·온천 분위기를 압축</strong>한 베이터우 온천(타이페이 시내 30분), 영화 "센과 치히로" 분위기 지우펀 등 문화·감성 콘텐츠도 풍부합니다.' },

    { type: 'h2', id: 'regions', text: '광역별 가이드' },
    { type: 'body', html: `<ul>
      <li><strong>타이페이</strong>: 101빌딩, 스린야시장, 단수이, 베이터우 온천, 지우펀(차로 1시간)·스펀(천등)</li>
      <li><strong>가오슝</strong>: 남부 항구도시, 르웨탄 호수, 미식·LRT</li>
      <li><strong>타이중</strong>: 중부 거점, 가오메이 습지, 차밭 투어</li>
      <li><strong>화롄</strong>: 동부 자연, 타로코 협곡(태풍 후 통제 잦음)</li>
      <li><strong>컨딩</strong>: 남부 비치, 가오슝에서 차로 2시간</li>
    </ul>` },

    { type: 'h2', id: 'transport', text: '교통' },
    { type: 'body', html: '타이페이 MRT(지하철) 1회 20~65TWD, 1일권 150TWD. 이지카드(EasyCard) 충전식 — 편의점 결제 가능. 타이페이→가오슝 고속철도 1시간 30분(THSR, 1,490TWD). 시내 택시 미터기 작동 — 안전·합리적. 우버·Grab도 사용 가능.' },

    { type: 'h2', id: 'food', text: '미식 추천' },
    { type: 'body', html: `<ul>
      <li><strong>딘타이펑</strong>: 샤오롱바오 본점 — 신이점 추천</li>
      <li><strong>우육면(牛肉麵)</strong>: 100~200TWD, 길거리·식당 보편</li>
      <li><strong>지파이</strong>: 거대 닭다리 튀김, 70~100TWD</li>
      <li><strong>망고빙수</strong>: 빙기·아이스몬스터, 250~400TWD</li>
      <li><strong>버블티</strong>: 50라이·코코·쩐주 — 본고장 1잔 60~100TWD</li>
      <li><strong>야시장</strong>: 스린·라오허·닝샤 — 1인 200~500TWD</li>
    </ul>` },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: `1박2일 타이페이: 1인 35~70만 원<br/>2박3일 타이페이+지우펀: 1인 50~100만 원<br/>4박5일 타이페이+가오슝: 1인 80~140만 원` },

    { type: 'faq', items: [
      { q: '타이페이 1박2일 가능한가요?', a: '직항 2.5시간이라 가능. 하지만 광역 즐기려면 2박3일 권장.' },
      { q: '환전은?', a: '시내 환전소(타이페이역·시먼딩) 환율 유리. 공항 환전소 차이 큼. 트래블카드 OK.' },
      { q: '한국 신용카드 사용?', a: '백화점·5성호텔 OK. 야시장·노점·일부 식당 현금. 1만 TWD 보유 권장.' },
      { q: '아이와 함께 갈 만한 곳?', a: '타이페이 동물원, 어린이 야시장, 가오슝 의대공원, 르웨탄 자전거.' },
      { q: '대만 vs 일본 미식?', a: '가성비·다양성은 대만 우위. 정통성·디테일은 일본. 개인 취향.' },
      { q: '6~9월 태풍 시즌은?', a: '태풍 직격 시 항공 취소·관광지 폐쇄. 여행자보험 가입 필수.' },
    ]},

    { type: 'sources', items: [
      { label: '외교부 해외안전여행 — 대만', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
      { label: '대만관광청', url: 'https://eng.taiwan.net.tw/', org: 'Taiwan Tourism Bureau', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
