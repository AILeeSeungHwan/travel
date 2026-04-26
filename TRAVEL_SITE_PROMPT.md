# TRAVEL_SITE_PROMPT.md — 여행 사이트 제작용 프롬프트

> **이 프롬프트는 `NEW_SITE_PROMPT.md`의 §1(도메인 특화 부분)을 여행 도메인으로 치환한 본체입니다.**
> `NEW_SITE_PROMPT.md`의 **§2(공통 규칙) + §A 패치(favicon/ico/OG/sitemap/RSS)** 는 그대로 유효합니다.
> 이 파일과 `NEW_SITE_PROMPT.md` 두 개를 함께 Claude Code에 로드하여 사용.

---

# §1-Travel. 여행 사이트 (travelmoa / 여행모아) 제작 본체

너는 지금 내 로컬 맥 환경에서 작업하는 수석 프론트엔드/풀스택 엔지니어다.

## 작업 목표

- ambitstock 네트워크 허브형 구조(policy / car / property / card / health / insurance / finance 계승)를 기반으로
- 여행지 정보 / 호텔 추천 / 지역별 허브 / 여행 가이드를 다루는 `travelmoa` 사이트를 구축한다
- 단순 블로그가 아니라 **"인터랙티브 세계지도 + 3단계 계층 허브(국가 → 지역 → 스팟) + 호텔 추천 + 여행 계산기"** 통합 구조
- **핵심 수익**: 호텔스컴바인 어필리에이트 (CPL $0.50~$2.00 / 로열티 퍼블리셔 시 예약 금액의 최대 6%) + AdSense
- 국내 50% / 해외 50% 균형 전략
- 사진이 콘텐츠 가치의 절반 — **합법적 이미지 파이프라인**을 초기부터 강제 적용

## 중요 원칙

1. **이미지 합법성이 사이트 생존을 좌우한다**
   - 호텔/여행지 사진을 외부 사이트에서 다운로드해 자체 서버에 저장하는 행위는 절대 금지
   - 모든 이미지는 (a) 공공누리 / CC 라이선스 / (b) 호텔스컴바인 API / (c) 호텔 직접 PR키트 / (d) 자체 OG 생성 중 하나에서 출처
   - AdSense 계정 단위 정책 위반 시 ambitstock 네트워크 전체에 영향 → 무단 이미지 사용은 가장 큰 리스크
2. **3단계 계층 IA**: 세계 (메인 인터랙티브 지도) → 국가 허브 → 지역 허브 → 스팟 상세 → 호텔 추천
3. 호텔스컴바인 1개 어필리에이트만 사용 (한 페이지 내 호텔 추천 1~3개, 모두 호텔스컴바인 딥링크)
4. 기존 프로젝트(insurance / finance / card 등) 구조 분석 후 최대 재사용
5. 결과물은 "여행모아" 별도 프로젝트 폴더
6. 대량 포스팅 / 데이터 / SEO 확장 용이 구조
7. 코드 수정 전 기존 구조 분석 → 재사용/복제/수정 계획 수립 후 작업

---

## [여행 도메인 특수성 — 반드시 반영]

### 1. 이미지 라이선스 정책 (가장 중요)

#### 1-A. 허용된 이미지 출처 (이 6개 외에는 사용 금지)

| 출처 | 라이선스 | 활용 | 필수 표기 |
|---|---|---|---|
| 한국관광공사 TourAPI 4.0 | 공공누리 1유형 | 국내 모든 관광지·문화유산·축제 | "출처: 한국관광공사" |
| Wikimedia Commons | CC BY / CC BY-SA / Public Domain | 해외 도시·랜드마크·자연유산 | 작가명 + 라이선스 표기 |
| Unsplash API | Unsplash License | 분위기·배경·도시 풍경 | "Photo by {작가} on Unsplash" |
| Pexels API | Pexels License | 분위기·배경 보완 | 출처 표기 권장 |
| 호텔스컴바인 API hot-link | 파트너 약관 | 호텔 객실/외관 (다운로드 금지, IMG src로만) | "via HotelsCombined" |
| 자체 생성 OG 이미지 | 자체 자산 | 포스트별 메인 이미지 | 표기 불필요 |

#### 1-B. 금지 사항
- Booking.com / Agoda / Hotels.com / Expedia 등 OTA 사이트에서 이미지 다운로드 금지
- 호텔 공식 사이트에서 무단 이미지 다운로드 금지 (저작권 = 호텔이 아니라 사진작가에게 있는 경우 다수)
- 인스타그램·블로그·여행카페 사진 무단 사용 절대 금지
- 모든 이미지는 `imageSource`, `imageLicense`, `imageCredit` 메타데이터를 데이터베이스에 함께 저장 (DMCA 대응)

#### 1-C. 호텔별 사진 확보 워크플로우
호텔 상세 페이지 만들 때:
1. **1순위**: 호텔스컴바인 API hot-link로 IMG src 임베드 (다운로드 X)
2. **2순위 (대형 호텔)**: 호텔 공식 PR 키트 직접 요청 — 어드민 페이지에 "사진 사용 허락 받음 (이메일 첨부)" 체크박스
3. **3순위 (대체 불가)**: Wikimedia Commons에 호텔 사진이 있으면 사용
4. **4순위**: 자체 OG 이미지 (호텔명 + 도시 + 평점) 자동 생성으로 대체
5. **금지**: 위 4가지로도 사진을 못 구하면 그 호텔은 추천 목록에서 제외

