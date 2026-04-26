# DATA_SCHEMA.md — 8개 엔티티 스키마

본 사이트는 8개 엔티티 + 비교/여행용품 보조 엔티티로 구성됩니다.

## Country (국가)

```js
{
  id, slug,
  countryName, countryNameEn, continent, isDomestic,
  iso2, iso3, flag,
  centerLat, centerLng, mapBoundingBox,
  timeZone, currency,
  visaInfoForKoreans, visaSourceUrl,
  safetyLevel, safetyUpdated, safetySourceUrl,
  bestSeasons, introHero,
  title, description, summary,
  publishedAt, updatedAt,
  ymylLevel: 'A'|'B'|'C',
  relatedRegionSlugs, relatedThemeSlugs, relatedGuideSlugs,
  tags,
}
```

## Region (지역)

```js
{
  id, slug, countrySlug, regionName, regionType,
  centerLat, centerLng, areaCode (TourAPI 국내),
  bestSeasons, summary, description,
  spotSlugs, hotelSlugs,
  publishedAt, updatedAt, ymylLevel, tags,
}
```

## Spot (스팟)

```js
{
  id, slug, countrySlug, regionSlug,
  spotName, spotNameEn, spotNameLocal,
  spotType: '관광지'|'자연'|'박물관'|'테마파크'|'시장'|'카페·맛집'|'야경명소'|'사진명소'|'액티비티',
  contentTypeId, contentId (TourAPI 국내),
  lat, lng, address,
  summary, description,
  highlights, bestVisitTime, duration,
  admission, transportation,
  nearbyHotelSlugs, nearbySpotSlugs,
  gallery: [{ url, source, license, credit, sourceUrl, alt }],
  mainImage, tips, cautions,
  faq, sources, ymylLevel: 'C', updatedAt,
}
```

## Hotel (호텔)

```js
{
  id, slug, countrySlug, regionSlug,
  hotelName, hotelNameEn,
  hotelClass: '5성'|'4성'|'3성'|'부티크'|'게스트하우스'|'풀빌라'|'료칸',
  hotelType: '호텔'|'리조트'|'풀빌라'|'한옥스테이'|'료칸'|'호스텔'|'게스트하우스',
  lat, lng, address, iso2,
  starRating, guestRating, ratingsSourceUrl,
  priceRange, amenities, roomTypes,
  whoIsItFor, standoutFeatures,
  nearestAirport, distanceFromAirport,
  nearbySpotSlugs,
  gallery: [{ url, source: 'hotelscombined-api'|'hotel-pr-kit'|'wikimedia'|'self-og', license, credit, alt }],
  mainImage,
  hotelsCombinedDeepLink,    // 어드민에서 입력
  hotelsCombinedHotelId,
  bestBookedSeason, petPolicy, cancellationPolicy, cautions,
  publishedAt, updatedAt, ymylLevel: 'B',
  imageVerified, affiliateLinkVerified, tags,
}
```

## Theme / Guide / Situation / Tool / Compare / Addon

각 파일 (`data/{type}.js`)의 구조 참조. 공통:

```js
{ id, slug, title, description, summary, category, publishedAt, updatedAt, ymylLevel, tags }
```

특화 필드:
- Theme: `bestCountrySlugs`, `targetAudience`, `typicalDuration`, `typicalCost`
- Guide: `guideType: 'visa'|'safety'|'transport'|'money'|'language'|'etiquette'|'first-time'`, `targetCountrySlug`, `sources`
- Situation: `recommendedCountrySlugs`, `recommendedThemeSlugs`
- Tool: `toolName`
- Compare: 비교 매트릭스는 본문 (postData.sections) 내부
- Addon: 쿠팡 매칭은 `data/coupang-seed.json` 참조

## 본문 (postData.sections) 섹션 타입

```js
type: 'intro' | 'h2' | 'h3' | 'body' | 'callout' |
      'info' | 'warning' | 'risk' | 'emergency' |
      'sources' | 'faq' | 'image' |
      'productSlot' | 'cta' | 'hotelsCombinedCTA' |
      'disclaimer' | 'medDisclaimer' | 'ending'
```

`type: 'ad'` 는 사용 금지 — `PostRenderer` 가 H2 인덱스로 자동 삽입.

## SEO 슬러그 규칙

- 소문자 영문 + 하이픈
- 국내: `kr`, 일본: `jp`, 베트남: `vn` (ISO 2-letter 우선)
- 지역: `tokyo`, `osaka`, `danang`, `jeju` (영문 표기)
- 호텔: `shilla-jeju`, `intercontinental-danang`
- 테마: `honeymoon`, `pool-villa`, `hot-spring`
