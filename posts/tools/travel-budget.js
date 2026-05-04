module.exports = {
  sections: [
    { type: 'intro', html: `여행 예산 계산은 항공·호텔·식비·교통·활동 5개 항목 합산이 핵심입니다. 인원·기간·목적지에 따라 1인 50만 원부터 1,500만 원까지 차이가 납니다. 본 가이드는 권역별 평균 예산과 절약 팁을 정리합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1528606323703-f879e36b2eb4?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 예산 계산 항공 호텔 비용 절약', caption: '여행 예산 완전 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Jordan Opel on Unsplash', imageSourceUrl: 'https://unsplash.com/@opeleye?utm_source=tripspot&utm_medium=referral' },

    { type: 'info', title: '계산기 위젯', html: '인원·기간·목적지 입력 → 항공·호텔·식비·교통·활동 자동 합산. (위젯 컴포넌트 후속 추가 예정 — 현재는 평균 예산 가이드 제공)' },

    { type: 'h2', id: 'breakdown', text: '항목별 예산' },
    { type: 'body', html: `<ul>
      <li><strong>항공</strong>: 비수기 LCC 30~50만 원, 정기 50~100만 원, 장거리(유럽·미국) 150~300만 원</li>
      <li><strong>호텔</strong>: 게스트하우스 1박 3~8만 원, 4성 8~25만 원, 5성 30~150만 원, 풀빌라 25~60만 원/박</li>
      <li><strong>식비</strong>: 동남아 1일 3~5만 원, 일본 1일 5~10만 원, 유럽 1일 10~20만 원, 미국 1일 8~15만 원</li>
      <li><strong>교통</strong>: 시내 1일 1~5만 원, 공항 셔틀 1~3만 원, 렌터카 1일 5~12만 원</li>
      <li><strong>활동</strong>: 박물관 5~30만 원/명, 호핑투어 5~10만 원, 스파 3~10만 원</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '예산에 맞는 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'destination', text: '목적지별 1주일 평균 (1인)' },
    { type: 'body', html: `<ul>
      <li>일본 (도쿄·오사카): 100~200만 원</li>
      <li>대만: 80~150만 원</li>
      <li>베트남(다낭): 100~250만 원</li>
      <li>태국(방콕·푸켓): 100~200만 원</li>
      <li>발리: 200~450만 원</li>
      <li>유럽(파리·로마): 300~700만 원</li>
      <li>미국(하와이): 350~700만 원</li>
      <li>몰디브: 600~1,500만 원</li>
    </ul>` },

    { type: 'h2', id: 'save', text: '절약 팁' },
    { type: 'body', html: `<ul>
      <li>비수기 출발 (2월·6월·11월) — 30~50% 인하</li>
      <li>4~6개월 전 항공권 예약</li>
      <li>LCC 활용 (제주항공·티웨이·진에어·비엣젯)</li>
      <li>게스트하우스 + 5성 1박 결합</li>
      <li>현지 식당·노점 활용 — 호텔 다이닝 1/3 가격</li>
      <li>대중교통 + 트래블카드</li>
      <li>여행자보험 — 1주 1.5~5만 원</li>
    </ul>` },

    { type: 'h2', id: 'limit', text: '계산기 한계' },
    { type: 'body', html: '평균값 기반 추정. 환율·시즌·이벤트(설·연말·골든위크)·항공권 가격 변동 반영 X. 실제 예산은 호텔스컴바인·스카이스캐너·항공사 공식에서 클릭 시점 가격으로 재산정.' },

    { type: 'faq', items: [
      { q: '예산 줄이기 우선?', a: '항공권 — 가장 큰 비중. 비수기 + LCC + 4개월 전.' },
      { q: '5성 vs 4성 가성비?', a: '4성 1박 절반 가격이지만 다이닝·셔틀·스파 차이. 1주에 1박 5성 + 6박 4성도 옵션.' },
      { q: '여행자보험 꼭?', a: '강력 권장. 의료비 부담 큰 일본·미국·유럽. 1주 1.5~5만 원.' },
    ]},

    { type: 'sources', items: [
      { label: '한국관광공사', url: 'https://www.visitkorea.or.kr/', org: '한국관광공사', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