#### 1-D. 한국관광공사 TourAPI 활용 (국내 콘텐츠 핵심)
- 발급: 공공데이터포털(data.go.kr) → 한국관광공사 TourAPI 신청
- 수집 대상:
  - `searchKeyword1` — 키워드 검색
  - `areaBasedList1` — 지역 기반 리스트
  - `detailIntro1` — 상세 정보
  - `detailImage1` — 이미지 정보 (다중)
  - `detailCommon1` — 공통 정보
- 데이터 캐싱: Supabase에 메타데이터 저장 + 이미지는 hot-link로 IMG src 사용 (재배포 금지 약관 준수)
- 갱신 주기: 월 1회 자동 동기화 (`scripts/sync-tourapi.js`)

### 2. 호텔스컴바인 어필리에이트 정책 준수

- **딥링크 생성**: HotelsCombined CJ 또는 Travelpayouts 네트워크 가입 후 발급된 ID 사용
- **딥링크 형식**: `https://www.hotelscombined.com/Hotel/{hotel_id}?aid={affiliate_id}&label={tracking_label}`
- **`label` 파라미터** = 어떤 포스트에서 클릭됐는지 추적용 (포스트 슬러그)
- **금지 표현**:
  - "최저가 보장" 단정 (가격은 변동)
  - "수수료 없음" (호텔스컴바인 자체 수수료는 없지만 일반화 금지)
  - 호텔스컴바인 트레이드마크 키워드 입찰 금지 (광고 운영 시)
- **고지 의무**: 모든 어필리에이트 링크 근처 + 푸터에 "본 사이트는 호텔스컴바인 제휴 활동의 일환으로 일정 수수료를 제공받습니다" 명시
- **클릭 vs 전환**: CPL 모델이지만 클릭만 누적되고 전환 없으면 어카운트 정지 리스크 → 사이트 KPI는 "예약 전환율 3% 이상 유지"

### 3. 여행 정보 정확성 등급

**Level A — 안전·법규 정보 (가장 엄격)**
- 비자 / 출입국 / 여행자보험
- 여행 안전 / 외교부 여행경보
- 환율 / 세관 / 면세 한도
→ **외교부 해외안전여행 / 비자 발급 공식 정보** 출처 필수
→ "출국 전 외교부 사이트 재확인" 면책 고정 노출
→ 정보 변경 빈도 높음 — 발행일 명시 + 자동 알림

**Level B — 호텔·항공·교통 정보 (중간)**
- 호텔 시설·위치·평점
- 항공 노선·소요시간
- 대중교통·렌터카
→ 호텔스컴바인 / 공식 항공사 / 관광공사 출처
→ 가격은 "변동 가능, 클릭 시점 가격 확인" 단서

**Level C — 여행 후기·추천·문화 정보 (완화)**
- "○○ 도시 가볼 만한 곳"
- "현지 음식 추천"
- 분위기·문화·역사
→ 자체 큐레이션 가능, 출처 표기는 권장

### 4. 여행 특유 표기 준수

- 호텔 가격은 항상 "OO년 O월 기준, 1박 기준, 객실 타입 명시"
- 환율은 "OO년 O월 OO일 기준" 명시
- 여행 거리는 "직선거리 / 차량 / 도보 / 대중교통" 구분
- 항공 소요시간 "직항 / 경유 명시"
- 비자 정보 "OO년 OO월 기준 — 출국 전 외교부 확인"

---

## [여행 E-E-A-T 설계]

### Experience
- 여행지 후기는 "출처를 명확히 한 큐레이션" 형태로 작성
- "직접 다녀온 후기"로 단정하지 말 것 (작성자가 실제 다녀왔다는 거짓말 방지)
- 여행자 후기 인용 시 "한국관광공사 / TripAdvisor 후기 평균" 등 출처 표기

### Expertise
- 사이트 운영자: "여행 정보 큐레이터" 포지셔닝
- 공식 자료 출처 2개 이상 필수:
  - 한국관광공사 (visitkorea.or.kr)
  - 외교부 해외안전여행 (0404.go.kr)
  - 각국 관광청 공식 사이트
  - UNESCO 세계유산 (한국유네스코위원회)
  - 호텔스컴바인 (호텔 정보·평점)

### Authoritativeness
- 공식 기관 아웃바운드 링크 필수
- Wikimedia 이미지는 작가명 + 라이선스 명기
- 한국관광공사 데이터는 "출처: 한국관광공사" 명기

### Trustworthiness
- 각 페이지 업데이트 일자
- `/disclaimer/` 여행 특화 (여행 안전·환율·비자 분리 면책)
- 호텔스컴바인 제휴 고지
- 이미지 출처 페이지(`/image-credits/`) 별도 운영
- 연락처 실존

---

## [해야 할 일 — 단계별]

