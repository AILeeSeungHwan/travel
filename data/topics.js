// 상위 허브 (홈·헤더 네비) — 여행
const topics = [
  { slug: 'countries',  name: '나라별',    nameEn: 'Countries',  icon: '🌏', color: '#0369A1', bgColor: '#E0F2FE', priority: 1, featured: true,  href: '/countries/',  description: '국가 → 지역 → 스팟 3단계 허브. 비자·시즌·교통·통화 등 출국 전 필수 정보까지 한눈에.' },
  { slug: 'hotels',     name: '호텔',      nameEn: 'Hotels',     icon: '🏨', color: '#B45309', bgColor: '#FEF3C7', priority: 2, featured: true,  href: '/hotels/',     description: '5성·부티크·한옥스테이·료칸·풀빌라 — 위치·시설·평점을 한눈에. 호텔스컴바인 최저가 비교.' },
  { slug: 'themes',     name: '테마',      nameEn: 'Themes',     icon: '🎯', color: '#7C3AED', bgColor: '#EDE9FE', priority: 3, featured: true,  href: '/themes/',     description: '호캉스·가족여행·효도여행·골프투어·풀빌라 등 테마별 추천.' },
  { slug: 'situations', name: '상황별',    nameEn: 'Situations', icon: '🧭', color: '#0891B2', bgColor: '#CFFAFE', priority: 4, featured: true,  href: '/situations/', description: '첫 해외여행·아이와 함께·신혼·100만원 예산·럭셔리 등 상황별 우선순위.' },
  { slug: 'tools',      name: '계산기',    nameEn: 'Tools',      icon: '🧮', color: '#0284C7', bgColor: '#E0F2FE', priority: 5, featured: true,  href: '/tools/',      description: '여행 예산·비행시간·시차·환율·짐 무게·비자 자동 체크 — 출국 전 필수 도구.' },
  { slug: 'guides',     name: '가이드',    nameEn: 'Guides',     icon: '📖', color: '#475569', bgColor: '#F1F5F9', priority: 6, featured: true,  href: '/guides/',     description: '비자·안전·교통·환율·언어·에티켓·첫 해외여행 가이드.' },
  { slug: 'compare',    name: '비교',      nameEn: 'Compare',    icon: '⚖️', color: '#B91C1C', bgColor: '#FEF2F2', priority: 7, featured: false, href: '/compare/',    description: '제주 호텔 vs 풀빌라, 도쿄 5성호텔 비교, 신혼여행 발리 vs 몰디브 등 비교 페이지.' },
  { slug: 'addons',     name: '여행용품',  nameEn: 'Addons',     icon: '🧳', color: '#EA580C', bgColor: '#FFF7ED', priority: 8, featured: false, href: '/addons/',     description: '캐리어·여권지갑·여행어댑터·보조배터리·목베개 등 여행용품 (쿠팡 파트너스).' },
]
module.exports = topics
