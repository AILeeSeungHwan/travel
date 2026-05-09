module.exports = {
  sections: [
    { type: 'intro', html: `1박2일·2박3일 국내 여행은 직장인 주말·연휴 활용 + 가족 단기 휴가에 가장 효율적입니다. KTX·고속도로 인프라가 발달해 서울 출발 2~3시간이면 부산·강릉·전주·경주 등 주요 도시 도착. 본 가이드는 서울 출발 BEST 코스를 정리합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1611153532534-d72e8baca034?auto=format&fit=crop&q=80&w=1200', alt: '국내 여행 부산 강릉 제주 1박2일 2박3일', caption: '국내 1박2일·2박3일 여행 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Pond Juprasong on Unsplash', imageSourceUrl: 'https://unsplash.com/@pondjup?utm_source=travel.ambitstock&utm_medium=referral' },

    { type: 'h2', id: 'top', text: '서울 출발 1박2일 BEST' },
    { type: 'body', html: `<ul>
      <li><strong>강릉·속초</strong>: KTX 2시간. 비치 + 카페 + 회. 1인 20~40만 원.</li>
      <li><strong>부산</strong>: KTX 2.5시간. 해운대·광안리·자갈치. 1인 25~50만 원.</li>
      <li><strong>전주</strong>: KTX 1.5시간. 한옥마을·비빔밥·막걸리. 1인 15~30만 원.</li>
      <li><strong>경주</strong>: KTX 2.5시간. 불국사·황리단길·한복. 1인 25~50만 원.</li>
      <li><strong>여수</strong>: KTX 3시간. 해상케이블카·향일암·갓김치. 1인 30~60만 원.</li>
      <li><strong>가평·양평</strong>: 차로 1시간. 풀빌라·캠핑·페트라르카. 가족 50~150만 원.</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '국내 여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'sample-east', text: '샘플 — 강릉 1박2일' },
    { type: 'body', html: `<strong>1일</strong>:<br/>09:00 KTX 출발<br/>11:00 강릉 도착·렌터카 또는 택시<br/>12:00 점심 — 초당두부<br/>14:00 안목해변 카페거리 (테라로사)<br/>17:00 호텔 체크인<br/>19:00 저녁 — 회 또는 물회 (속초)<br/><br/><strong>2일</strong>:<br/>06:00 정동진 일출 (선택)<br/>09:00 호텔 조식<br/>10:30 경포해변 산책<br/>12:00 점심 — 짬뽕 또는 막국수<br/>15:00 KTX 복귀` },

    { type: 'h2', id: 'sample-busan', text: '샘플 — 부산 2박3일' },
    { type: 'body', html: `<strong>1일</strong>: 해운대·광안리 야경<br/><strong>2일</strong>: 자갈치·BIFF·감천문화마을·태종대<br/><strong>3일</strong>: 송도 케이블카·서면 쇼핑·복귀` },

    { type: 'h2', id: 'tips', text: '국내 1박2일 팁' },
    { type: 'body', html: `<ul>
      <li>KTX·SRT 1~2주 전 예매 — 주말 매진</li>
      <li>호텔·풀빌라 4~6주 전 (성수기·연휴)</li>
      <li>렌터카 — 강원·제주 필수, 도시는 대중교통</li>
      <li>맛집 사전 예약 — 디너 메인 식당</li>
      <li>날씨 — 비 예보 시 실내 동선(박물관·카페·쇼핑)</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '직장인 1박2일 추천?', a: '금요일 야간 출발 — 강릉·속초·부산. 토일 1박2일.' },
      { q: '가족 4인 추천?', a: '가평 풀빌라·강릉·경주·전주. 1인 30~60만 원.' },
      { q: '겨울 1박2일?', a: '평창·정선 스키, 강릉 1월 일출, 안동 빙어, 무주.' },
      { q: 'KTX vs 자가용?', a: 'KTX — 도시(부산·광주). 자가용 — 강원·해안 자유 동선.' },
    ]},

    { type: 'sources', items: [
      { label: '한국관광공사', url: 'https://www.visitkorea.or.kr/', org: '한국관광공사', accessedAt: '2026-04-25' },
      { label: '코레일톡 KTX', url: 'https://www.letskorail.com/', org: '한국철도공사', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