### [1] 로컬 파일 구조 분석

- `/Users/lee/Desktop/Project/` 하위 가장 가까운 구조 탐색 (insurance / finance 우선)
- 사용 기술 스택 / 라우팅 / 데이터 / 컴포넌트 / SEO 메타 / 어드민·통계 페이지 분석
- 분석 결과 요약 → travelmoa 전환 계획 제시

### [2] travelmoa 프로젝트 생성

- insurance/finance 프로젝트 복제 → travelmoa 치환
- 치환 방향:
  - 기존 단일 엔티티 구조 → **3단계 계층 (Country → Region → Spot) + 4번째 엔티티 (Hotel)**
  - `categories` → `themes` (여행 테마: 호캉스 / 가족여행 / 효도여행 / 골프투어 / 백패킹 등)
  - `companies` → `airlines` (항공사) — MVP 외 (2단계)
  - `tools` → `tools` (여행 계산기)
  - `addons` → 여행용품 추천 (Level C 보조 콘텐츠)

### [3] 데이터 모델 설계 (8개 엔티티)

#### 3-A. Country (국가 — 1단계 허브)
```
- slug (kr, jp, vn, th, fr, ...)
- countryName (한국, 일본, 베트남, 태국, 프랑스, ...)
- countryNameEn
- continent (asia / europe / americas / oceania / africa / domestic)
- isDomestic (boolean — 국내(한국) / 해외 구분)
- iso2 (한국=KR, 일본=JP)
- iso3 (KOR, JPN, ...)
- mapBoundingBox: { minLat, maxLat, minLng, maxLng }  // 지도 줌 인용
- centerLat, centerLng (지도 표시용)
- timeZone
- currency (KRW, JPY, USD, EUR)
- visaInfoForKoreans (90일 무비자 / 비자 필요 / 전자비자 / ETA 등)
- visaSourceUrl (외교부 영사민원24)
- safetyLevel (외교부 여행경보 단계)
- safetyUpdated
- safetySourceUrl (0404.go.kr)
- bestSeasons (월별 — 1월 추천도 1~5)
- introHero (대표 이미지 — 자체 OG 또는 Wikimedia)
- summary (2~3단락)
- whyVisit
- mainCities (이 국가의 region slug 리스트)
- popularThemes (이 국가에서 인기 있는 테마 slug)
- typicalCostPerDay (1일 예산 대략 — 백패커/표준/럭셔리)
- localTransportation
- foodHighlights
- culturalEtiquette
- emergencyContacts (대사관 연락처 — 외교부 출처)
- faq
- sources
- ymylLevel: "B"
- updatedAt
```

#### 3-B. Region (지역 — 2단계 허브)
```
- slug
- regionName (제주, 강원, 도쿄, 오사카, 다낭, 방콕)
- regionNameEn
- countrySlug (FK)
- regionType (province/state/prefecture/city/island)
- centerLat, centerLng
- mapBoundingBox
- areaCode (TourAPI areaCode — 국내인 경우)
- summary
- whatToExpect
- bestSeasons
- spotSlugs (이 지역의 스팟 slug 리스트)
- hotelSlugs (이 지역에 추천 호텔)
- mainAttractions
- foodSpecialties
- transportation (공항·기차·버스·렌터카)
- accommodationGuide (어느 동네에 묵으면 좋은지)
- itinerarySamples (1박2일 / 2박3일 / 3박4일 추천 일정)
- introHero
- gallery (대표 이미지 3~5장 — 모두 라이선스 메타데이터 포함)
- nearbyRegionSlugs
- faq
- sources
- ymylLevel: "B/C"
- updatedAt
```

#### 3-C. Spot (여행 스팟 — 3단계 상세)
```
- slug
- spotName
- spotNameEn / spotNameLocal
- regionSlug (FK)
- countrySlug (FK)
- spotType (관광지 / 자연 / 박물관 / 테마파크 / 시장 / 카페·맛집 / 야경명소 / 사진명소 / 액티비티)
- contentTypeId (TourAPI contentTypeId — 국내인 경우)
- contentId (TourAPI contentId — 국내인 경우, 사진 동기화용)
- lat, lng
- address
- summary (한 문장)
- description (Level C 큐레이션)
- highlights (이 스팟의 매력 3~5개)
- bestVisitTime (계절 / 시간대)
- duration (소요 시간 추천)
- admission (입장료 — 변동 가능 단서)
- transportation (이 스팟까지 가는 법)
- nearbyHotelSlugs (이 스팟 근처 추천 호텔)
- nearbySpotSlugs (이 스팟에서 함께 가볼 곳)
- gallery: [
    { url, source, license, credit, alt }
  ]  // 라이선스 메타 필수
- mainImage
- tips (현지 팁)
- cautions (주의 사항)
- faq
- sources
- ymylLevel: "C"
- updatedAt
```

