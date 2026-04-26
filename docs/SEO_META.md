# SEO_META.md — 여행모아 SEO 규칙

## 메타 패턴

| 페이지 | Title (60자 이하) |
|---|---|
| 국가 | `{국가명} 여행 가이드 — 비자·시즌·추천 도시 — 여행모아` |
| 지역 | `{지역명} 여행 — 가볼 만한 곳·호텔 추천 — 여행모아` |
| 스팟 | `{스팟명} ({지역명}) — 입장료·가는 법·주변 호텔 — 여행모아` |
| 호텔 | `{호텔명} — 위치·시설·평점 — 여행모아` |
| 테마 | `{테마명} 추천 — 베스트 BEST {n} — 여행모아` |
| 가이드 | `{가이드명} — 출국 전 필수 안내 — 여행모아` |

## JSON-LD

| 페이지 | 스키마 |
|---|---|
| 모든 페이지 | `Organization` + `WebSite` + `BreadcrumbList` (Layout/PostRenderer 자동) |
| 모든 상세 | `Article` |
| FAQ 섹션 | `FAQPage` |
| 국가 | `+ TouristDestination + Country` |
| 지역 | `+ TouristDestination + City/AdministrativeArea` |
| 스팟 | `+ TouristAttraction + Place` |
| 호텔 | `+ Hotel + LodgingBusiness + AggregateRating` |
| 가이드 | `+ HowTo` (steps 있을 때) |
| 계산기 | `+ WebApplication` |

## 내부 링크 (3단계 계층 활용)

- 국가 → 모든 지역 / 인기 호텔 / 가이드
- 지역 → 모든 스팟 / 호텔 / 일정
- 스팟 → 같은 지역 다른 스팟 + 주변 호텔
- 호텔 → 주변 스팟 + 같은 지역 다른 호텔
- 모든 페이지 → 관련 계산기 1개 + 가이드 1개

## 사이트맵

`scripts/generate-sitemap.js` 가 다음 분할 사이트맵 + 인덱스를 생성:
- `sitemap-core.xml` — 홈·법적 페이지·허브
- `sitemap-countries.xml` / `sitemap-regions.xml` / `sitemap-spots.xml`
- `sitemap-hotels.xml`
- `sitemap-themes.xml` / `sitemap-situations.xml` / `sitemap-guides.xml`
- `sitemap-tools.xml` / `sitemap-compares.xml` / `sitemap-addons.xml`
- `sitemap-news.xml` — 최근 30일

## RSS / Atom

`scripts/generate-feeds.js` 가 `public/rss.xml` (RSS 2.0) + `public/atom.xml` (Atom 1.0) 생성. 한국어 검색엔진은 RSS·Atom을 색인 시그널로 활용.

## 검증 메타 (env)

```
NEXT_PUBLIC_GOOGLE_VERIFICATION  → google-site-verification
NEXT_PUBLIC_NAVER_VERIFICATION   → naver-site-verification
NEXT_PUBLIC_DAUM_VERIFICATION    → daum-site-verification
NEXT_PUBLIC_BING_VERIFICATION    → msvalidate.01
```

## robots.txt 핵심

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /searchAnalytics
Disallow: /search

User-agent: Yeti
Allow: /

User-agent: Daumoa
Allow: /

Sitemap: https://travelmoa.ambitstock.com/sitemap.xml
```

## OG 이미지

`public/og-default.png` 1200×630 — 자체 OG. 포스트별 OG는 `scripts/generate-og.js` (TODO) 로 자동 생성 예정.
