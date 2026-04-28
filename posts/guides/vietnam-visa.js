module.exports = {
  sections: [
    { type: 'risk', title: '출국 전 재확인 필수 (Level A)', html: '베트남 비자 정책은 종종 변경됩니다. 출국 전 외교부 영사민원24(0404.go.kr)와 주베트남 한국대사관 공시를 반드시 재확인하세요.' },

    { type: 'intro', html: `한국인 일반 여권 소지자는 베트남 단기 체류 시 <strong>45일 무비자</strong>(2025년 8월부터 적용)로 입국 가능합니다. 45일 초과 또는 다회 입국·취업 등 목적은 E-비자(전자비자) 또는 일반 비자가 필요합니다.` },

    { type: 'h2', id: 'summary', text: '핵심 요약' },
    { type: 'body', html: `<ul>
      <li>한국 일반 여권: <strong>45일 무비자</strong> 단기 체류 (2026 기준)</li>
      <li>여권 유효기간: 입국 시점 잔여 6개월 이상 필수</li>
      <li>45일 초과: <strong>E-비자</strong> 또는 일반 비자</li>
      <li>다회 입국 필요 시: 복수 E-비자(USD 50)</li>
    </ul>` },

    { type: 'h2', id: 'documents', text: '필요 서류 (무비자 입국)' },
    { type: 'body', html: `<ul>
      <li>여권 (잔여 6개월 이상, 빈 페이지 2장 이상)</li>
      <li>왕복 항공권 또는 출국 항공권 증빙</li>
      <li>숙소 예약 증빙 (입국심사 시 요청 가능)</li>
      <li>잔고 증빙 (USD 1,000 상당, 입국심사 시 요청 가능)</li>
    </ul>` },

    { type: 'h2', id: 'evisa', text: 'E-비자 신청' },
    { type: 'body', html: `<strong>evisa.gov.vn</strong> (베트남 정부 공식) 접속 → 다음 정보 입력:<br/><ol>
      <li>여권 사진(2x2 인치, 흰 배경) 업로드</li>
      <li>여권 정보면 사진 업로드</li>
      <li>여행자 정보·체류 기간(최대 90일)·입국 공항·체류 주소</li>
      <li>수수료 결제 (단수 USD 25, 복수 USD 50)</li>
    </ol>3~5 영업일 내 결과 — PDF 출력 + 출입국 시 제시. <strong>비공식 사이트 주의</strong> — evisa.gov.vn 만 공식.` },

    { type: 'h2', id: 'voa', text: '도착비자 (VOA) — 한국인 제한적' },
    { type: 'body', html: '한국인은 일반적으로 도착비자 적용 X — E-비자 사전 신청 권장. 단 E-비자 시스템 장애·승인 지연 등 예외 상황 시 도착비자 가능 — 사전 비자 초청장(승인서, USD 25) 필요.' },

    { type: 'h2', id: 'longterm', text: '장기 체류·일부 비자' },
    { type: 'body', html: `<ul>
      <li><strong>관광 비자(DL)</strong>: 1·3개월 단수 또는 복수</li>
      <li><strong>비즈니스 비자(DN)</strong>: 출장·미팅, 베트남 회사 초청장</li>
      <li><strong>취업 비자(LD)</strong>: 베트남 노동허가증 + 베트남 기업 초청장</li>
      <li><strong>가족체류</strong>: 베트남 거주 배우자·가족 초청</li>
    </ul>` },

    { type: 'h2', id: 'process', text: '입국 절차' },
    { type: 'body', html: `<ol>
      <li>입국 신고서 작성 (기내 배포 또는 도착 후)</li>
      <li>입국 심사 — 여권 + 입국 신고서 + (E-비자라면 PDF) 제시</li>
      <li>여권 입국 도장 받음</li>
      <li>수하물 수령</li>
      <li>세관 — 면세 범위 초과 시 신고</li>
    </ol>` },

    { type: 'h2', id: 'rejection', text: '입국 거부 사유' },
    { type: 'body', html: `<ul>
      <li>여권 잔여 유효기간 미달</li>
      <li>이전 베트남 체류 위반 (오버스테이 등)</li>
      <li>왕복 항공권·숙소·잔고 증빙 부족</li>
      <li>입국 목적 의심</li>
      <li>금기 물품 소지</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '45일 초과 체류는?', a: 'E-비자(최대 90일) 또는 출국 후 재입국. 단기간 반복 입국은 의심 사유.' },
      { q: 'E-비자 신청 시점?', a: '최소 출국 2주 전 권장. 영업일 3~5일 처리.' },
      { q: '여권 빈 페이지?', a: '2장 이상 필수. 빈 페이지 부족 시 입국 거부 가능.' },
      { q: '아이도 별도 비자?', a: '아이도 별도 여권 필요, 부모 무비자 적용 동일.' },
      { q: 'COVID 관련 절차?', a: '2026년 4월 기준 폐지. 정기 정책 변동 — 출국 전 확인.' },
      { q: '입국 시 영어?', a: '주요 공항(노이바이·탄선녓·다낭) 영어 가능. 한국어 일부.' },
    ]},

    { type: 'sources', items: [
      { label: '베트남 E-비자 공식', url: 'https://evisa.gov.vn/', org: '베트남 정부', accessedAt: '2026-04-25' },
      { label: '주베트남 대한민국 대사관', url: 'https://overseas.mofa.go.kr/vn-ko/index.do', org: '대사관', accessedAt: '2026-04-25' },
      { label: '외교부 영사민원24', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
