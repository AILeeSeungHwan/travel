module.exports = {
  sections: [
    { type: 'intro', html: `해외여행 후 한국 입국 시 면세 한도 초과 물품에는 관세·부가세가 부과됩니다. 자진신고하면 30% 감면, 미신고 후 적발되면 40% 가산세 + 명단 등록(향후 검사 강화)이 적용됩니다. 본 가이드는 한국 면세 한도와 자진신고 절차를 정리합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1575291930020-5dbada5097c7?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 한국 입국 면세 한도 관세 쇼핑', caption: '한국 입국 면세 한도 완전 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'AR on Unsplash', imageSourceUrl: 'https://unsplash.com/@ar__?utm_source=tripspot&utm_medium=referral' },

    { type: 'info', title: '입국 면세 한도', html: '한국 거주자는 해외여행 후 입국 시 USD 800 상당의 휴대품 면세 + 술 2병(2L 이하·USD 400 이하) + 담배 200개비 + 향수 60ml 면세.' },

    { type: 'h2', id: 'limits', text: '면세 한도 — USD 800 + 추가' },
    { type: 'body', html: `<ul>
      <li><strong>일반 휴대품</strong>: USD 800 상당까지 면세 (1인 기준)</li>
      <li><strong>술</strong>: 2병 + 2L 이하 + USD 400 이하 (만 19세 이상)</li>
      <li><strong>담배</strong>: 200개비 + 시가 50개비 + 전자담배·궐련형 200개비 (만 19세 이상)</li>
      <li><strong>향수</strong>: 60ml까지</li>
    </ul>위 한도 초과 시 <strong>전체 가액에 관세·부가세</strong>(상품마다 13~30%) 부과.` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'overcharge', text: '한도 초과 시 세금' },
    { type: 'body', html: `<ul>
      <li><strong>관세</strong>: 8~13% (품목별)</li>
      <li><strong>부가가치세</strong>: 10%</li>
      <li><strong>특별소비세</strong>: 일부 품목 (보석·시계·고가 가전)</li>
    </ul>예) USD 1,500 럭셔리 백 → USD 800 면세 + USD 700 과세 → 약 KRW 250,000 ~ 350,000 세금.` },

    { type: 'h2', id: 'voluntary', text: '자진신고 — 30% 감면' },
    { type: 'body', html: `한도 초과 휴대품을 자진신고하면 <strong>관세 30% 감면</strong> (최대 15만 원 한도). 미신고 후 적발 시 <strong>40% 가산세</strong> + 우범자 명단 등록.<br/><br/><strong>자진신고 절차</strong>:<br/><ol>
      <li>입국 시 세관 신고서 작성 또는 Visit Korea Web 사전 신고</li>
      <li>"신고 물품 있음" 라인 통과</li>
      <li>관세 신고 — 영수증 제시</li>
      <li>관세·부가세 납부</li>
    </ol>` },

    { type: 'h2', id: 'banned', text: '반입 금지·제한 품목' },
    { type: 'body', html: `<strong>반입 금지</strong>: 마약·총기·실탄·화약·외설물·국가기밀 자료·짝퉁(가짜 명품).<br/><strong>제한 (사전 허가 필요)</strong>: 야생동물·CITES 협약 동식물·문화재.<br/><strong>검역 대상</strong>: 농산물·축산물·식품 일부 — 신고 후 검역 통과 필요.<br/><strong>현금</strong>: USD 10,000 초과 신고 의무.` },

    { type: 'h2', id: 'common', text: '흔한 사례' },
    { type: 'body', html: `<ul>
      <li><strong>명품 가방·시계·보석</strong>: USD 800 초과 시 자진신고 권장. 영수증 보관.</li>
      <li><strong>술·담배 초과</strong>: 가족 1인 1세트씩 한도 — 자녀 명의 분산 X (만 19세 미만은 0).</li>
      <li><strong>건강기능식품</strong>: 6병/총 USD 100 이하 면세, 초과 시 의약품 수입 제한.</li>
      <li><strong>가전·노트북</strong>: 본인 사용 흔적 있으면 면세 인정. 새 박스 + 영수증 시 과세.</li>
      <li><strong>해외 직구·면세점 결합</strong>: 합산해 USD 800 초과 시 과세.</li>
    </ul>` },

    { type: 'h2', id: 'tax-refund', text: '해외에서 환급 받기 — Tax Refund' },
    { type: 'body', html: `여러 국가에서 외국인 관광객에게 부가세 환급(Tax-free):<br/><ul>
      <li><strong>일본</strong>: 5,000엔 이상 구매 — 면세점에서 즉시 환급</li>
      <li><strong>유럽 EU</strong>: EUR 100~175 이상 구매 — 출국 시 공항 세관 도장 → 환급 카운터</li>
      <li><strong>태국</strong>: 2,000바트 이상 구매 — 공항 환급</li>
      <li><strong>미국</strong>: 부가세 환급 일반적 X (텍사스·루이지애나 일부 주만)</li>
    </ul>환급 받은 금액은 한국 입국 시 면세 한도 계산에 포함되지 않음.` },

    { type: 'faq', items: [
      { q: '가족 4인 입국 — 한도 합산?', a: '아니요, 1인당 USD 800 별도 적용. 미성년자도 동일(단 술·담배 X).' },
      { q: '면세점 구매도 한도?', a: '예. 시내 면세점 + 해외 구매 + 기내 면세 모두 합산 USD 800.' },
      { q: '자진신고 안 하면?', a: '40% 가산세 + 우범자 명단 등록 (향후 입국 시 가방 검사 강화).' },
      { q: '명품 영수증 분실?', a: '관세청 직원이 시장가 기준 평가. 보통 한도 초과 분 대상.' },
      { q: '여행 중 사용한 가방?', a: '본인 사용 흔적·동행자 사진 등으로 입증 — 면세 인정.' },
    ]},

    { type: 'sources', items: [
      { label: '관세청 여행자 면세 한도', url: 'https://www.customs.go.kr/', org: '관세청', accessedAt: '2026-04-25' },
      { label: 'Visit Korea Web (사전 신고)', url: 'https://www.customs.go.kr/kcs/main.do', org: '관세청', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
