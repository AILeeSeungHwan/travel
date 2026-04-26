# 여행모아 (travelmoa) — MEMORY.md

> 사이트 현재 상태와 진행 로그. 새 세션 시작 시 가장 먼저 이 파일을 읽고 작업을 이어간다.

## 사이트 현황 (2026-04-27 기준)

- **상태**: 초기 스캐폴드 완료 — 16개국·30개 지역·5개 스팟·3개 호텔·10개 테마·10개 가이드·8개 상황·8개 도구·5개 비교·10개 여행용품의 **메타데이터**를 입력. 본문(섹션 배열)은 폴백 자동 생성 사용 중.
- **컴포넌트**: Layout / PostRenderer / TravelBoxes / WorldMap / PostCard / Breadcrumb / AdUnit / MultiplexAd / TopAdRow / StickySideAds / Faq / PageTracker
- **이미지**: 모든 스팟·호텔에 placeholder.svg + 라이선스 메타 입력. 실제 이미지 교체는 어드민 작업 단계에서 수행.
- **호텔스컴바인 딥링크**: 모든 호텔 빈값 — 어드민에서 입력 필요.

## 포스트 카운트

| 엔티티 | 메타 | 본문(.js) | 비고 |
|---|---|---|---|
| Country | 16 | 0 | 폴백 본문으로 빌드 가능 |
| Region | 21 | 0 | 폴백 본문 |
| Spot | 5 | 0 | 폴백 본문 (TourAPI 동기화 시 추가) |
| Hotel | 3 | 0 | 호텔스컴바인 hot-link 후 추가 |
| Theme | 10 | 0 | |
| Guide | 10 | 0 | 비자 가이드는 Level A — 출처 2개 이상 검증 후 본문 작성 |
| Situation | 8 | 0 | |
| Tool | 8 | 0 | 계산기 위젯 추후 구현 |
| Compare | 5 | 0 | |
| Addon | 10 | 0 | |

## 앵커 포스트 (트래픽 80% 책임)

1. `/countries/jp/` — 일본 (한국인 최대 해외여행지)
2. `/countries/vn/regions/danang/` — 다낭 (가족여행·풀빌라 1순위)
3. `/countries/kr/regions/jeju/` — 제주 (국내 1위)
4. `/themes/honeymoon/` — 신혼여행
5. `/themes/family/` — 가족여행
6. `/themes/pool-villa/` — 풀빌라
7. `/situations/first-overseas-trip/` — 첫 해외여행
8. `/tools/travel-budget/` — 여행 예산 계산기

## 다음 작업 (우선순위)

1. **이미지 라이선스 파이프라인 구현**
   - `scripts/sync-tourapi.js` — 한국관광공사 TourAPI 4.0 자동 동기화
   - `scripts/sync-wikimedia.js` — Wikimedia Commons 라이선스 검증
   - 어드민 페이지에 이미지 후보 선택 UI
2. **호텔스컴바인 어필리에이트 가입 후 어드민에서 딥링크 입력**
3. **앵커 포스트 본문 작성 (3000자+ Level A/B는 출처 2개 이상)**:
   - `posts/countries/jp.js` (Level A — 비자 출처 검증)
   - `posts/regions/vn-danang.js` (Level C)
   - `posts/regions/kr-jeju.js` (Level C)
   - `posts/themes/honeymoon.js`
4. **계산기 위젯 컴포넌트 (`components/calculators/`)**
   - 우선: 환율(ECOS), 비행시간, 여행 예산
5. **외교부 여행경보 모니터링**: `scripts/sync-mofa-safety.js` (주 1회)
6. **Supabase migration 실행** + 어드민에서 `coupang-seed.json` 일괄 로드
7. **검색엔진 등록**: GSC, Naver Search Advisor, Bing, Daum

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
NEXT_PUBLIC_SITE_NAME=여행모아
NEXT_PUBLIC_SITE_URL=https://travelmoa.ambitstock.com
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
