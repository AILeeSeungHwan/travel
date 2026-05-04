module.exports = {
  sections: [
    { type: 'intro', html: `짐 싸기는 여행 준비의 마지막 단계이지만 빠뜨리면 현지에서 비싸게 사거나 곤란을 겪습니다. 본 가이드는 일본·동남아·유럽·미국 등 4개 권역별 짐 체크리스트와 항공사 수하물 한도(국적기·LCC), 100ml 액체 규정, 보조배터리 등 항공 보안 규정까지 정리합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1743356174408-a4d2dd23230e?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 짐 싸기 캐리어 수하물 체크리스트', caption: '해외여행 짐 싸기 체크리스트', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Ish Consul on Unsplash', imageSourceUrl: 'https://unsplash.com/@ishconsul?utm_source=tripspot&utm_medium=referral' },

    { type: 'h2', id: 'essential', text: '필수 — 모든 여행 공통' },
    { type: 'body', html: `<ul>
      <li>여권 (잔여 6개월) + 사본 1부</li>
      <li>왕복 항공권 (모바일·인쇄)</li>
      <li>호텔 예약 증빙 (모바일)</li>
      <li>여행자보험 증서</li>
      <li>현금(USD 200~500) + 트래블카드 2개</li>
      <li>휴대폰·충전기·보조배터리</li>
      <li>국가별 어댑터</li>
      <li>심카드·이심 또는 포켓와이파이</li>
      <li>옷·속옷·양말 (체류 일수 + 1)</li>
      <li>세면용품 (호텔 제공 시 생략)</li>
      <li>상비약 (지사제·해열제·반창고)</li>
      <li>처방약 (있다면 영문 처방전)</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'liquid', text: '100ml 액체 규정 — 기내 반입' },
    { type: 'body', html: `<strong>국제선 기내</strong> 반입 액체는 <strong>100ml 이하 용기</strong> + <strong>1L 투명 지퍼백 1개</strong> (1인). 화장품·로션·치약·샴푸·향수·물 모두 포함.<br/>위탁 수하물은 액체 한도 X — 큰 용량은 위탁.<br/><strong>예외</strong>: 의료용 액체, 유아 음식 (별도 신고).` },

    { type: 'h2', id: 'battery', text: '보조배터리·전자기기' },
    { type: 'body', html: `<ul>
      <li><strong>보조배터리</strong>: <strong>위탁 금지</strong>, 기내만. 100Wh(약 27,000mAh) 이하 무제한, 100~160Wh 항공사 승인, 160Wh 초과 금지.</li>
      <li><strong>리튬 배터리 가전</strong>(노트북·전자담배): 위탁 X, 기내만.</li>
      <li><strong>드론</strong>: 항공사·국가별 규정 확인.</li>
      <li><strong>전자담배·VAPE</strong>: 태국 등 일부 국가 <strong>완전 금지</strong> — 출국 전 확인.</li>
    </ul>` },

    { type: 'h2', id: 'luggage', text: '항공사별 수하물 한도' },
    { type: 'body', html: `<table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="background:#F8FAFC"><th style="padding:6px;border:1px solid #E2E8F0">항공사</th><th style="padding:6px;border:1px solid #E2E8F0">위탁</th><th style="padding:6px;border:1px solid #E2E8F0">기내</th></tr>
      <tr><td style="padding:6px;border:1px solid #E2E8F0">대한항공·아시아나(이코노미)</td><td style="padding:6px;border:1px solid #E2E8F0">23kg × 1~2</td><td style="padding:6px;border:1px solid #E2E8F0">10~12kg</td></tr>
      <tr><td style="padding:6px;border:1px solid #E2E8F0">제주항공·티웨이·진에어</td><td style="padding:6px;border:1px solid #E2E8F0">15~20kg (유료 추가)</td><td style="padding:6px;border:1px solid #E2E8F0">7~10kg</td></tr>
      <tr><td style="padding:6px;border:1px solid #E2E8F0">에어부산·에어서울</td><td style="padding:6px;border:1px solid #E2E8F0">15kg + 유료 추가</td><td style="padding:6px;border:1px solid #E2E8F0">10kg</td></tr>
      <tr><td style="padding:6px;border:1px solid #E2E8F0">루프트한자·KLM·에어프랑스</td><td style="padding:6px;border:1px solid #E2E8F0">23kg × 1</td><td style="padding:6px;border:1px solid #E2E8F0">8kg</td></tr>
      <tr><td style="padding:6px;border:1px solid #E2E8F0">싱가포르·캐세이</td><td style="padding:6px;border:1px solid #E2E8F0">30kg</td><td style="padding:6px;border:1px solid #E2E8F0">7kg</td></tr>
    </table>` },

    { type: 'h2', id: 'beach', text: '비치·휴양 (다낭·푸켓·발리·괌)' },
    { type: 'body', html: `<ul>
      <li>수영복 2벌 + 래시가드</li>
      <li>비치샌들·아쿠아슈즈</li>
      <li>선크림(50+, 100ml 이하)</li>
      <li>모자·선글라스</li>
      <li>방수팩(휴대폰·여권)</li>
      <li>비상약 (알로에·진통제·지사제)</li>
      <li>모기퇴치제</li>
      <li>긴팔·긴바지(에어컨·사원 방문용)</li>
    </ul>` },

    { type: 'h2', id: 'city', text: '도시 (도쿄·오사카·런던·파리·뉴욕)' },
    { type: 'body', html: `<ul>
      <li>편한 신발 (걸을 일 多, 8시간+)</li>
      <li>가벼운 자켓 (실내외 온도차)</li>
      <li>접이식 우산</li>
      <li>크로스백·안티스키밍 지갑 (소매치기 대비)</li>
      <li>휴대용 충전기·5,000mAh+</li>
      <li>구글 지도·번역앱 사전 다운로드</li>
    </ul>` },

    { type: 'h2', id: 'cold', text: '겨울·스키 (홋카이도·평창·유럽 12월)' },
    { type: 'body', html: `<ul>
      <li>패딩·다운자켓</li>
      <li>장갑·목도리·비니</li>
      <li>방수 부츠·아이젠</li>
      <li>핫팩 (캐리어 1~2박스)</li>
      <li>립밤·핸드크림 (건조)</li>
      <li>스키 장비는 현지 렌탈 권장 (위탁 비용 高)</li>
    </ul>` },

    { type: 'h2', id: 'kids', text: '아이와 함께 (영유아)' },
    { type: 'body', html: `<ul>
      <li>아이 여권·기본 약품 (영문 표기)</li>
      <li>분유·이유식 (기내 액체 한도 예외 — 신고)</li>
      <li>유모차 (기내 게이트까지 OK)</li>
      <li>장난감·태블릿 (장거리 비행)</li>
      <li>물티슈·기저귀 (현지 비싸거나 부족 가능)</li>
      <li>구급약 (해열제·지사제)</li>
    </ul>` },

    { type: 'h2', id: 'pack', text: '짐 줄이는 팁' },
    { type: 'body', html: `<ul>
      <li><strong>압축팩</strong>: 옷 부피 50% 감소</li>
      <li><strong>여행용 100ml 케이스</strong>: 화장품 옮겨 담기</li>
      <li><strong>1주 = 옷 4~5세트</strong>: 호텔·게스트하우스 세탁기 활용</li>
      <li><strong>현지 구매</strong>: 세면용품·우산 등 (가격 동일하거나 저렴)</li>
      <li><strong>롤링 vs 폴딩</strong>: 롤링 = 부피 작음, 폴딩 = 주름 적음</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '캐리어 사이즈?', a: '1박2일 — 20인치 기내. 3~5박 — 24인치 위탁. 1주+ — 28인치.' },
      { q: '하드 vs 소프트?', a: '하드 — 보호력·방수. 소프트 — 가벼움·확장성. 비치는 하드, 도시는 소프트.' },
      { q: '국제운전면허 필요?', a: '발리·태국·하와이·렌터카 시 필수. 도로교통공단 1년 유효, 8,500원.' },
      { q: '컨센트(콘센트) 어댑터?', a: '일본 A타입(110V), 동남아 C타입, 영국 G타입. 멀티 어댑터(USB-C PD) 1개로 해결.' },
    ]},

    { type: 'sources', items: [
      { label: '국토교통부 항공보안 — 액체류', url: 'https://www.molit.go.kr/', org: '국토부', accessedAt: '2026-04-25' },
      { label: '한국공항공사 — 수하물', url: 'https://www.airport.co.kr/', org: '한국공항공사', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
