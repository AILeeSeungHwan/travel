module.exports = {
  sections: [
    { type: 'intro', html: `항공사별 수하물 한도는 국적기·LCC·해외 항공사·좌석 등급마다 다릅니다. 한도 초과 시 1kg당 1~3만 원 추가 요금. 본 가이드는 한국·해외 항공사 수하물 한도와 절약 팁을 정리합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1743356174408-a4d2dd23230e?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 수하물 무게 한도 항공사별 짐 가이드', caption: '항공사별 수하물 한도 완전 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Ish Consul on Unsplash', imageSourceUrl: 'https://unsplash.com/@ishconsul?utm_source=travel.ambitstock&utm_medium=referral' },

    { type: 'info', title: '계산기 위젯', html: '항공사·좌석 등급 입력 → 무료 수하물 한도 + 추가 요금 자동 계산. (위젯 후속)' },

    { type: 'h2', id: 'korean', text: '한국 항공사' },
    { type: 'body', html: `<ul>
      <li><strong>대한항공·아시아나 (이코노미)</strong>: 위탁 23kg × 1~2개 + 기내 10~12kg + 1개 노트북 가방</li>
      <li><strong>대한항공·아시아나 (비즈니스)</strong>: 위탁 32kg × 2개 + 기내 18kg</li>
      <li><strong>제주항공</strong>: 위탁 15kg + 기내 10kg (기본·운임 따라 다름)</li>
      <li><strong>티웨이</strong>: 위탁 15kg + 기내 10kg</li>
      <li><strong>진에어</strong>: 위탁 15kg + 기내 12kg</li>
      <li><strong>에어부산·에어서울</strong>: 위탁 15kg + 기내 10kg</li>
      <li><strong>이스타항공</strong>: 운임 따라 다름</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'foreign', text: '해외 항공사' },
    { type: 'body', html: `<ul>
      <li>JAL·ANA (일본): 위탁 23kg × 1~2 + 기내 10kg</li>
      <li>싱가포르 항공: 위탁 30kg + 기내 7kg</li>
      <li>캐세이 (홍콩): 위탁 30kg + 기내 7kg</li>
      <li>베트남 항공: 위탁 23kg + 기내 12kg</li>
      <li>타이 항공: 위탁 30kg + 기내 7kg</li>
      <li>루프트한자·KLM·에어프랑스: 위탁 23kg + 기내 8kg</li>
      <li>유나이티드·델타·아메리칸: 위탁 23kg × 2 + 기내 12kg</li>
      <li>에미레이트: 위탁 30kg + 기내 7kg</li>
    </ul>` },

    { type: 'h2', id: 'liquid', text: '액체·보조배터리·전자기기' },
    { type: 'body', html: `<ul>
      <li><strong>기내 액체</strong>: 100ml 이하 + 1L 투명 지퍼백 1개</li>
      <li><strong>보조배터리</strong>: 위탁 X (기내만), 100Wh 이하 OK, 100~160Wh 항공사 승인</li>
      <li><strong>리튬 배터리 가전</strong>: 위탁 X (노트북·전자담배·드론)</li>
      <li><strong>전자담배</strong>: 일부 국가(태국) 완전 금지</li>
    </ul>` },

    { type: 'h2', id: 'overweight', text: '한도 초과 — 추가 요금' },
    { type: 'body', html: `<ul>
      <li>대한항공: 23~32kg 1개 USD 50~150 (구간별)</li>
      <li>제주항공: 1kg당 KRW 12,000~25,000</li>
      <li>티웨이: 1kg당 KRW 13,000~25,000</li>
      <li>싱가포르 항공: 1kg당 USD 25~30</li>
    </ul>사전 온라인 결제 시 30~50% 할인 — 공항 결제 비싸다.` },

    { type: 'h2', id: 'tips', text: '절약 팁' },
    { type: 'body', html: `<ul>
      <li>여행 전 캐리어 무게 측정</li>
      <li>여분 + 무거운 옷·신발은 입고 탑승</li>
      <li>여행 후 면세 쇼핑 — 무게 +5~10kg 미리 계산</li>
      <li>LCC 위탁 비싸면 추가 + 옵션 (제주항공 BAG)</li>
      <li>마일리지·등급 멤버십 — 추가 짐 무료 (마일리지 모닝 등)</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '캐리어 사이즈?', a: '20인치(기내) 7kg, 24인치(위탁) 15~20kg, 28인치 25~30kg. 23kg 한도면 24인치 권장.' },
      { q: '한도 초과 시?', a: '온라인 사전 결제 30~50% 할인. 공항 결제 비쌈.' },
      { q: '명품 가방?', a: '23kg 한도 명품 가방·시계·보석 — 면세점 쇼핑 후 한국 입국 시 USD 800 면세 한도 적용.' },
    ]},

    { type: 'sources', items: [
      { label: '국토교통부 — 항공보안', url: 'https://www.molit.go.kr/', org: '국토부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
