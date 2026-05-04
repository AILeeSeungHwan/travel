module.exports = {
  sections: [
    { type: 'risk', title: 'ESTA 사전승인 필수 (Level A)', html: '한국 일반 여권으로 미국 입국 시 ESTA 사전승인이 필수입니다. 미신청 시 항공기 탑승 거절 또는 입국 거부됩니다. 출국 최소 72시간 전 신청을 권장합니다.' },

    { type: 'intro', html: `한국 일반 여권 소지자는 <strong>VWP(비자 면제 프로그램)</strong>에 따라 <strong>ESTA 사전승인</strong>으로 90일 단기 무비자 입국이 가능합니다. ESTA는 정식 비자가 아닌 사전 입국 허가이며, 미국 국토안보부 시스템에서 신청합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200', alt: '미국 여행 ESTA 비자 면제 프로그램', caption: '미국 ESTA 사전승인 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Jonathan Roger on Unsplash', imageSourceUrl: 'https://unsplash.com/@jonathanroger?utm_source=tripspot&utm_medium=referral' },

    { type: 'h2', id: 'summary', text: '핵심 요약' },
    { type: 'body', html: `<ul>
      <li>한국 일반 여권: <strong>ESTA + 90일 무비자 입국</strong></li>
      <li>여권 유효기간: 입국 시점 잔여 6개월 이상 권장</li>
      <li>유효: 2년 또는 여권 만료일 중 빠른 날</li>
      <li>비용: USD 21 (2024년 인상)</li>
      <li>신청 시점: 출국 최소 72시간 전 권장</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '미국 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'apply', text: 'ESTA 신청 절차' },
    { type: 'body', html: `<strong>esta.cbp.dhs.gov</strong> 공식 사이트 접속 → 다음 진행:<br/><ol>
      <li>"새 신청서 작성" 선택</li>
      <li>여권 정보 입력 (만료일·발급일·여권번호 정확히)</li>
      <li>인적사항·연락처</li>
      <li>고용·미국 내 주소(첫 숙소)</li>
      <li>적격성 질문 (전과·전염병·테러 관련 등 9개)</li>
      <li>USD 21 카드 결제</li>
      <li>승인 결과 통보 — 즉시·72시간 내</li>
    </ol><strong>비공식 사이트 주의</strong>: 검색 결과 상단의 "ESTA 대행" 사이트는 USD 80~150 부풀려 청구. <strong>공식 esta.cbp.dhs.gov 만 사용</strong>.` },

    { type: 'h2', id: 'eligibility', text: '적격성 — 거부 사유' },
    { type: 'body', html: `<ul>
      <li>전과·체포 기록 (가벼운 음주운전도 영향)</li>
      <li>이전 미국 거부 또는 강제 추방 기록</li>
      <li>VWP 적용 이전 미국 비자 거부 기록</li>
      <li>특정 국가 방문 기록 (이란·이라크·시리아·수단·리비아·소말리아·예멘 등 — 2011년 이후)</li>
      <li>이중 국적 (위 7개국 중 하나)</li>
    </ul>해당되면 ESTA 거부 → B1/B2 비자 별도 신청 필요. 영사 인터뷰 + 6주~6개월 처리.` },

    { type: 'h2', id: 'arrival', text: '미국 입국 절차' },
    { type: 'body', html: `<ol>
      <li>비행기 탑승 전 ESTA 승인 확인 (탑승 거절 사유)</li>
      <li>입국 심사 — 여권 + ESTA 시스템 자동 조회</li>
      <li>지문·얼굴 사진 등록 (Global Entry 가입자는 키오스크)</li>
      <li>심사관 질문 — 체류 목적·기간·숙소·자금</li>
      <li>여권 입국 도장 (I-94 — 90일 명시)</li>
      <li>수하물 수령·세관</li>
    </ol>` },

    { type: 'h2', id: 'b1b2', text: '비자(B1/B2) — ESTA 불가 시' },
    { type: 'body', html: `ESTA 거부·90일 초과 체류·취업·유학 등은 정식 비자 필요:<br/><ul>
      <li><strong>B1</strong>: 비즈니스 (회의·계약), <strong>B2</strong>: 관광·의료</li>
      <li><strong>F1</strong>: 유학</li>
      <li><strong>H1B</strong>: 전문직 취업</li>
      <li><strong>L1</strong>: 주재원</li>
      <li><strong>O1</strong>: 특기자</li>
    </ul>` },

    { type: 'h2', id: 'global-entry', text: 'Global Entry — 입국 패스트트랙 (선택)' },
    { type: 'body', html: '한국·미국 협정으로 한국인 가입 가능. 5년 USD 100. 입국 키오스크 + 일부 공항 우선 보안검색(TSA PreCheck). 빈번한 미국 출장자 추천.' },

    { type: 'h2', id: 'customs', text: '세관 — 면세·금기' },
    { type: 'body', html: `<ul>
      <li>술: 1L, 담배: 200개비, 면세 USD 800 상당</li>
      <li>현금: USD 10,000 초과 신고</li>
      <li>육류·과일·채소·식물·종자: <strong>반입 금지</strong> (검역)</li>
      <li>마약·총기·외설물·짝퉁 금지</li>
      <li>한국 라면(컵라면) — 분말 스프 OK, 고기 함유 X</li>
    </ul>` },

    { type: 'faq', items: [
      { q: 'ESTA 미신청 시?', a: '비행기 탑승 거절 또는 미국 입국 거부. 신청 후 72시간 내 결과 — 출국 최소 3일 전 신청.' },
      { q: 'ESTA 거부 시?', a: 'B1/B2 비자 신청 — 영사 인터뷰 + 6주~6개월. 거부 사유 명시 X.' },
      { q: 'I-94 90일 초과?', a: '오버스테이 — 향후 ESTA·비자 거부 사유. 절대 X.' },
      { q: '아이 ESTA?', a: '신생아도 별도 ESTA 필수. 부모와 별도 신청.' },
      { q: '경유만 해도 ESTA?', a: '미국 환승도 ESTA 필요(국제선→국제선 환승 포함, 일부 예외).' },
      { q: '하와이·괌도 ESTA?', a: '하와이 — 미국 본토와 동일 ESTA. 괌 — Guam-CNMI VWP 별도 (한국인 무비자 45일).' },
    ]},

    { type: 'sources', items: [
      { label: 'ESTA 공식 (CBP)', url: 'https://esta.cbp.dhs.gov/', org: 'U.S. Customs and Border Protection', accessedAt: '2026-04-25' },
      { label: '주미 대한민국 대사관', url: 'https://overseas.mofa.go.kr/us-ko/index.do', org: '대사관', accessedAt: '2026-04-25' },
      { label: 'Global Entry', url: 'https://www.cbp.gov/travel/trusted-traveler-programs/global-entry', org: 'CBP', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
