// data/hotels.js — 호텔 메타 (수익 핵심 엔티티)
// 본문: posts/hotels/{slug}.js
// 이미지는 호텔스컴바인 API hot-link 또는 호텔 PR 키트만 — 자체 다운로드 절대 금지
// hotelsCombinedDeepLink 는 어드민에서 입력. 빈 값이면 '준비 중' 표시.

const hotels = [
  {
    id: 'H001', slug: 'shilla-jeju', countrySlug: 'kr', regionSlug: 'jeju',
    hotelName: '제주신라호텔', hotelNameEn: 'The Shilla Jeju',
    title: '제주신라호텔 — 중문관광단지 5성 가족 호캉스 가이드',
    description: '중문관광단지 대표 5성호텔 제주신라. 야외수영장(인피니티), 키즈클럽, 한식·일식·뷔페 다이닝, 중문해변 위치와 객실 타입·시설 정보.',
    summary: '중문관광단지 5성호텔. 인피니티 풀, 키즈클럽, 가족 호캉스 1순위.',
    hotelClass: '5성', hotelType: '리조트',
    starRating: 5, guestRating: 4.6, ratingsSourceUrl: 'https://www.hotelscombined.com/',
    priceRange: '60만~120만원/박 (시즌 변동, 클릭 시점 확인)',
    amenities: ['야외수영장','키즈클럽','조식뷔페','스파','피트니스','무료주차'],
    roomTypes: ['디럭스 트윈','패밀리','이그제큐티브 스위트'],
    whoIsItFor: '가족 / 호캉스 / 효도여행',
    standoutFeatures: ['인피니티 풀','중문해변 직결','키즈클럽 운영'],
    nearestAirport: '제주국제공항(JEJU)', distanceFromAirport: '40분(차량)',
    address: '제주 서귀포시 중문관광로72번길 75',
    lat: 33.25, lng: 126.41, iso2: 'KR',
    nearbySpotSlugs: [],
    gallery: [
      { url: '/images/placeholder-hotel.svg', source: 'hotelscombined-api', license: '파트너 약관(다운로드 금지·hot-link)', credit: 'via HotelsCombined', alt: '제주신라 야외수영장' },
    ],
    hotelsCombinedDeepLink: '', hotelsCombinedHotelId: '',
    publishedAt: '2026-04-25', updatedAt: '2026-04-25', ymylLevel: 'B',
    imageVerified: false, affiliateLinkVerified: false,
    tags: ['제주신라','중문','5성','호캉스'],
  },
  {
    id: 'H002', slug: 'lotte-jeju', countrySlug: 'kr', regionSlug: 'jeju',
    hotelName: '롯데호텔 제주', hotelNameEn: 'Lotte Hotel Jeju',
    title: '롯데호텔 제주 — 야외수영장·돌고래쇼·중문 가족 리조트',
    description: '중문관광단지 5성호텔 롯데 제주. 야외수영장(가든풀), 돌고래쇼, 카지노, 한식·일식·중식 다이닝과 키즈프로그램 가이드.',
    summary: '중문 5성호텔. 가든풀, 돌고래쇼, 가족 호캉스.',
    hotelClass: '5성', hotelType: '리조트',
    starRating: 5, guestRating: 4.5, priceRange: '50만~110만원/박',
    amenities: ['야외수영장','키즈클럽','조식뷔페','카지노','스파','피트니스'],
    roomTypes: ['디럭스','패밀리','스위트'], whoIsItFor: '가족 / 효도여행 / 호캉스',
    standoutFeatures: ['가든풀','돌고래쇼','카지노 보유'],
    nearestAirport: '제주국제공항(JEJU)', distanceFromAirport: '40분(차량)',
    address: '제주 서귀포시 중문관광로72번길 35', lat: 33.25, lng: 126.41, iso2: 'KR',
    gallery: [
      { url: '/images/placeholder-hotel.svg', source: 'hotelscombined-api', license: '파트너 약관(다운로드 금지·hot-link)', credit: 'via HotelsCombined', alt: '롯데호텔 제주 가든풀' },
    ],
    hotelsCombinedDeepLink: '', hotelsCombinedHotelId: '',
    publishedAt: '2026-04-25', updatedAt: '2026-04-25', ymylLevel: 'B',
    imageVerified: false, affiliateLinkVerified: false,
    tags: ['롯데호텔제주','중문','5성','호캉스'],
  },
  {
    id: 'H003', slug: 'intercontinental-danang', countrySlug: 'vn', regionSlug: 'danang',
    hotelName: '인터컨티넨탈 다낭 선 페닌술라', hotelNameEn: 'InterContinental Danang Sun Peninsula',
    title: '인터컨티넨탈 다낭 선 페닌술라 — 베트남 신혼·럭셔리 리조트',
    description: '다낭 선차반도 절벽에 자리한 럭셔리 5성리조트. 4단 비치 풀, 미슐랭 다이닝(라메종 1888), 빌라형 객실로 신혼·기념일 여행 1순위.',
    summary: '다낭 선차반도 절벽 럭셔리 리조트. 신혼·기념일 1순위.',
    hotelClass: '5성', hotelType: '리조트',
    starRating: 5, guestRating: 4.8, priceRange: 'USD 400~1200/박',
    amenities: ['야외수영장','프라이빗 비치','스파','조식뷔페','피트니스','버틀러서비스'],
    roomTypes: ['클럽 스위트','테라스 스위트','풀빌라'], whoIsItFor: '신혼 / 기념일 / 럭셔리',
    standoutFeatures: ['빌 베리 디자인','4단 비치 풀','미슐랭 라메종 1888'],
    nearestAirport: '다낭국제공항(DAD)', distanceFromAirport: '30분(차량)',
    address: 'Bai Bac, Son Tra, Danang, Vietnam', lat: 16.13, lng: 108.30, iso2: 'VN',
    gallery: [
      { url: '/images/placeholder-hotel.svg', source: 'hotelscombined-api', license: '파트너 약관(다운로드 금지·hot-link)', credit: 'via HotelsCombined', alt: 'InterContinental Danang Beach Pool' },
    ],
    hotelsCombinedDeepLink: '', hotelsCombinedHotelId: '',
    publishedAt: '2026-04-25', updatedAt: '2026-04-25', ymylLevel: 'B',
    imageVerified: false, affiliateLinkVerified: false,
    tags: ['인터컨티넨탈','다낭','5성','신혼'],
  },
]

module.exports = hotels
