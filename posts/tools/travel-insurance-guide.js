module.exports = {
  sections: [
    { type: 'intro', html: `여행자보험은 의료비·휴대품 도난·항공 지연·여권 분실 등 해외에서 발생하는 사고를 보장합니다. 1주 1.5~10만 원 수준이며, 의료비 부담이 큰 일본·미국·유럽 여행 시 특히 권장됩니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1714388286286-15a5a8ead30b?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 여행자보험 의료비 보장 가이드', caption: '여행자보험 완전 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Danielle-Claude Bélanger on Unsplash', imageSourceUrl: 'https://unsplash.com/@dbelanger?utm_source=tripspot&utm_medium=referral' },

    { type: 'h2', id: 'coverage', text: '핵심 보장 항목' },
    { type: 'body', html: `<ul>
      <li><strong>해외 의료비</strong>: 응급실·입원·수술 — USD 50,000~500,000 보장 (가장 중요)</li>
      <li><strong>휴대품 도난·분실</strong>: 가방·노트북·카메라 — 1품목 50만 원, 총 200~500만 원</li>
      <li><strong>여권 분실 재발급</strong>: 부대 비용</li>
      <li><strong>항공 지연·결항</strong>: 4시간 이상 지연 시 1일 5~20만 원</li>
      <li><strong>수하물 지연</strong>: 24시간 이상 — 의류·세면용품 구매비</li>
      <li><strong>배상 책임</strong>: 호텔·렌터카 손괴 — 1억 원</li>
      <li><strong>응급 의료 송환</strong>: 한국 후송 — USD 100,000+</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'amount', text: '보장 금액 권장' },
    { type: 'body', html: `<ul>
      <li><strong>동남아·국내</strong>: 의료 USD 30,000~50,000</li>
      <li><strong>일본·대만·중국</strong>: 의료 USD 50,000~100,000</li>
      <li><strong>유럽</strong>: 의료 USD 100,000~200,000</li>
      <li><strong>미국</strong>: 의료 USD 200,000~500,000 (의료비 매우 비쌈 — 응급실 1회 USD 1,000~5,000)</li>
      <li><strong>60세+</strong>: 보험료 1.5~2배, 의료 보장 강화</li>
    </ul>` },

    { type: 'h2', id: 'companies', text: '주요 보험사' },
    { type: 'body', html: `<ul>
      <li>삼성·DB·KB·현대·메리츠 — 시중 보험사</li>
      <li>차박·캐롯·H.Plus — 디지털 신생</li>
      <li>마이뱅크·토스·카카오페이 — 1일권 옵션 多</li>
      <li>해외 보험사: World Nomads (장기 여행), Allianz</li>
    </ul>가입 사이트: 직접 보험사 또는 비교 사이트(보험몰·트래블월렛 부가).` },

    { type: 'h2', id: 'cost', text: '평균 비용 (1주)' },
    { type: 'body', html: `<ul>
      <li>20~30대 동남아: 1.5~2.5만 원</li>
      <li>30~40대 일본: 2~3만 원</li>
      <li>50대 유럽: 3~5만 원</li>
      <li>60세+ 미국: 8~15만 원</li>
      <li>가족 4인 패키지: 5~10만 원</li>
    </ul>` },

    { type: 'h2', id: 'exclusions', text: '면책 사항 (보장 제외)' },
    { type: 'body', html: `<ul>
      <li>외교부 여행경보 3·4단계 국가</li>
      <li>음주·약물 관련 사고</li>
      <li>전쟁·테러·내란</li>
      <li>스카이다이빙·번지점프·스쿠버 다이빙(자격 없음) 등 위험 스포츠</li>
      <li>치과·치료 중인 기존 질환 (사전 고지 필수)</li>
      <li>임신 32주 이상</li>
    </ul>위 활동 예정 시 전용 특약 추가.` },

    { type: 'h2', id: 'claim', text: '청구 절차' },
    { type: 'body', html: `<ol>
      <li>사고 발생 — 보험사 SOS 24시간 핫라인 즉시 연락</li>
      <li>현지 영수증·진단서·경찰 신고서 보관</li>
      <li>귀국 후 보험사에 청구 (영문 서류 + 한국어 번역)</li>
      <li>심사 후 환급 (2~4주)</li>
    </ol>` },

    { type: 'faq', items: [
      { q: '꼭 필요한가요?', a: '강력 권장. 의료비 부담 큰 일본·미국·유럽은 필수.' },
      { q: '신용카드 보험과 차이?', a: '신용카드 부가 보험은 보장 한도·항목 제한 多. 별도 가입 권장.' },
      { q: '단체 vs 개인?', a: '여행사 단체 보험은 기본 보장만. 개인 가입이 보장 풍부.' },
      { q: '국내 의료보험 적용?', a: '해외에서는 국내 의료보험 적용 X. 현지 결제 후 한국 환급 — 일부만.' },
    ]},

    { type: 'sources', items: [
      { label: '금융감독원', url: 'https://www.fss.or.kr/', org: '금융감독원', accessedAt: '2026-04-25' },
      { label: '외교부 해외안전여행', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
