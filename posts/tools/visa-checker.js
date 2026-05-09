module.exports = {
  sections: [
    { type: 'risk', title: '비자 정책은 변동성 높음 (Level A)', html: '비자 정책은 자주 변경됩니다. 본 정보는 작성일(2026년 4월) 기준이며, 출국 전 외교부 영사민원24(0404.go.kr) 또는 해당 국가 대사관 공시를 반드시 재확인하세요.' },

    { type: 'intro', html: `한국 일반 여권으로 입국 가능한 국가별 비자 요건을 정리합니다. 무비자·도착비자·E-비자·일반비자 등 카테고리별로 분류했습니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1628586268632-51b8418a5863?auto=format&fit=crop&q=80&w=1200', alt: '한국 여권 해외여행 비자 체커 국가별 입국 요건', caption: '한국 여권 국가별 비자 요건 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Lucine Moone on Unsplash', imageSourceUrl: 'https://unsplash.com/@lcn_moone?utm_source=travel.ambitstock&utm_medium=referral' },

    { type: 'info', title: '계산기 위젯', html: '국가 입력 → 비자 요건·체류 기간·신청 절차 자동 표시. 출국 전 재확인 필수.' },

    { type: 'h2', id: 'visa-free', text: '무비자 (90일+)' },
    { type: 'body', html: `<ul>
      <li><strong>일본</strong> 90일</li>
      <li><strong>대만</strong> 90일</li>
      <li><strong>홍콩</strong> 90일</li>
      <li><strong>마카오</strong> 90일</li>
      <li><strong>싱가포르</strong> 90일 (SG Arrival Card 필수)</li>
      <li><strong>말레이시아</strong> 90일 (MDAC 필수)</li>
      <li><strong>태국</strong> 90일</li>
      <li><strong>EU 쉥겐</strong> 90일/180일 (ETIAS 시행 예정)</li>
      <li><strong>영국</strong> 6개월 (ETA 사전 신청)</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'short', text: '단기 무비자 (30~60일)' },
    { type: 'body', html: `<ul>
      <li><strong>베트남</strong> 45일</li>
      <li><strong>필리핀</strong> 30일 (연장 가능)</li>
      <li><strong>인도네시아</strong> VOA 30일 (USD 35, 연장 가능)</li>
      <li><strong>캄보디아</strong> 30일 (e-Visa USD 30)</li>
      <li><strong>라오스</strong> 30일 (도착비자)</li>
    </ul>` },

    { type: 'h2', id: 'esta', text: '사전 승인 (ESTA·ETA)' },
    { type: 'body', html: `<ul>
      <li><strong>미국</strong> ESTA 90일 (USD 21)</li>
      <li><strong>캐나다</strong> eTA 6개월 (CAD 7)</li>
      <li><strong>호주</strong> ETA 3개월 (AUD 20)</li>
      <li><strong>뉴질랜드</strong> NZeTA 90일 (NZD 23)</li>
      <li><strong>영국</strong> ETA 6개월 (GBP 10)</li>
    </ul>` },

    { type: 'h2', id: 'evisa', text: 'E-비자' },
    { type: 'body', html: `<ul>
      <li><strong>인도</strong> e-Visa 30일~5년 (USD 25~80)</li>
      <li><strong>베트남</strong> E-비자 90일 (USD 25 단수, USD 50 복수)</li>
      <li><strong>이집트</strong> e-Visa 30일</li>
      <li><strong>러시아</strong> e-Visa 16일</li>
      <li><strong>케냐·우간다·탄자니아</strong> e-Visa</li>
    </ul>` },

    { type: 'h2', id: 'regular', text: '일반 비자 필요' },
    { type: 'body', html: `<ul>
      <li><strong>중국</strong> L 비자(관광)·M 비자(비즈니스) — 환승·하이난 무비자 예외</li>
      <li><strong>러시아</strong> 일반 비자 또는 e-Visa</li>
      <li><strong>이란·사우디·이라크 등</strong> 일반 비자</li>
      <li><strong>브라질·아르헨티나</strong> e-Visa</li>
    </ul>` },

    { type: 'h2', id: 'arrival-cards', text: '입국 카드 사전 등록 (필수)' },
    { type: 'body', html: `<ul>
      <li>일본 — Visit Japan Web</li>
      <li>태국 — TDAC</li>
      <li>말레이시아 — MDAC</li>
      <li>싱가포르 — SG Arrival Card</li>
      <li>호주 — Incoming Passenger Card</li>
    </ul>` },

    { type: 'h2', id: 'tips', text: '비자 신청 팁' },
    { type: 'body', html: `<ul>
      <li>여권 잔여 6개월 이상 + 빈 페이지 2장 이상</li>
      <li>전과·해외 거주 위반 기록 — 재신청 사유</li>
      <li>이전 미국 거부 — VWP/ESTA 거부 가능 (B1/B2 비자 신청)</li>
      <li>출국 전 4~8주 여유 (비자 처리 기간)</li>
      <li>외교부 동행이 등록 권장</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '한국 여권 강도?', a: '한국 여권은 세계 2~3위(2026 기준) — 약 192개국 무비자/도착비자.' },
      { q: '무비자 횟수 제한?', a: '쉥겐 90일/180일 룰 — 6개월 중 90일만 체류. 일본·대만은 단기 반복 자제.' },
      { q: '비자 거부 시?', a: '재신청 가능. 사유 추정 후 보완. 영사 인터뷰 진행.' },
    ]},

    { type: 'sources', items: [
      { label: '외교부 영사민원24', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
