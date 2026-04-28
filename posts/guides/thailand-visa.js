module.exports = {
  sections: [
    { type: 'risk', title: '출국 전 재확인 필수 (Level A)', html: '태국 비자 정책은 자주 변경됩니다. 출국 전 외교부 영사민원24와 주태국 한국대사관 공시를 반드시 재확인하세요.' },

    { type: 'intro', html: `한국 일반 여권 소지자는 태국 단기 체류 시 <strong>90일 무비자</strong>(2024년 7월부터 적용)로 입국 가능합니다. 디지털 노마드·한 달 살기 목적은 <strong>DTV(Destination Thailand Visa)</strong> 도입으로 합법적 장기 체류 옵션이 생겼습니다.` },

    { type: 'h2', id: 'summary', text: '핵심 요약' },
    { type: 'body', html: `<ul>
      <li>한국 일반 여권: <strong>90일 무비자</strong> 단기 체류 (2026 기준)</li>
      <li>여권 유효기간: 잔여 6개월 이상 필수</li>
      <li>입국 시 항공권·숙소·체류비 증빙 요청 가능</li>
      <li>장기 체류·디지털 노마드: <strong>DTV 비자</strong> (5년, USD 250)</li>
    </ul>` },

    { type: 'h2', id: 'documents', text: '필요 서류 (무비자 입국)' },
    { type: 'body', html: `<ul>
      <li>여권 (잔여 6개월 이상)</li>
      <li>왕복 항공권 또는 출국 항공권 증빙</li>
      <li>숙소 예약 증빙</li>
      <li>체류비 증빙 (USD 700 상당) — 입국심사 시 요청 가능</li>
    </ul>` },

    { type: 'h2', id: 'tdac', text: 'TDAC 사전 등록 (2025~)' },
    { type: 'body', html: '2025년부터 입국 시 <strong>TDAC(Thailand Digital Arrival Card)</strong> 사전 등록이 의무화. <strong>tdac.immigration.go.th</strong> 에서 입국 3일 전부터 작성 가능. 무료. 없으면 입국 거부 또는 지연 가능.' },

    { type: 'h2', id: 'dtv', text: 'DTV 비자 (디지털 노마드·한 달 살기)' },
    { type: 'body', html: `<ul>
      <li><strong>대상</strong>: 디지털 노마드, 무에타이/태국 요리 학습자, 의료 관광객</li>
      <li><strong>유효기간</strong>: 5년</li>
      <li><strong>1회 입국 체류</strong>: 최대 180일 (1회 연장 180일 추가)</li>
      <li><strong>비용</strong>: USD 250</li>
      <li><strong>증빙</strong>: 외국 회사 고용 증명·잔고 USD 14,000 이상</li>
      <li><strong>신청</strong>: 태국 대사관 또는 온라인</li>
    </ul>` },

    { type: 'h2', id: 'longterm', text: '기타 장기 비자' },
    { type: 'body', html: `<ul>
      <li><strong>학생 비자(ED)</strong>: 태국 학교 등록 — 9개월~3년</li>
      <li><strong>은퇴 비자(O-A)</strong>: 50세+, 잔고 80만 바트</li>
      <li><strong>엘리트 비자</strong>: 60만~200만 바트, 5~20년</li>
      <li><strong>스마트 비자</strong>: IT 전문가·투자자</li>
    </ul>` },

    { type: 'h2', id: 'process', text: '입국 절차' },
    { type: 'body', html: `<ol>
      <li>TDAC QR 준비 (출국 전 등록)</li>
      <li>입국 심사 — 여권 + TDAC QR</li>
      <li>지문·얼굴 사진 등록</li>
      <li>여권 입국 도장 (90일)</li>
      <li>수하물 수령·세관</li>
    </ol>` },

    { type: 'h2', id: 'extension', text: '체류 연장' },
    { type: 'body', html: '90일 초과 시 태국 이민국에서 30일 추가 연장 가능 (1,900바트). 비자런(국경 출국 후 재입국)은 의심 사유 — 자제 권장.' },

    { type: 'h2', id: 'customs', text: '세관 — 면세 한도' },
    { type: 'body', html: `<ul>
      <li>술: 1L, 담배: 200개비, 향수: 적정량</li>
      <li>현금: USD 20,000 초과 신고</li>
      <li>금기: 마약·전자담배(태국 법률 규제), 보드담배</li>
    </ul>전자담배·VAPE는 태국에서 <strong>완전 금지</strong> — 소지 시 벌금·구속 가능. 반입 금지.` },

    { type: 'faq', items: [
      { q: 'TDAC 사전 등록 필수?', a: '2025년부터 의무. 출국 전 tdac.immigration.go.th 에서 등록.' },
      { q: '90일 vs 60일?', a: '2024년 7월부터 90일로 확장. 기존 60일은 더 이상 적용 X.' },
      { q: '체류 연장?', a: '이민국 신청, 1,900바트, 30일 추가. 1회만 가능.' },
      { q: '전자담배 가져가도?', a: '<strong>절대 금지</strong>. 소지·사용 시 벌금 또는 구속.' },
      { q: 'DTV 신청 어디서?', a: '주한 태국 대사관 또는 일부 온라인. 잔고 증빙 USD 14,000.' },
    ]},

    { type: 'sources', items: [
      { label: '주태국 대한민국 대사관', url: 'https://overseas.mofa.go.kr/th-ko/index.do', org: '대사관', accessedAt: '2026-04-25' },
      { label: '태국 이민국 TDAC', url: 'https://tdac.immigration.go.th/', org: '태국 이민국', accessedAt: '2026-04-25' },
      { label: '외교부 영사민원24', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
