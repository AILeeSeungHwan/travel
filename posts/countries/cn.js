module.exports = {
  sections: [
    { type: 'intro', html: `중국은 비자 정책의 변동 빈도가 가장 높은 동아시아 여행지입니다. 출국 전 외교부와 주중 한국대사관 공시를 반드시 재확인하세요. 베이징(자금성·만리장성)·상하이(외탄·디즈니)·시안(병마용)·계림·구이린(자연 절경)·청두(판다)·홍콩 인근 광저우·심천 등 도시별 매력이 분명합니다.` },

    { type: 'risk', title: '중국 비자·안전 주의 (Level A)', html: '한국 일반 여권은 일반적으로 <strong>비자가 필요</strong>합니다(개인·관광). 다만 단체관광 무비자, 일부 도시 환승 무비자(72/144시간), 하이난성 무비자(30일) 등 정책이 종종 변경됩니다. 출국 전 주중 한국대사관(overseas.mofa.go.kr/cn-ko) 공지와 외교부 영사민원24(0404.go.kr)에서 반드시 재확인하세요. 일부 국경 지역은 여행자제·철수권고 단계.' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: `<ul>
      <li>비자: 일반 비자 필요, 정책 변동 多 — 출국 전 재확인</li>
      <li>통화: 위안화(CNY) — 1CNY ≈ 190~200원</li>
      <li>시차: CST(UTC+8) — 한국보다 1시간 늦음</li>
      <li>비행: 인천→베이징 2시간 30분, 상하이 2시간</li>
      <li>베스트: 4~5월·9~10월 (춘절·국경절 인파 피하기)</li>
      <li>VPN/외국 앱: 구글·카카오·페북·인스타그램 차단 — VPN 사전 준비</li>
    </ul>` },

    { type: 'h2', id: 'attractions', text: '핵심 도시·명소' },
    { type: 'body', html: `<ul>
      <li><strong>베이징</strong>: 자금성·만리장성·천안문·이화원</li>
      <li><strong>상하이</strong>: 외탄·예원·디즈니랜드·푸동</li>
      <li><strong>시안</strong>: 병마용·고대성벽·실크로드 출발점</li>
      <li><strong>계림·구이린</strong>: 카르스트 절경, 양수오 자전거</li>
      <li><strong>청두</strong>: 자이언트판다 보호기지·삼국지 유적</li>
      <li><strong>장가계</strong>: 아바타 영감, 하늘다리</li>
    </ul>` },

    { type: 'h2', id: 'practical', text: '실무 팁' },
    { type: 'body', html: `<ul>
      <li><strong>VPN</strong>: ExpressVPN·NordVPN 등 출국 전 설치. 한국 카톡·구글 사용에 필수.</li>
      <li><strong>결제</strong>: 알리페이·위챗페이 보편, 외국인 카드 등록 가능. 신용카드 일부 비호환.</li>
      <li><strong>언어</strong>: 영어 사용 한정. 번역앱(파파고·구글 번역) 미리 다운로드.</li>
      <li><strong>택시·디디</strong>: 디디(Didi) 앱 = 중국판 카카오택시.</li>
      <li><strong>고속철도</strong>: 베이징↔상하이 4시간 30분, 600km/h.</li>
    </ul>` },

    { type: 'h2', id: 'budget', text: '예산' },
    { type: 'body', html: `4박5일 베이징 또는 상하이: 1인 100~200만 원<br/>5박6일 베이징+상하이 광역: 1인 130~250만 원` },

    { type: 'faq', items: [
      { q: '비자 발급 어렵나요?', a: '단체 신청 1~2주, 개인 2~4주. 신청 전 최신 정책 재확인 필수.' },
      { q: '환승 무비자?', a: '베이징·상하이·광저우·청두 등 일부 공항 — 144시간 환승 무비자 적용 가능. 적용 조건 확인.' },
      { q: 'VPN 합법인가요?', a: '회색 영역. 개인 사용은 일반적으로 단속되지 않으나 외국인 호텔 와이파이는 차단되는 경우 多.' },
      { q: '한국인 가이드 가능?', a: '단체 패키지 또는 베이징·상하이 한국 여행사 통해 가이드 동반 가능.' },
    ]},

    { type: 'sources', items: [
      { label: '외교부 해외안전여행 — 중국', url: 'https://www.0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
      { label: '주중 대한민국 대사관', url: 'https://overseas.mofa.go.kr/cn-ko/index.do', org: '대사관', accessedAt: '2026-04-25' },
      { label: '주한 중국대사관', url: 'http://kr.china-embassy.gov.cn/', org: '중국대사관', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
