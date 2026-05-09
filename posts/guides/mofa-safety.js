module.exports = {
  sections: [
    { type: 'risk', title: '여행경보 = 출국 여부 결정의 1차 기준 (Level A)', html: '외교부 여행경보 4단계는 해외여행 결정에서 가장 먼저 확인해야 할 항목입니다. 여행경보 단계에 따라 여행자보험 적용·외교부 영사조력·강제 송환 등 처우가 달라집니다.' },

    { type: 'intro', html: `대한민국 외교부는 해외 안전여행 정보를 위해 <strong>4단계 여행경보 제도</strong>를 운영합니다(<strong>0404.go.kr</strong>). 한국인이 가는 모든 해외 국가·도시는 4단계 중 하나로 분류되며, 출국 전 본인 여행지의 단계를 반드시 확인하고 적합한 대비책을 세워야 합니다.<br/><br/>본 가이드는 4단계 여행경보의 의미·대응·영사조력 신청 방법을 정리합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1611153532534-d72e8baca034?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 외교부 여행경보 안전여행', caption: '외교부 여행경보 안전여행 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Pond Juprasong on Unsplash', imageSourceUrl: 'https://unsplash.com/@pondjup?utm_source=travel.ambitstock&utm_medium=referral' },

    { type: 'h2', id: 'levels', text: '여행경보 4단계' },
    { type: 'body', html: `<ul>
      <li><strong>1단계 여행유의(남색)</strong>: 신변안전 위험 요인 존재. <em>일반 여행 가능, 신변안전 유의</em>.</li>
      <li><strong>2단계 여행자제(황색)</strong>: 신변안전 위험 증가. <em>여행 자제, 불요불급한 여행 자제</em>.</li>
      <li><strong>3단계 출국권고(적색)</strong>: 신변안전 심각 위험. <em>출국 권고, 즉시 출국 또는 여행 취소</em>.</li>
      <li><strong>4단계 여행금지(흑색)</strong>: <em>방문 금지</em>. 위반 시 여권법 처벌 (1년 이하 징역 또는 1천만 원 이하 벌금).</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'levels-meaning', text: '단계별 의미 — 보험·영사조력' },
    { type: 'body', html: `<ul>
      <li><strong>1단계</strong>: 여행자보험 정상 적용. 일반 영사조력.</li>
      <li><strong>2단계</strong>: 여행자보험 일부 면책 가능 (보험사별 약관 확인). 영사조력 강화.</li>
      <li><strong>3단계</strong>: 여행자보험 대부분 미적용. 외교부 출국 강력 권고. 한국 항공기 운휴 가능.</li>
      <li><strong>4단계</strong>: <strong>여행 자체가 불법</strong>. 여권법 위반. 영사 보호 제한.</li>
    </ul>` },

    { type: 'h2', id: 'check', text: '여행경보 확인 방법' },
    { type: 'body', html: `<strong>1. 외교부 해외안전여행 사이트</strong> — 0404.go.kr → "국가/지역 여행경보" 검색<br/><strong>2. 외교부 모바일 앱</strong> — "해외안전여행" 앱 (iOS/Android)<br/><strong>3. 영사콜센터</strong> — 02-3210-0404 (24시간), 외국에서 +82-2-3210-0404` },

    { type: 'h2', id: 'register', text: '동행이 신청 — 외교부 여행 등록' },
    { type: 'body', html: `<strong>동행이</strong>(0404.go.kr/dynamic/travel_register.mofa) 에 출국 전 여행 정보 등록:<br/><ul>
      <li>여행지·기간·동반자·연락처</li>
      <li>긴급 사태 시 외교부에서 SMS·전화로 안전 확인</li>
      <li>대규모 자연재해·테러 시 영사 우선 조력</li>
    </ul>특히 3단계 권고 직전 국가·중장기 체류·가족 여행은 등록 권장.` },

    { type: 'h2', id: 'consular', text: '영사조력 — 위급 상황 대응' },
    { type: 'body', html: `해외에서 다음 상황 시 영사 조력 가능:<br/><ul>
      <li>여권 분실·도난</li>
      <li>체포·구금</li>
      <li>중대 범죄 피해</li>
      <li>응급 의료·사망</li>
      <li>대규모 재해·테러</li>
    </ul><strong>영사콜센터 24시간</strong>: 외국→ +82-2-3210-0404. 또는 현지 한국 대사관·총영사관 직접 연락.` },

    { type: 'h2', id: 'level3-4', text: '3·4단계 국가 (2026 기준)' },
    { type: 'body', html: `4단계 여행금지: 이라크·시리아·아프가니스탄·예멘·리비아·우크라이나(전쟁 지역) 등 일부 분쟁 지역.<br/>3단계 출국권고: 일부 국가의 특정 지역.<br/>2단계: 일부 동남아·아프리카·중남미 일부 지역.<br/>1단계: 한국인 인기 여행지 일부(베트남·태국·필리핀 일부 지역).<br/><strong>최신 단계는 외교부 사이트에서 출국 전 재확인</strong>.` },

    { type: 'h2', id: 'situations', text: '비상 상황 대응 매뉴얼' },
    { type: 'body', html: `<ul>
      <li><strong>여권 분실</strong>: 현지 경찰 신고서 → 한국 대사관·총영사관에서 임시여권 발급</li>
      <li><strong>체포·구금</strong>: 영사면담권 요구 → 영사콜센터·대사관 연락</li>
      <li><strong>응급 의료</strong>: 여행자보험 SOS → 영사콜센터</li>
      <li><strong>대규모 재해</strong>: 동행이 등록 시 외교부 자동 안전 확인</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '여행경보 변경 빈도?', a: '정기 분기 + 사건 발생 시 수시. 출국 전 재확인 필수.' },
      { q: '4단계 위반 시?', a: '여권법 위반 — 1년 이하 징역 또는 1천만 원 이하 벌금. 출국·체류·재입국 모두 위법.' },
      { q: '여행자보험 면책?', a: '3단계 이상은 대부분 보험사가 면책 처리. 약관 확인 필수.' },
      { q: '동행이 등록 의무?', a: '의무 X, 강력 권장. 가족·중장기 여행은 필수.' },
      { q: '영사콜센터 24시간?', a: '24시간 365일. 외국 +82-2-3210-0404, 국내 02-3210-0404.' },
    ]},

    { type: 'sources', items: [
      { label: '외교부 해외안전여행', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
      { label: '동행이 — 여행 등록', url: 'https://www.0404.go.kr/dynamic/travel_register.mofa', org: '외교부', accessedAt: '2026-04-25' },
      { label: '영사콜센터', url: 'https://www.0404.go.kr/dev/main_call.mofa', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