#### 3-D. Hotel (호텔 — 수익 핵심 엔티티)
```
- slug
- hotelName
- hotelNameEn
- regionSlug (FK)
- countrySlug (FK)
- hotelClass (5성 / 4성 / 3성 / 부티크 / 게스트하우스 / 풀빌라 / 료칸)
- hotelType (호텔 / 리조트 / 풀빌라 / 한옥스테이 / 료칸 / 호스텔 / 게스트하우스)
- lat, lng
- address
- starRating
- guestRating (호텔스컴바인 평균)
- ratingsSourceUrl
- priceRangePerNight (대략적 — "변동 가능" 단서)
- amenities (수영장 / 스파 / 조식 / 무료주차 / 공항셔틀 / 키즈시설)
- roomTypes
- whoIsItFor (커플 / 가족 / 비즈니스 / 골프 / 호캉스 등 타겟)
- standoutFeatures (이 호텔의 차별점)
- nearbySpotSlugs (도보·차량 5분 / 10분 / 20분 거리)
- nearestAirport
- distanceFromAirport
- gallery: [
    { url, source: "hotelscombined-api"|"hotel-pr-kit"|"wikimedia", license, credit, alt }
  ]
- mainImage
- hotelsCombinedDeepLink (어드민에서 입력)
- hotelsCombinedHotelId
- bestBookedSeason (성수기 vs 비수기)
- petPolicy
- cancellationPolicy (일반적 — "예약 시 확인" 단서)
- cautions
- faq
- ymylLevel: "B"
- updatedAt
- imageVerified (boolean — 이미지 라이선스 확인 완료 여부)
- affiliateLinkVerified (boolean — 딥링크 동작 확인)
```

#### 3-E. Theme (여행 테마)
```
- slug (honeymoon / family / parents-trip / golf / pool-villa / beach / snow / hot-spring / shopping / food-tour / culture-history / adventure / pet-friendly / solo / workation)
- themeName
- description
- targetAudience
- typicalDuration
- typicalCost
- bestCountrySlugs (이 테마에 적합한 국가)
- bestRegionSlugs
- bestHotelSlugs
- packingChecklist
- faq
- ymylLevel: "C"
- updatedAt
```

#### 3-F. Guide (여행 가이드)
```
- slug
- guideType: "visa" | "safety" | "transport" | "money" | "language" | "etiquette" | "first-time"
- title
- targetCountrySlug (또는 null = 일반)
- targetReader (첫 해외여행 / 가족여행 / 자유여행 / 패키지)
- summary
- sections (section-array)
- relatedCountrySlugs
- relatedRegionSlugs
- sources (외교부 / 관광공사 / 항공사 등)
- faq
- ymylLevel ("A" for 비자/안전, "B" for 교통/돈, "C" for 언어/에티켓)
- updatedAt
```

#### 3-G. SituationHub (상황별 허브)
```
- slug (first-overseas-trip / family-with-kids / honeymoon / parents-trip / business-trip / pet-trip / budget-100man / luxury-trip / 3-day-domestic / 1-week-overseas)
- situationName
- summary (2~3단락)
- whoIsItFor
- recommendedCountrySlugs
- recommendedRegionSlugs
- recommendedThemeSlugs
- recommendedHotelSlugs
- budgetGuide
- packingTips
- relatedGuideSlugs
- faq
- ymylLevel: "C"
- updatedAt
```

#### 3-H. Tool (여행 계산기)
```
- slug (travel-budget / flight-time / time-zone-converter / currency / luggage-weight / visa-checker / itinerary-builder)
- toolName
- description
- inputFields
- outputFields
- relatedCountrySlugs
- relatedGuideSlugs
- ymylLevel
- updatedAt
```

---

## [4] 페이지 타입 구현 (MVP)

### A. 홈 `/` — **인터랙티브 세계지도가 핵심**

**메인 영역 (above the fold)**:
- **인터랙티브 SVG 세계지도** (라이브러리: `react-simple-maps` 또는 `d3-geo`)
  - 각 국가 폴리곤에 마우스 호버 → 툴팁 표시 (국가명 + 우리 사이트 포스트 수)
  - **포스트가 있는 국가만 색상 강조** (없는 국가는 회색)
  - 클릭 → `/countries/{slug}/` 이동
  - 모바일: 지도 대신 국가 그리드 (대륙별 탭)
- 검색 바 (도시명 / 국가명 / 호텔명)

**그 아래**:
- 🗺️ 인기 여행지 TOP 8 (썸네일 + 국가명 + 클릭 시 해당 국가 허브로)
- 🇰🇷 국내 여행 진입 (제주 / 강원 / 부산 / 경주 등 카드)
- 🌏 해외 여행 진입 (일본 / 베트남 / 태국 / 유럽 등)
- 🎯 여행 테마별 진입 (호캉스 / 가족여행 / 효도여행 등)
- 🛠️ 인기 여행 도구 (환율 / 비행시간 / 시차)
- 📰 최근 업데이트
- 🚨 외교부 여행경보 변동 알림 (자동 가져오기)
- 푸터: 호텔스컴바인 제휴 고지 + 이미지 출처 페이지 링크

### B. 국가 허브 `/countries/`, `/countries/{slug}/`

