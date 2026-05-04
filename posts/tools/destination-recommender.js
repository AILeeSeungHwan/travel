module.exports = {
  sections: [
    { type: 'intro', html: `여행지 추천 도구는 예산·기간·테마·동반자를 입력하면 한국인 여행객 평균 만족도 기반으로 적합한 국가·지역을 추천합니다.` },

    { type: 'image', src: 'https://images.unsplash.com/photo-1691488822390-0fd80c389953?auto=format&fit=crop&q=80&w=1200', alt: '해외여행 목적지 추천 예산 테마별 여행지 가이드', caption: '예산·테마별 여행지 추천 가이드', imageSource: 'Unsplash', imageLicense: 'Unsplash License', imageCredit: 'phatthanan tuppocha on Unsplash', imageSourceUrl: 'https://unsplash.com/@phatthanan?utm_source=tripspot&utm_medium=referral' },

    { type: 'info', title: '계산기 위젯', html: '예산·기간·테마·동반자 입력 → 추천 국가·지역 자동 제안. (위젯 후속)' },

    { type: 'h2', id: 'budget', text: '예산별 추천' },
    { type: 'body', html: `<ul>
      <li><strong>1인 50~80만 원</strong>: 후쿠오카 1박2일·대만 1박2일</li>
      <li><strong>1인 100~150만 원</strong>: 일본 광역 3박·다낭 4박·태국 4박</li>
      <li><strong>1인 200~300만 원</strong>: 발리 5박·일본 1주일·하와이 일정 단기</li>
      <li><strong>1인 400~600만 원</strong>: 하와이 7박·유럽 7박·발리 럭셔리</li>
      <li><strong>1인 700만 원+</strong>: 몰디브 OWB·일등석·럭셔리 패키지</li>
    </ul>` },

    { type: 'hotelsCombinedCTA', text: '추천 여행지 호텔 최저가 비교 →', subText: '날짜를 선택하면 여러 예약 사이트의 요금을 한번에 비교할 수 있습니다.', href: '#' },

    { type: 'h2', id: 'duration', text: '기간별' },
    { type: 'body', html: `<ul>
      <li><strong>1박2일</strong>: 후쿠오카·오사카·타이페이·강릉·제주(국내)</li>
      <li><strong>2박3일</strong>: 도쿄·방콕(시내)·홍콩·부산</li>
      <li><strong>3박4일</strong>: 다낭·일본 광역·싱가포르</li>
      <li><strong>5박6일</strong>: 발리·푸켓·하와이 단기·유럽 1도시</li>
      <li><strong>7박+</strong>: 몰디브·하와이 광역·유럽·미국 일주</li>
    </ul>` },

    { type: 'h2', id: 'theme', text: '테마별' },
    { type: 'body', html: `<ul>
      <li><strong>호캉스·풀빌라</strong>: 다낭·푸꾸옥·발리·제주·푸켓</li>
      <li><strong>신혼</strong>: 발리·몰디브·다낭·하와이</li>
      <li><strong>가족</strong>: 다낭·오키나와·괌·세부</li>
      <li><strong>효도</strong>: 일본 료칸·하와이·제주 5성·대만</li>
      <li><strong>미식</strong>: 도쿄·오사카·홍콩·방콕·타이페이·로마</li>
      <li><strong>문화·역사</strong>: 이탈리아·교토·이스탄불·아테네</li>
      <li><strong>워케이션</strong>: 치앙마이·발리·세부·다낭</li>
      <li><strong>쇼핑</strong>: 도쿄·홍콩·방콕·싱가포르</li>
    </ul>` },

    { type: 'h2', id: 'companions', text: '동반자별' },
    { type: 'body', html: `<ul>
      <li><strong>혼자 (솔로)</strong>: 일본 도쿄·교토·치앙마이 한 달 살기·발리 우붓</li>
      <li><strong>친구 그룹</strong>: 방콕·발리·다낭·도쿄·오사카</li>
      <li><strong>커플·신혼</strong>: 발리·다낭·몰디브·일본 료칸·하와이</li>
      <li><strong>가족 4인 (영유아)</strong>: 다낭·오키나와·제주</li>
      <li><strong>가족 4인 (초등)</strong>: 도쿄디즈니·USJ·괌·하와이</li>
      <li><strong>부모님 동반</strong>: 일본 료칸·하와이·국내 5성</li>
    </ul>` },

    { type: 'faq', items: [
      { q: '추천 1순위?', a: '예산 100~200만 원 + 1주일 + 가성비·가족·신혼 = 다낭. 한국인 가장 사랑.' },
      { q: '신혼 첫 추천?', a: '다낭(가성비)·발리(다양성)·몰디브(럭셔리). 예산 따라.' },
      { q: '아이 첫 해외?', a: '다낭(5시간 직항·풀빌라·한식)·오키나와(2.5시간·시차X·풀빌라).' },
    ]},

    { type: 'sources', items: [
      { label: '한국관광공사', url: 'https://www.visitkorea.or.kr/', org: '한국관광공사', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
