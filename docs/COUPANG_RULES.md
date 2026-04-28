# COUPANG_RULES.md — 호텔스컴바인·쿠팡 분리 운영 규칙

## 핵심 원칙

트립스팟은 **2개의 어필리에이트 채널**을 사용합니다.

| 채널 | 영역 | 위치 |
|---|---|---|
| 호텔스컴바인 (HotelsCombined) | 호텔 예약 | `/hotels/{slug}/`, 지역 허브, 스팟 상세 |
| 쿠팡 파트너스 | 여행용품 | `/addons/{slug}/` 만 |

**Level A(비자·안전·법규) 페이지에 어떠한 제휴 링크도 연결하지 않는다.**

## 1. 호텔스컴바인 운영

### 1-1. 데이터 흐름

```
Hotel 메타 추가 (data/hotels.js)
   → hotelsCombinedDeepLink 빈 값으로 시작

어드민 (/admin) 에서 딥링크 입력
   → HTTP 응답 200 자동 검증 → affiliateLinkVerified = true

호텔 상세 페이지 렌더 시
   → hotelsCombinedCTA 섹션이 딥링크 표시
   → 빈 값이면 CTA 비표시
```

### 1-2. 딥링크 형식

```
https://www.hotelscombined.com/Hotel/{hotel_id}?aid={affiliate_id}&label={post_slug}
```

- `aid` = 어필리에이트 ID (env: `HOTELSCOMBINED_AFFILIATE_ID`)
- `label` = 포스트 슬러그 (예: `shilla-jeju`) → 클릭 추적

### 1-3. 배치

- 호텔 페이지: CTA **1개** (`hotelsCombinedCTA` 섹션, 큰 버튼)
- 지역 허브: 호텔 카드 5~10개
- 스팟 상세: 주변 호텔 카드 3~5개
- 국가 허브: BEST 호텔 5~10개

### 1-4. 금지

- "최저가 보장", "수수료 없음" 단정
- 호텔스컴바인 트레이드마크 키워드 입찰 (광고 운영 시)
- 한 페이지 7개 초과 CTA

### 1-5. KPI

- 예약 전환율 3% 이상 (못 미치면 어카운트 정지 리스크)
- 클릭만 누적되고 전환 없으면 추적 후 콘텐츠 개선

## 2. 쿠팡 파트너스 운영

### 2-1. 데이터 흐름

```
새 Addon 포스트 생성
   → data/coupang-seed.json 에 제안 제품 추가 (coupang_url: null)

어드민 (/admin) → "coupang-seed.json 일괄 로드" 버튼
   → Supabase coupang_links 테이블에 INSERT (중복 방지)

사용자가 어드민에서 실제 URL 입력
   → coupang_url 필드 채움

Addon 페이지 렌더 시점
   → /api/post-links?slug=xxx 호출
   → PostRenderer 가 매칭되는 링크를 productSlot 또는 ending 위치에 삽입
```

### 2-2. coupang_links 스키마 (Supabase)

```sql
CREATE TABLE coupang_links (
  id BIGSERIAL PRIMARY KEY,
  product_name TEXT NOT NULL,
  category TEXT,
  coupang_url TEXT,
  post_slugs TEXT[] NOT NULL DEFAULT '{}',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### 2-3. 금지

- Addon 외 페이지(국가/지역/스팟/호텔/가이드/테마)에 쿠팡 링크 연결
- Level A(비자·안전) 페이지에 어떠한 제휴 링크
- 한 포스트에 7개 초과 CTA
- 광고 바로 앞뒤 CTA 배치
- 포스트 `.js` 파일에 쿠팡 URL 직접 적기

### 2-4. 고지 의무

- 어필리에이트 링크 근처: "쿠팡 파트너스 활동의 일환으로 수수료를 제공받습니다"
- 푸터: 동일 고지 + 호텔스컴바인 고지

## 3. 광고와 어필리에이트의 분리

| 위치 | AdSense | 호텔스컴바인 | 쿠팡 |
|---|---|---|---|
| 호텔 상세 CTA 영역 위아래 | ❌ | ✓ | ❌ |
| 호텔 상세 본문 H2 사이 | ✓ (자동) | — | ❌ |
| Addon 상세 productSlot | ❌ | ❌ | ✓ |
| Level A 페이지 | ✓ (자동) | ❌ | ❌ |

`PostRenderer.js` 가 자동으로 이 규칙을 적용합니다.