**`/countries/{slug}/` 섹션 순서**:
1. **Hero** — 대표 이미지 (Wikimedia or 자체 OG) + 국가명 + 한 줄 소개
2. **한눈에 보기** (카드형):
   - 비자 (90일 무비자 / 비자 필요 / 전자비자)
   - 통화 / 환율 (실시간 또는 캐시)
   - 시차
   - 베스트 시즌
   - 외교부 여행경보 단계
3. **이 나라는 어떤 곳인가** (Level C 큐레이션)
4. **지역별로 가보기** — 지역 카드 그리드 (각 지역의 대표 사진 + 한 줄 설명)
   - 클릭 시 `/countries/{slug}/regions/{region-slug}/` 이동
5. **인기 여행 테마** — 이 나라에서 추천하는 테마 (호캉스 / 가족여행 등)
6. **추천 호텔 BEST** (이 나라 전체에서 5~10개 — 호텔스컴바인 딥링크)
7. **여행 가이드** — 이 나라 관련 가이드 (비자·교통·통화 등) 링크
8. **계산기 바로가기** (환율 / 비행시간)
9. **이 나라에 가기 전 알아둘 것** (안전·세관·문화)
10. **FAQ**
11. **출처** (외교부 / 관광공사 / Wikimedia 등)
12. **면책**

### C. 지역 허브 `/countries/{country}/regions/{region}/` — **3단계 계층의 핵심**

**섹션 순서**:
1. **Hero** + 지역명 + 국가 breadcrumb
2. **한눈에 보기** (위치 / 이동시간(공항~) / 베스트 시즌 / 추천 일정)
3. **이 지역은 어떤 곳인가**
4. **꼭 가봐야 할 스팟** — 스팟 카드 그리드 (사진 + 이름 + 한 줄)
   - 클릭 시 `/countries/{country}/regions/{region}/spots/{spot}/` 이동
5. **테마별 즐기기** — 이 지역에서 인기인 테마
6. **추천 호텔** — 이 지역 호텔 5~10개 + 호텔스컴바인 딥링크
7. **추천 일정** (1박2일 / 2박3일 / 3박4일 샘플)
8. **이동 / 교통**
9. **현지 음식**
10. **숙소 동네 가이드** (어느 동네가 좋은지)
11. **FAQ**
12. **출처**
13. **면책**

### D. 스팟 상세 `/countries/{country}/regions/{region}/spots/{spot}/`

**섹션 순서**:
1. **갤러리** (3~5장 슬라이더 — 라이선스 표기)
2. **한눈에 보기** (위치 / 입장료 / 소요시간 / 베스트 시즌)
3. **이곳은 어떤 곳** (Level C 큐레이션)
4. **하이라이트** (3~5개)
5. **방문 팁**
6. **가는 방법**
7. **주변 함께 가볼 곳** (nearbySpotSlugs 카드)
8. **이 스팟 근처 추천 호텔** — 도보/차량 거리 기준 3~5개 (호텔스컴바인 딥링크)
9. **주의사항**
10. **FAQ**
11. **출처**
12. **면책**

### E. 호텔 상세 `/hotels/{slug}/` — **수익 전환 페이지**

> **이 페이지가 사이트 수익의 80%를 책임지는 페이지. 가장 정성스럽게.**

**섹션 순서**:
1. **갤러리** (호텔스컴바인 API hot-link 또는 PR 키트 — 5~10장, 라이선스 표기)
2. **한눈에 보기** (등급 / 평점 / 가격대 / 위치)
3. **호텔 소개** (Level C — 자체 큐레이션 200~400자)
4. **이 호텔의 차별점** (3~5개)
5. **객실 타입**
6. **시설·편의** (수영장 / 스파 / 조식 등 — 표 또는 아이콘 그리드)
7. **이런 분에게 추천** (커플 / 가족 / 비즈니스 등)
8. **위치와 주변** — 작은 지도 + 주변 스팟 거리표
   - 도보 5분 거리 스팟 / 차량 10분 / 차량 20분
9. **공항에서 가는 법**
10. **주변 추천 스팟** (nearbySpotSlugs 카드)
11. **[CTA] 호텔스컴바인에서 최저가 확인하기** (딥링크 버튼 — 큰 사이즈)
    - 제휴 고지 병기: "본 사이트는 호텔스컴바인 제휴 활동의 일환으로 일정 수수료를 제공받습니다"
12. **알아두면 좋은 점** (체크인 시간·반려동물·취소 등 일반 가이드)
13. **FAQ**
14. **이미지 출처**
15. **면책**

### F. 테마 허브 `/themes/`, `/themes/{slug}/`
호캉스 / 가족여행 / 효도여행 / 골프투어 / 풀빌라 / 비치 / 스키 / 온천 / 쇼핑 / 미식 / 문화·역사 / 모험 / 반려동물 / 솔로 / 워케이션 등

### G. 가이드 `/guides/`, `/guides/{slug}/`
- 비자 / 안전 / 교통 / 통화 / 언어 / 에티켓 / 첫 해외여행

### H. 상황 허브 `/situations/`, `/situations/{slug}/`
- 첫 해외여행 / 아이와 함께 / 신혼여행 / 부모님 여행 / 출장 / 반려동물 동반 / 100만원 예산 / 럭셔리 / 1박2일 국내 / 1주일 해외

