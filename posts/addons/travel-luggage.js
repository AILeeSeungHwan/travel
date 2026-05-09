module.exports = {
  sections: [
    { type: 'intro', html: `여행 캐리어는 기간·여행 스타일·항공사 한도에 맞게 선택해야 합니다. 20인치(기내)·24인치(위탁 표준)·28인치(장기) 3가지 사이즈가 표준이며, 하드케이스(보호력) vs 소프트케이스(가벼움·확장성) 두 타입으로 나뉩니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1743356174408-a4d2dd23230e?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 캐리어 여행용 가방 사이즈 선택 가이드', caption: '여행 캐리어 완전 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'Ish Consul on Unsplash', imageSourceUrl: 'https://unsplash.com/@ishconsul?utm_source=travel.ambitstock&utm_medium=referral' },

    { type: 'h2', id: 'size', text: '사이즈별 추천' },
    { type: 'body', html: `<ul>
      <li><strong>20인치 (기내수하물)</strong>: 1박2일·당일치기. 7~10kg. LCC 기내 한도 통과.</li>
      <li><strong>24인치 (위탁 표준)</strong>: 3~5박. 15~20kg. 가족·신혼 1주일.</li>
      <li><strong>28인치 (장기·가족)</strong>: 1주+. 25~30kg. 가족 4인 또는 면세 쇼핑 多.</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'type', text: '하드 vs 소프트' },
    { type: 'body', html: `<ul>
      <li><strong>하드케이스 (PC·ABS)</strong>: 보호력·방수. 비치·습기 多. 무게 4~6kg.</li>
      <li><strong>소프트케이스 (나일론·폴리에스터)</strong>: 가벼움·확장성·외주머니. 도시·미식 여행. 무게 3~5kg.</li>
    </ul>` },

    { type: 'h2', id: 'features', text: '체크 포인트' },
    { type: 'body', html: `<ul>
      <li>4륜·360° 회전 — 도시 여행 필수</li>
      <li>TSA 잠금 (미국 입출국 검사)</li>
      <li>USB 포트 (장거리·비즈니스)</li>
      <li>확장 지퍼 — 면세 쇼핑 여유</li>
      <li>하드: 모서리 보호 — 외부 충격</li>
      <li>소프트: 외부 주머니 — 노트북·여권</li>
    </ul>` },

    { type: 'h2', id: 'caution', text: '주의' },
    { type: 'body', html: `<ul>
      <li>LCC 기내 사이즈 한도 — 제주항공·티웨이 55×40×20cm</li>
      <li>위탁 무게 초과 1kg당 1~3만 원</li>
      <li>리튬 보조배터리 — 위탁 X (기내만)</li>
      <li>해외에서 캐리어 파손 — 항공사 클레임 (24시간 내)</li>
    </ul>` },

    { type: 'productSlot', productKey: 'travel-luggage' },

    { type: 'faq', items: [
      { q: '20·24·28 어느 것?', a: '1박2일 — 20. 3~5박 — 24. 1주+·가족 — 28. 24인치가 가장 범용.' },
      { q: '하드 vs 소프트?', a: '비치·습기·가족 — 하드. 도시·미식·확장 — 소프트.' },
      { q: '저가 vs 명품?', a: '저가 5~10만 원 (1~3년 사용). 중급 15~30만 원 (5~10년). 명품 100만 원+ (평생).' },
    ]},

    { type: 'disclaimer' },
  ]
}
