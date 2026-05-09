module.exports = {
  sections: [
    { type: 'intro', html: `해외여행 시 비상약은 필수입니다. 동남아·열대 지역에서는 위장약·지사제·해열제·모기퇴치제·반창고가 핵심. 본 가이드는 권역별 비상약 체크리스트를 정리합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1611153532534-d72e8baca034?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 비상약 의약품 체크리스트 여행 필수품', caption: '해외여행 비상약 체크리스트 완전 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Pond Juprasong on Unsplash', imageSourceUrl: 'https://unsplash.com/@pondjup?utm_source=travel.ambitstock&utm_medium=referral' },

    { type: 'warning', title: '처방약은 영문 처방전 동행', html: '고혈압·당뇨·심장 질환·정신과 약 등 처방약은 영문 처방전과 함께 동행해야 입국 시 의심 받지 않습니다. 일부 국가(일본·싱가포르)는 마약류 진통제·수면제 사전 신고 의무.' },

    { type: 'h2', id: 'basic', text: '필수 비상약 (모든 여행)' },
    { type: 'body', html: `<ul>
      <li><strong>해열·진통제</strong>: 타이레놀·이지엔6 (성인·아이 별도)</li>
      <li><strong>지사제</strong>: 스멕타·로페라마이드</li>
      <li><strong>위장약</strong>: 베아제·훼스탈</li>
      <li><strong>알러지·콧물</strong>: 지르텍·세티리진</li>
      <li><strong>반창고·소독약</strong>: 후시딘·메디폼</li>
      <li><strong>피부 가려움</strong>: 항히스타민 연고</li>
      <li><strong>멀미약</strong>: 보나링 (보트·멀미)</li>
      <li><strong>마스크</strong>: 황사·미세먼지·기내</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'tropical', text: '동남아·열대 추가' },
    { type: 'body', html: `<ul>
      <li>모기퇴치제 (DEET 30%+): 화장품·롤온</li>
      <li>모기 물린 후 — 항히스타민 연고</li>
      <li>일사병 — 게토레이·이온음료 분말</li>
      <li>피부 자극 — 알로에 젤</li>
      <li>물집 — 전용 패치</li>
    </ul>` },

    { type: 'h2', id: 'cold', text: '한랭·고원 추가' },
    { type: 'body', html: `<ul>
      <li>핫팩 (카이로) — 1박스</li>
      <li>립밤·핸드크림 — 건조</li>
      <li>고산병 약 (다이아목스) — 페루·티베트·네팔</li>
    </ul>` },

    { type: 'h2', id: 'kids', text: '아이 동반 추가' },
    { type: 'body', html: `<ul>
      <li>아이 해열제 시럽 (영문 표기)</li>
      <li>구토 멈춤 약</li>
      <li>아이 모기 패치</li>
      <li>유아 화상 연고</li>
    </ul>` },

    { type: 'h2', id: 'caution', text: '입국 시 주의' },
    { type: 'body', html: `<ul>
      <li>일본 — 마약류 진통제·수면제 사전 신고 (Yakkan Shoumei)</li>
      <li>싱가포르 — 마약류 처방약 사전 신고</li>
      <li>중국 — 처방전·영문 처방·세관 신고</li>
      <li>UAE·이슬람 국가 — CBD·일부 진통제 금지</li>
    </ul>출국 전 해당 국가 대사관·외교부 확인.` },

    { type: 'productSlot', productKey: 'travel-medical-kit' },

    { type: 'faq', items: [
      { q: '한국 약 vs 현지 약?', a: '익숙한 한국 약 권장. 현지 약은 성분·용법 모를 수 있음.' },
      { q: '영문 처방전 발급?', a: '병원에서 요청 — 무료. 마약류는 의무.' },
    ]},

    { type: 'disclaimer' },
  ]
}