### I. 비교 `/compare/`, `/compare/{slug}/`
- 제주 호텔 vs 풀빌라 / 도쿄 5성호텔 비교 / 다낭 리조트 비교 / 신혼여행 발리 vs 몰디브 / 가성비 료칸 비교

### J. 계산기 `/tools/`, `/tools/{slug}/`
**최소 8개**:
- 여행 예산 계산기 (1인당 / 가족당 / 항공+호텔+식비+교통+액티비티)
- 비행시간 / 시차 계산기 (출발지·도착지)
- 환율 계산기 (한은 ECOS API + 캐시)
- 짐 무게 계산기 (수하물 한도 — 항공사별 데이터)
- 비자 자동 체크 (한국 여권 기준 — 출국 전 외교부 재확인 필수)
- 여행자보험 보장 비교 가이드 (insurance.ambitstock과 시너지)
- 여행 일정 빌더 (스팟 추가 → 동선·소요시간 자동 계산)
- 여행지 추천 (예산·기간·테마 입력 → 추천 국가)

### K. Addon `/addons/{slug}/` — Level C 쿠팡 전용
- 캐리어 / 여권지갑 / 여행어댑터 / 보조배터리 / 여행용 화장품 케이스 / 목베개 / 안대 / 압축팩 / 트래블 메디컬 키트 / 골프백 (골프투어 연계)

### L. 필수 법적 페이지
`/about/`, `/editorial-policy/`, `/disclaimer/` (여행 특화 — 안전·환율·비자 분리), `/privacy/`, `/terms/`, `/contact/`, `/authors/{slug}/`,
**`/image-credits/`** (모든 외부 이미지의 출처·라이선스 일괄 표기 — 여행 사이트 특수 페이지)

---

## [5] 인터랙티브 세계지도 구현

### 라이브러리 선택
- `react-simple-maps` (Next.js 호환, SVG 기반) — 추천
- `d3-geo` (커스텀 자유도 높음, 학습 곡선 있음)
- TopoJSON 파일 (Natural Earth 1:110m): https://github.com/topojson/world-atlas

### 동작
1. 페이지 로드 시 `/api/countries-with-posts` 호출 → 포스트 있는 국가 slug 배열 반환
2. SVG 세계지도 렌더 — 포스트 있는 국가는 브랜드 컬러, 없는 국가는 회색
3. 호버 시 툴팁: 국가명 + "포스트 N개" + 작은 미리보기
4. 클릭 → `/countries/{slug}/` 이동
5. 모바일: 지도 대신 대륙 탭 + 국가 카드 그리드 (성능·UX 둘 다 개선)

### 캐싱
- 포스트 있는 국가 목록은 ISR 5분 재검증
- TopoJSON은 정적 자산 (`public/world-110m.json`)

---

## [6] SEO 구조

### 기본 메타 (§2 + 여행 특화)
- Title 패턴:
  - 국가: `{국가명} 여행 가이드 — 비자·시즌·추천 도시 — 여행모아`
  - 지역: `{지역명} 여행 — 가볼 만한 곳·호텔 추천 — 여행모아`
  - 스팟: `{스팟명} ({지역명}) — 입장료·가는 법·주변 호텔 — 여행모아`
  - 호텔: `{호텔명} — 위치·시설·평점 — 여행모아`

### 여행 특화 JSON-LD

| 페이지 | 스키마 |
|---|---|
| 국가 허브 | `TouristDestination` + `Country` + `BreadcrumbList` |
| 지역 허브 | `TouristDestination` + `City` 또는 `AdministrativeArea` |
| 스팟 상세 | `TouristAttraction` + `Place` + `BreadcrumbList` + (해당 시) `Museum` `Park` `LandmarksOrHistoricalBuildings` |
| 호텔 상세 | `Hotel` + `LodgingBusiness` + `AggregateRating` + `Offer` + `BreadcrumbList` |
| 가이드 | `HowTo` 또는 `Article` |
| 비교 | `Article` + `FAQPage` |
| 계산기 | `WebApplication` + `SoftwareApplication` |

#### Hotel 스키마 예시
```json
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "호텔 정식명",
  "starRating": { "@type": "Rating", "ratingValue": "4" },
  "address": { "@type": "PostalAddress", "streetAddress": "...", "addressLocality": "...", "addressCountry": "KR" },
  "geo": { "@type": "GeoCoordinates", "latitude": 0, "longitude": 0 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": 4.5, "reviewCount": 1234 },
  "priceRange": "₩₩₩",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "수영장", "value": true }
  ],
  "image": ["..."]
}
```

#### TouristAttraction 스키마 예시 (스팟)
```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "스팟명",
  "description": "...",
  "geo": { "@type": "GeoCoordinates", "latitude": 0, "longitude": 0 },
  "image": ["..."],
  "isAccessibleForFree": false
}
```

### 내부 링크 전략 (3단계 계층 활용)
- 국가 → 그 나라의 모든 지역 / 인기 호텔 / 가이드
- 지역 → 그 지역의 모든 스팟 / 호텔 / 일정
- 스팟 → 같은 지역 다른 스팟 + 주변 호텔
- 호텔 → 주변 스팟 + 같은 지역 다른 호텔 + 같은 등급 다른 호텔
- 모든 페이지 → 관련 계산기 1개 + 관련 가이드 1개

