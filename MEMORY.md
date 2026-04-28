# 트립스팟 (tripspot) — MEMORY.md

> 사이트 현재 상태와 진행 로그. 새 세션 시작 시 가장 먼저 이 파일을 읽고 작업을 이어간다.

## 사이트 현황 (2026-04-28 기준)

- **상태**: **모든 93개 포스트 본문 작성 완료** — 외교부·한국관광공사·UNESCO 공식 출처 기반.
- **이름**: 트립스팟 (tripspot.ambitstock.com) — 브랜드 마크 "T".
- **지도**: 메인 인터랙티브 세계지도(react-simple-maps) + 국가별 admin-1 mini-map (한국 17시도·일본 47현·중국 31성 등) + 메인 줌 컨트롤. Leaflet mini-map (지역·스팟·호텔).
- **OG 이미지**: 93개 포스트 자체 OG PNG 1200×630 자동 생성 (`scripts/generate-og-images.js`).
- **컴포넌트**: Layout / PostRenderer / TravelBoxes / WorldMap / CountryMiniMap / LeafletMap / PostCard / Breadcrumb / AdUnit / MultiplexAd / TopAdRow / StickySideAds / Faq / PageTracker

## 포스트 카운트 (2026-04-28 본문 작성 완료)

| 엔티티 | 메타 | **본문(.js)** | 평균 분량 |
|---|---|---|---|
| Country | 16 | **16 ✓** | 2,500~3,500자 |
| Region | 18 | **18 ✓** | 1,800~2,500자 |
| Spot | 5 | **5 ✓** | 1,200~1,800자 |
| Hotel | 3 | **3 ✓** | 1,500~2,000자 |
| Theme | 10 | **10 ✓** | 1,500~2,500자 |
| Guide | 10 | **10 ✓** | 2,000~3,000자 (Level A 출처 2개+) |
| Situation | 8 | **8 ✓** | 1,500~2,500자 |
| Tool | 8 | **8 ✓** | 1,500~2,000자 |
| Compare | 5 | **5 ✓** | 1,800~2,500자 |
| Addon | 10 | **10 ✓** | 1,000~1,500자 |
| **합계** | **93** | **93** | 약 18~20만 자 |

## 앵커 포스트 (트래픽 80% 책임)

1. `/countries/jp/` — 일본 (한국인 최대 해외여행지)
2. `/countries/vn/regions/danang/` — 다낭 (가족여행·풀빌라 1순위)
3. `/countries/kr/regions/jeju/` — 제주 (국내 1위)
4. `/themes/honeymoon/` — 신혼여행
5. `/themes/family/` — 가족여행
6. `/themes/pool-villa/` — 풀빌라
7. `/situations/first-overseas-trip/` — 첫 해외여행
8. `/tools/travel-budget/` — 여행 예산 계산기

## 다음 작업 백로그

> 사용자가 명령으로 선택해서 실행한다. 우선순위는 사이트 가치 기여도 순.

### A. 인터랙티브 지도 (A+B 조합 — 사용자 확정 2026-04-27)

**A안 — `react-simple-maps` + Natural Earth TopoJSON (무료·SSR 친화·키 불필요)**
- 의존성: `react-simple-maps`, TopoJSON `world-110m.json` → `public/world-110m.json`
- `components/WorldMap.js` 를 SVG 폴리곤 버전으로 교체
  - 국가 폴리곤 hover → 툴팁(국가명 + 포스트 N개)
  - 콘텐츠 있는 국가만 브랜드 컬러, 없는 국가는 회색
  - 클릭 → `/countries/{slug}/`
  - 모바일은 현재 타일 그리드로 폴백
- 국가 허브에 mini-map (해당국 폴리곤 강조) 추가
- 지역 허브에 광역 폴리곤 (TopoJSON 또는 단순 마커)

