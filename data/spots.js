// data/spots.js — 스팟(여행지) 메타 (3단계 상세)
// 본문: posts/spots/{country}-{spot}.js
// gallery 의 imageSource/imageLicense/imageCredit 는 절대 누락 금지 (DMCA 대응)

const spots = [
  {
    id: 'S001', slug: 'hallasan', countrySlug: 'kr', regionSlug: 'jeju',
    spotName: '한라산', spotNameEn: 'Hallasan',
    title: '한라산 — 제주 백록담 등반 코스·소요시간·주의사항',
    description: '한라산 5개 등반 코스(성판악·관음사·영실·어리목·돈내코) 소요시간·난이도와 백록담 정상 도전 시 주의사항·예약제 가이드.',
    summary: '제주 최고봉(1,947m). 성판악·관음사 코스만 백록담까지 가능, 일일 인원 제한.',
    spotType: '자연', lat: 33.36, lng: 126.53,
    address: '제주특별자치도 제주시·서귀포시',
    bestVisitTime: '4~10월(우천 시 통제)', duration: '8~10시간(왕복)',
    admission: '국립공원 무료(주차료 별도)',
    contentTypeId: 12, contentId: 'TODO',
    gallery: [
      { url: '/images/placeholder-spot.svg', source: '한국관광공사 TourAPI', license: '공공누리 1유형', credit: '한국관광공사', alt: '한라산 백록담' },
    ],
    cautions: '낙상·급변 기상 주의. 정상 등반 사전 예약 필수.',
    publishedAt: '2026-04-25', updatedAt: '2026-04-25', ymylLevel: 'C',
    tags: ['한라산','백록담','등반','제주'],
  },
  {
    id: 'S002', slug: 'seongsan', countrySlug: 'kr', regionSlug: 'jeju',
    spotName: '성산일출봉', spotNameEn: 'Seongsan Ilchulbong',
    title: '성산일출봉 — 제주 일출 명소 입장료·소요시간',
    description: 'UNESCO 세계자연유산 성산일출봉의 일출 시간, 입장료, 정상 분화구 소요시간(왕복 1시간), 주변 우도 페리 가이드.',
    summary: 'UNESCO 세계자연유산. 정상 일출 명소, 왕복 1시간.',
    spotType: '자연', lat: 33.46, lng: 126.94, address: '제주특별자치도 서귀포시 성산읍',
    bestVisitTime: '연중', duration: '1~2시간',
    admission: '대인 5,000원 / 청소년·군경 2,500원 (변동 가능)',
    gallery: [
      { url: '/images/placeholder-spot.svg', source: '한국관광공사 TourAPI', license: '공공누리 1유형', credit: '한국관광공사', alt: '성산일출봉 일출' },
    ],
    publishedAt: '2026-04-25', updatedAt: '2026-04-25', ymylLevel: 'C',
    tags: ['성산일출봉','UNESCO','일출','제주'],
  },
  {
    id: 'S003', slug: 'udo', countrySlug: 'kr', regionSlug: 'jeju',
    spotName: '우도', spotNameEn: 'Udo Island',
    title: '우도 — 페리 시간·자전거 코스·땅콩 아이스크림 가이드',
    description: '제주 동쪽 작은 섬 우도. 성산항 페리 시간, 자전거·전기차 대여, 산호해변·검멀레 해변 코스와 땅콩 명물 가이드.',
    summary: '성산에서 페리 15분. 자전거 한 바퀴 2시간.',
    spotType: '자연', lat: 33.51, lng: 126.96, address: '제주특별자치도 제주시 우도면',
    bestVisitTime: '4~10월', duration: '4~6시간',
    admission: '페리 왕복 약 10,500원',
    gallery: [
      { url: '/images/placeholder-spot.svg', source: '한국관광공사 TourAPI', license: '공공누리 1유형', credit: '한국관광공사', alt: '우도 산호해변' },
    ],
    publishedAt: '2026-04-25', updatedAt: '2026-04-25', ymylLevel: 'C',
    tags: ['우도','페리','자전거','제주'],
  },
  {
    id: 'S004', slug: 'mykhebeach', countrySlug: 'vn', regionSlug: 'danang',
    spotName: '미케비치', spotNameEn: 'My Khe Beach',
    title: '미케비치 — 다낭 가족여행 비치 가이드 (시즌·안전)',
    description: '다낭 시내에서 차로 10분, 6km 백사장의 미케비치. 가족여행 비치, 시즌(2~8월), 해류 주의, 주변 5성호텔과 카페 가이드.',
    summary: '다낭 시내 10분, 6km 백사장. 가족여행 비치 1순위.',
    spotType: '자연', lat: 16.06, lng: 108.25, address: 'My Khe Beach, Da Nang, Vietnam',
    bestVisitTime: '2~8월', duration: '반나절~하루', admission: '무료',
    gallery: [
      { url: '/images/placeholder-spot.svg', source: 'Wikimedia Commons', license: 'CC BY-SA 4.0', credit: 'Wikimedia contributor', alt: 'My Khe Beach 다낭' },
    ],
    publishedAt: '2026-04-25', updatedAt: '2026-04-25', ymylLevel: 'C',
    tags: ['미케비치','다낭','비치','베트남'],
  },
  {
    id: 'S005', slug: 'banahills', countrySlug: 'vn', regionSlug: 'danang',
    spotName: '바나힐', spotNameEn: 'Ba Na Hills',
    title: '바나힐 — 골든브릿지·케이블카 가족여행 가이드',
    description: '다낭 차로 1시간, 해발 1,400m 산정 테마파크. 골든브릿지(손브릿지), 세계 최장 케이블카, 프렌치빌리지·놀이공원 가이드.',
    summary: '다낭 차로 1시간, 산정 테마파크. 손브릿지 명물.',
    spotType: '테마파크', lat: 15.99, lng: 107.99, address: 'Hoa Vang, Da Nang, Vietnam',
    bestVisitTime: '2~8월', duration: '하루', admission: '약 90만 동(티켓 변동 가능, 클릭 시점 확인)',
    gallery: [
      { url: '/images/placeholder-spot.svg', source: 'Wikimedia Commons', license: 'CC BY-SA 4.0', credit: 'Wikimedia contributor', alt: 'Ba Na Hills Golden Bridge' },
    ],
    publishedAt: '2026-04-25', updatedAt: '2026-04-25', ymylLevel: 'C',
    tags: ['바나힐','다낭','골든브릿지','베트남'],
  },
]

module.exports = spots