### URL 구조
```
/countries/jp/                          (국가 허브)
/countries/jp/regions/tokyo/            (지역 허브)
/countries/jp/regions/tokyo/spots/sensoji/   (스팟 상세)
/hotels/park-hyatt-tokyo/               (호텔은 별도 라우트, 검색 친화)
/themes/honeymoon/                      (테마)
/situations/first-overseas-trip/        (상황)
/guides/japan-visa/                     (가이드)
/tools/flight-time/                     (계산기)
/compare/jeju-hotels/                   (비교)
```

### 앵커 포스트 (사이트 트래픽 80% 책임)
1. `/countries/jp/` — 일본 (한국인 최대 해외여행지)
2. `/countries/vn/regions/danang/` — 다낭 (가족여행 최대 수요)
3. `/countries/kr/regions/jeju/` — 제주
4. `/themes/honeymoon/` — 신혼여행
5. `/themes/family-with-kids/` — 가족여행
6. `/themes/pool-villa/` — 풀빌라
7. `/situations/first-overseas-trip/` — 첫 해외여행
8. `/tools/travel-budget/` — 여행 예산 계산기

---

## [7] 수익화 구조

### AdSense 배치 (§2 준수)
- 국가/지역/스팟 페이지: 본문 중간 + 사이드 sticky
- 호텔 페이지: **CTA 영역 위아래 광고 금지** (호텔스컴바인 전환 방해 X)
- 비교/계산기: 사이드 sticky 적극 활용

### 호텔스컴바인 (핵심 수익원)
- 호텔 상세 페이지: CTA 1개 (큰 버튼)
- 지역 허브: 호텔 카드 5~10개 (각 카드 → 호텔 상세 → 호텔스컴바인)
- 스팟 상세: 주변 호텔 카드 3~5개
- 국가 허브: BEST 호텔 5~10개

**전환율 KPI**: 클릭 대비 예약 전환 3% 이상 유지 (못 미치면 호텔스컴바인 어카운트 정지 리스크)

### 쿠팡 파트너스 (Level C — 여행용품 보조)
- Addon 페이지에만
- 캐리어 / 여권지갑 / 여행어댑터 / 보조배터리 / 목베개 / 안대 등
- 호텔스컴바인 페이지에는 절대 쿠팡 링크 금지 (전환 방해)

### 사이트 간 시너지
- insurance: 여행자보험 → travelmoa 비자/안전 가이드에서 링크
- finance: 환율 / 해외 ATM / 트래블카드 → travelmoa 통화 가이드
- car: 렌터카 → travelmoa 교통 섹션
- card: 트래블 신용카드 / 라운지 카드 → travelmoa 카드 가이드
- policy: 청년 여행 정책지원금 등 → travelmoa 가이드

---

## [8] 초기 샘플 데이터

**국내 5:5 균형 — 국내 50% / 해외 50%**

- **Country 16개**:
  - 국내: 한국 1
  - 해외 아시아 (한국인 수요 최상위): 일본 / 베트남 / 태국 / 대만 / 싱가포르 / 홍콩 / 필리핀 / 말레이시아 / 인도네시아 / 중국 (10)
  - 해외 유럽: 프랑스 / 이탈리아 / 영국 / 독일 (4)
  - 해외 기타: 미국 (1)
  → 추후 확장
- **Region 30개** (국가별 평균 2~3개):
  - 한국: 제주 / 서울 / 강원 / 부산 / 경주·경북 / 전남 / 충청 / 인천 (8)
  - 일본: 도쿄 / 오사카 / 후쿠오카 / 오키나와 / 홋카이도 (5)
  - 베트남: 다낭 / 호치민 / 하노이 / 푸꾸옥 (4)
  - 태국: 방콕 / 푸켓 / 치앙마이 (3)
  - 기타 국가: 각 1~2개 (10)
- **Spot 60개** (지역별 평균 2개):
  - 국내 우선 풍부하게 (TourAPI에서 자동 시드)
- **Hotel 40개** (지역별 평균 1~2개):
  - 호텔스컴바인 검색·딥링크 직접 입력
  - 이미지는 호텔스컴바인 API hot-link
  - 라이선스 메타데이터 모두 입력
- **Theme 10개**: 호캉스 / 가족여행 / 효도여행 / 신혼여행 / 골프투어 / 풀빌라 / 온천·료칸 / 비치 / 미식 / 쇼핑
- **Guide 10개**: 일본 비자 / 베트남 비자 / 태국 비자 / 환율 좋은 시점 / 트래블카드 비교 / 면세 한도 / 외교부 여행경보 보는 법 / 첫 해외여행 준비 / 짐 싸기 / 항공권 싸게 사는 법
- **SituationHub 8개**
- **Tool 8개**
- **Addon 10개** (여행용품)