**B안 — Leaflet + OSM 타일 (무료·키 불필요·클라이언트 전용)**
- 의존성: `leaflet`, `react-leaflet` (dynamic import — `ssr: false`)
- 지역 허브: 지역 중심 + 주요 스팟 마커
- 스팟 상세: lat/lng 단일 마커 + 줌 14
- 호텔 상세: 호텔 마커 + 주변 스팟 마커 + 거리 표시

**작업 파일**
- `components/WorldMap.js` (A안 교체)
- `components/CountryMiniMap.js` (A안)
- `components/RegionLeafletMap.js` (B안 — dynamic SSR off)
- `components/SpotMiniMap.js` / `components/HotelMiniMap.js` (B안)
- `public/world-110m.json` (Natural Earth 1:110m)
- `next.config.js` 에 leaflet CSS 처리 추가 필요 시

### B. 본문 콘텐츠 (앵커 포스트 우선 — 트래픽 80%)

> 모든 본문은 `posts/{entity}/{slug}.js` 에 `module.exports = { sections: [...] }` 로 작성. `fallbackSections` 가 사라지고 진짜 본문이 렌더된다.

**B-1. Level A (비자·안전) — 출처 2개 이상 필수**
- `posts/guides/japan-visa.js` (Visit Japan Web)
- `posts/guides/vietnam-visa.js`
- `posts/guides/thailand-visa.js`
- `posts/guides/china-visa.js` (정책 변동 잦음)
- `posts/guides/us-esta.js`
- `posts/guides/mofa-safety.js` (외교부 여행경보 4단계)

**B-2. 앵커 국가 / 지역 (Level B/C, 3000자+)**
- `posts/countries/jp.js` (일본 — 한국인 최대)
- `posts/countries/vn.js`
- `posts/countries/kr.js`
- `posts/regions/vn-danang.js` (가족·풀빌라 1순위)
- `posts/regions/kr-jeju.js`
- `posts/regions/jp-tokyo.js`
- `posts/regions/jp-osaka.js`
- `posts/regions/jp-fukuoka.js`

**B-3. 앵커 호텔 (수익 핵심)**
- `posts/hotels/shilla-jeju.js`
- `posts/hotels/lotte-jeju.js`
- `posts/hotels/intercontinental-danang.js`

**B-4. 앵커 테마 / 상황**
- `posts/themes/honeymoon.js` / `pool-villa.js` / `family.js`
- `posts/situations/first-overseas-trip.js` / `family-with-kids.js`

**B-5. 비교 페이지 (3500자+)**
- `posts/compares/jeju-hotels-vs-villas.js`
- `posts/compares/danang-resorts.js`
- `posts/compares/honeymoon-bali-vs-maldives.js`

### C. 이미지 라이선스 파이프라인

- `scripts/sync-tourapi.js` — TourAPI 4.0 자동 동기화 (`searchKeyword1`/`areaBasedList1`/`detailIntro1`/`detailCommon1`/`detailImage1`)
- `scripts/sync-wikimedia.js` — Wikimedia Commons API + 라이선스(CC BY/SA/PD) 자동 검증
- `scripts/sync-unsplash.js` / `scripts/sync-pexels.js`
- 어드민에 이미지 후보 5장 표시 → 사용자 선택 UI
- placeholder.svg 사용 페이지를 실제 이미지로 일괄 교체
- `public/images/` 자동 적재

### D. 호텔스컴바인 어필리에이트 통합

- 어필리에이트 가입 (HotelsCombined CJ 또는 Travelpayouts) → `HOTELSCOMBINED_AFFILIATE_ID` 발급
- `data/hotels.js` 의 `hotelsCombinedDeepLink` 어드민에서 입력
- 딥링크 자동 검증 (HTTP 200 확인) → `affiliateLinkVerified` 갱신
- `/api/track-click` 클릭 추적 엔드포인트 + `affiliate_clicks` 테이블 적재
- 호텔 페이지 `hotelsCombinedCTA` 가 빈 딥링크일 때 비표시 폴백

### E. 계산기 위젯 (`components/calculators/`)

