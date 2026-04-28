module.exports = {
  sections: [
    { type: 'risk', title: '중국 비자 — 정책 변동 가장 잦은 국가 (Level A)', html: '중국 비자 정책은 동아시아에서 변동 빈도가 가장 높은 국가입니다. 본 가이드는 작성일 기준 정보이며 출국 전 반드시 외교부 영사민원24(0404.go.kr)·주중 한국대사관·주한 중국대사관 공시를 재확인하세요.' },

    { type: 'intro', html: `한국 일반 여권 소지자가 중국에 입국할 때는 일반적으로 <strong>비자 신청이 필요</strong>합니다. 다만 다음 예외 정책이 운영 중입니다(상시 변경): 단체 무비자, 일부 도시 환승 무비자(72/144시간), 하이난성 무비자(30일).` },

    { type: 'h2', id: 'summary', text: '핵심 요약' },
    { type: 'body', html: `<ul>
      <li>한국 일반 여권: <strong>일반 비자 필요</strong> (단기 관광·비즈니스)</li>
      <li>예외: 단체 무비자, 환승 무비자(72/144시간), 하이난성 무비자(30일)</li>
      <li>여권 유효기간: 잔여 6개월 이상</li>
      <li>처리 기간: 4~10영업일 (일반·급행)</li>
    </ul>` },

    { type: 'h2', id: 'types', text: '비자 종류' },
    { type: 'body', html: `<ul>
      <li><strong>L 비자(관광)</strong>: 단수 30일·복수 60·90일·1년 — USD 50~120</li>
      <li><strong>M 비자(비즈니스)</strong>: 출장·미팅, 중국 회사 초청장</li>
      <li><strong>F 비자(방문)</strong>: 연구·교류·문화 행사</li>
      <li><strong>X 비자(유학)</strong>: 6개월~수년</li>
      <li><strong>Z 비자(취업)</strong>: 노동허가증 + 중국 기업 초청</li>
    </ul>` },

    { type: 'h2', id: 'documents', text: '필요 서류 (L 관광 비자)' },
    { type: 'body', html: `<ul>
      <li>비자 신청서 (visaforchina.org 작성)</li>
      <li>여권 (잔여 6개월 이상, 빈 페이지 2장)</li>
      <li>여권 사진 (33×48mm, 흰 배경)</li>
      <li>왕복 항공권 예약 증빙</li>
      <li>숙소 예약 증빙</li>
      <li>여행 일정 (대략)</li>
      <li>재직 증명서 (또는 학생증·사업자등록증)</li>
      <li>잔고 증명서 (3개월 이상)</li>
      <li>(필요 시) 초청장</li>
    </ul>` },

    { type: 'h2', id: 'process', text: '신청 절차' },
    { type: 'body', html: `<ol>
      <li>visaforchina.org → 온라인 신청서 작성·인쇄</li>
      <li>중국비자센터(서울·부산) 방문 → 서류 제출 + 지문 등록</li>
      <li>수수료 납부 (USD 50~ + 서비스비)</li>
      <li>4~10영업일 후 수령</li>
    </ol>처리 기간 짧으니 출국 <strong>최소 3주 전</strong> 신청 권장.` },

    { type: 'h2', id: 'transit', text: '환승 무비자 (72/144시간)' },
    { type: 'body', html: `다음 조건 모두 충족 시 환승 무비자 가능 (적용 도시 한정):<br/><ol>
      <li>한국→중국→제3국 (직행 환승)</li>
      <li>72시간 또는 144시간 이내 출국 항공권 보유</li>
      <li>지정 도시 내 체류</li>
      <li>여권 잔여 6개월 이상</li>
    </ol><strong>144시간 무비자 도시</strong>: 베이징·상하이·광저우·청두·시안·항저우·난징·우한 등 (확장 중). 적용 조건은 출국 전 재확인.` },

    { type: 'h2', id: 'hainan', text: '하이난성 무비자 (30일)' },
    { type: 'body', html: '관광 목적·하이난성 한정 30일 무비자 입국 가능. 항공·숙소 사전 예약 필수. 다른 중국 본토 이동은 별도 비자.' },

    { type: 'h2', id: 'rejection', text: '비자 거절·입국 거부' },
    { type: 'body', html: `<ul>
      <li>이전 중국 체류 위반</li>
      <li>여권 페이지·유효기간 부족</li>
      <li>잔고·재직 증빙 부족</li>
      <li>입국 목적 의심</li>
      <li>특정 국적·전과 기록</li>
    </ul>거절 시 비자료 환불 X. 사유 명시 안 됨.` },

    { type: 'h2', id: 'practical', text: '입국 후 실무 — VPN·결제' },
    { type: 'body', html: `<ul>
      <li><strong>VPN 사전 설치</strong>: 구글·카톡·인스타·페북 등 차단 — ExpressVPN·NordVPN 출국 전 설치</li>
      <li><strong>결제</strong>: 알리페이·위챗페이 보편, 외국인 카드 등록 가능. 신용카드 일부만</li>
      <li><strong>현금</strong>: 위안화 1,000~2,000 보유 권장</li>
      <li><strong>번역 앱</strong>: 파파고·구글 번역 사전 다운로드</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '비자 신청 어디서?', a: '서울 중국비자신청서비스센터(영등포)·부산 중국비자센터. 온라인 예약 후 방문.' },
      { q: '환승 무비자 적용 가능?', a: '한국→중국 환승→제3국 항공권 보유 시 일부 도시 가능. 출국 전 적용 도시·조건 재확인.' },
      { q: '복수 비자 vs 단수?', a: '여러 번 입국 예정이면 복수, 1회면 단수. 비용 차이 USD 30~80.' },
      { q: '비자 거절 시 재신청?', a: '재신청 가능, 추가 증빙 필요. 거절 사유 추정 후 보완.' },
      { q: 'COVID 관련?', a: '2026년 4월 대부분 폐지. 정기 변동 — 확인.' },
    ]},

    { type: 'sources', items: [
      { label: '주중 대한민국 대사관', url: 'https://overseas.mofa.go.kr/cn-ko/index.do', org: '대사관', accessedAt: '2026-04-25' },
      { label: '주한 중국대사관', url: 'http://kr.china-embassy.gov.cn/', org: '중국대사관', accessedAt: '2026-04-25' },
      { label: '중국비자신청센터 (서울)', url: 'https://www.visaforchina.org/SEL2_KR/', org: 'CVASC', accessedAt: '2026-04-25' },
      { label: '외교부 영사민원24', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