샘플 데이터 작성 시:
- 국내 스팟·이미지는 TourAPI 자동 시드
- 해외 이미지는 Wikimedia Commons 검색 → 라이선스 검증 → 메타데이터 저장
- 호텔 이미지는 호텔스컴바인 API hot-link만 사용
- 비자/안전 정보는 외교부 출처 명시 + 작성일 명시
- 모호하면 `verificationRequired: true` TODO 플래그

---

## [9] 자동화 파이프라인

### TourAPI 동기화 (`scripts/sync-tourapi.js`)
```
- 국내 모든 광역시·도 (areaCode 1~39)에 대해
- areaBasedList1 호출 → 신규 스팟 검출
- detailCommon1 + detailIntro1 + detailImage1 호출 → 메타·이미지·소개 수집
- imageSource = "korea-tour-api", imageLicense = "공공누리1유형" 메타데이터 저장
- 월 1회 launchd 실행 (혹은 어드민 수동 트리거)
```

### Wikimedia Commons 검색 (`scripts/sync-wikimedia.js`)
```
- 새 해외 스팟 추가 시 키워드 + 도시명으로 Wikimedia API 검색
- 라이선스 자동 검증 (CC BY / CC BY-SA / Public Domain 만)
- 작가명·라이선스 URL 메타데이터 저장
- 어드민에서 후보 사진 5장 표시 → 사용자가 선택
```

### Unsplash / Pexels API
```
- 분위기·배경 이미지 보완용
- 키워드 검색 → 어드민에서 선택
- 작가명·소스 URL 자동 저장
```

### 외교부 여행경보 모니터링 (`scripts/sync-mofa-safety.js`)
```
- 외교부 해외안전여행 사이트 정기 확인 (주 1회)
- 단계 변경 시 해당 국가 페이지 자동 업데이트 + 알림
```

### 호텔스컴바인 딥링크 관리 (어드민 UI)
```
- 어드민 페이지에서 호텔별 딥링크 입력
- 딥링크 동작 자동 검증 (HTTP 응답 확인)
- 클릭 추적 (label 파라미터 = 포스트 슬러그)
- /api/track-click 엔드포인트로 클릭 로그 수집
```

---

## [10] Scaled Content Abuse 회피

- 하루 최대 5개 (신규 2주 하루 2~4개)
- 동일 카테고리(국가) 연속 발행 금지
- 각 포스트 고유 가치 1조각 필수 (큐레이션 / 일정 / 표 / 가이드 본문)
- **이미지가 없는 스팟 포스트는 발행 금지** (사진 없는 여행 콘텐츠 = thin)
- TourAPI 메타데이터만으로 자동 생성한 포스트 = thin content. 반드시 자체 큐레이션 200자 이상 추가
- 월 1회 이상 기존 포스트 10개 이상 업데이트 (특히 비자·안전·환율)

---

## [11] 작업 단계

1. 기존 사이트 구조 분석 (insurance / finance 우선)
2. travelmoa 복제 / 리네이밍 / 브랜드 치환
3. 데이터 모델 8개 엔티티 구현
4. 인터랙티브 세계지도 컴포넌트 구현 (`components/WorldMap.js`)
5. 3단계 계층 라우팅 구조 (`/countries/{c}/regions/{r}/spots/{s}/`)
6. 포스팅 마스터 템플릿 작성 (/templates/)
   - country / region / spot / hotel / theme / guide / situation / compare / tool / addon
7. 페이지 템플릿 구현 (홈 → 국가 → 지역 → 스팟 → 호텔 순)
8. 이미지 라이선스 파이프라인 구현 (TourAPI / Wikimedia / Unsplash / Pexels / 호텔스컴바인 API)
9. 호텔스컴바인 딥링크 관리 어드민
10. 샘플 데이터 입력 (TourAPI 자동 시드 + 해외 수동)
11. SEO 메타 / JSON-LD (Hotel·TouristAttraction·TouristDestination 모두)
12. /image-credits/ 페이지 자동 생성 스크립트
13. §A 패치 (favicon/ico, OG, sitemap 분할, RSS, IndexNow)
14. 필수 법적 페이지 (여행 특화 disclaimer)
15. 검색엔진 등록 준비
16. 로컬 실행 확인

---

## [12] 최종 목표

"ambitstock 허브형 구조를 계승하고, 인터랙티브 세계지도 + 3단계 계층 IA(국가 → 지역 → 스팟) + 호텔 추천을 통합한 travelmoa 사이트를 로컬에서 바로 실행 가능한 상태로 만든다. 모든 이미지는 합법적 출처(TourAPI / Wikimedia / Unsplash / Pexels / 호텔스컴바인 API / 자체 OG)에서만 수집·사용한다. 호텔스컴바인 어필리에이트 + AdSense 이중 수익 구조를 갖춘다. 국내 50% + 해외 50% 균형 콘텐츠 전략을 유지한다."

---

**이 프롬프트가 준비되면 여행 사이트 제작을 시작하라.
먼저 기존 사이트(insurance / finance) 구조를 분석하고, 재사용 전략과 전환 계획부터 보여줄 것.
이미지 합법성 정책은 어떤 경우에도 타협하지 않는다 — 사진을 못 구하면 그 페이지를 발행하지 않는다.**