- `TravelBudgetCalc.js` (우선) — 인원·기간·목적지 → 항공+호텔+식비+교통+액티비티 합산
- `FlightTimeCalc.js` — 출발지·도착지 → 직항 비행시간 + 시차
- `CurrencyCalc.js` — 한국은행 ECOS API + 일별 캐시
- `LuggageWeightCalc.js` — 항공사별 수하물 한도
- `VisaCheckerCalc.js` — 한국 여권 기준 자동 분류 (Level A — 외교부 재확인 단서)
- `ItineraryBuilderCalc.js` — 스팟 추가 → 동선·소요시간
- `pages/tools/[slug].js` 에 `CalculatorWidget` 통합 (insurance 패턴 이식)

### F. 자동화 / 동기화 스크립트

- `scripts/sync-mofa-safety.js` — 외교부 여행경보 주 1회 모니터링 → 변경 시 알림
- `scripts/sync-ecos.js` — 한국은행 환율 일별
- `scripts/generate-og.js` — 포스트별 OG 이미지 자동 생성 (호텔명+도시+평점, SVG → PNG)
- launchd 설정 (월/주/일 단위 자동 실행)

### G. 데이터 확장 (Phase 2)

- Country: 16 → 30 (대만 외 더 많은 유럽·동남아 추가)
- Region: 21 → 50 (일본 후쿠오카 외 핵심·교토·나라·구마모토 등)
- Spot: 5 → 60 (TourAPI 자동 시드)
- Hotel: 3 → 40 (호텔스컴바인 hot-link 후 일괄 등록)
- Theme/Compare 추가

### H. Supabase 통합

- `supabase/migration.sql` 실행 (4개 테이블)
- 어드민에서 `coupang-seed.json` 일괄 로드
- pageview 추적 활성화 (PageTracker 컴포넌트 동작 확인)
- `image_credits` 테이블에 외부 이미지 메타 적재

### I. SEO·검색엔진 등록

- `.env.local` 검증 메타 4종 입력(Google/Naver/Daum/Bing)
- Google Search Console — sitemap 제출
- Naver Search Advisor — 도메인 등록
- Bing Webmaster Tools
- Daum 검색등록(register.search.daum.net)
- IndexNow API (실시간 색인 요청)
- 한국관광공사 TourAPI 키 발급(공공데이터포털)

### J. 배포 / 운영

- Vercel 프로젝트 연결
- 가비아 도메인 → `tripspot.ambitstock.com` CNAME → cname.vercel-dns.com
- ads.txt 실제 pub-ID 입력
- `.env.local` 운영값 Vercel 환경변수에 설정
- 빌드 후 favicon `file public/favicon.ico` 검증
- launchd 자동 발행 속도 제어 (하루 5건 제한)

### K. 사이트 간 시너지

- insurance ↔ tripspot: 여행자보험 가이드에서 양방향 링크
- finance ↔ tripspot: 환율·트래블카드
- car ↔ tripspot: 렌터카 섹션
- card ↔ tripspot: 트래블 신용카드

## 진행 로그

- **2026-04-27**: 초기 스캐폴드 완료. insurance 프로젝트를 베이스로 8개 엔티티/페이지/컴포넌트/문서/templates/scripts/공식 출처 매핑까지 일괄 생성. 이미지는 placeholder, 본문은 폴백 자동 생성으로 빌드 가능 상태. 호텔스컴바인 딥링크·실제 이미지·외교부 여행경보 동기화는 후속 세션에서 진행.

## 빌드 / 실행

```bash
cd /Users/lee/Desktop/Project/travel/travel
npm install
npm run build
npm run dev          # http://localhost:3000
```

## 주요 환경 변수 (.env.local)

```
NEXT_PUBLIC_SITE_NAME=트립스팟
NEXT_PUBLIC_SITE_URL=https://tripspot.ambitstock.com
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=
NEXT_PUBLIC_NAVER_VERIFICATION=
NEXT_PUBLIC_DAUM_VERIFICATION=
NEXT_PUBLIC_BING_VERIFICATION=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=
HOTELSCOMBINED_AFFILIATE_ID=
TOUR_API_KEY=
```
