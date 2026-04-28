# IMAGE_LICENSE.md — 이미지 라이선스 파이프라인

## 핵심 원칙

여행 사이트의 이미지 합법성은 사이트 생존을 좌우합니다. AdSense 계정 단위 정책 위반 시 ambitstock 네트워크 전체에 영향. 무단 이미지 사용은 **가장 큰 리스크**.

## 1. 5개 허용 출처

### 1-A. 한국관광공사 TourAPI 4.0 (국내 콘텐츠 핵심)

- 발급: 공공데이터포털(data.go.kr) → 한국관광공사 TourAPI 신청
- 라이선스: 공공누리 1유형 (출처표시)
- 활용 API:
  - `searchKeyword1` — 키워드 검색
  - `areaBasedList1` — 지역 기반 리스트
  - `detailIntro1` / `detailCommon1` / `detailImage1`
- 캐싱 정책: 메타데이터는 Supabase 저장 + 이미지는 hot-link로 IMG src 사용 (재배포 금지 약관)
- 갱신: 월 1회 자동 (`scripts/sync-tourapi.js` — 미구현, TODO)

### 1-B. Wikimedia Commons

- 라이선스: CC BY / CC BY-SA / Public Domain만 (CC NC, CC ND 제외)
- API: `commons.wikimedia.org/w/api.php`
- 라이선스 자동 검증 후 작가명·라이선스 URL 메타 저장

### 1-C. Unsplash / Pexels API

- 라이선스: 상업 이용 가능, 작가명 표시 권장
- API: Unsplash API (50/h 무료), Pexels API (200/h 무료)

### 1-D. 호텔스컴바인 API hot-link

- **다운로드 절대 금지** — IMG src로만 임베드
- 이미지 URL은 호텔스컴바인 CDN을 직접 가리킴
- 어필리에이트 약관 준수 필수

### 1-E. 자체 OG 이미지

- 호텔명·도시·평점을 SVG로 합성 → PNG 출력
- `scripts/generate-og.js` (TODO)

## 2. 메타데이터 의무

모든 이미지는 다음 메타를 함께 저장 (DMCA 대응):

```js
{
  url:           '...',
  source:        'korea-tour-api'|'wikimedia'|'unsplash'|'pexels'|'hotelscombined-api'|'self-og',
  license:       '공공누리 1유형'|'CC BY-SA 4.0'|'Unsplash License'|'파트너 약관'|'자체',
  credit:        '한국관광공사'|'Photo by John Doe'|'via HotelsCombined'|'tripspot',
  sourceUrl:     'https://...',
  alt:           '한라산 백록담 일출',
}
```

`/image-credits/` 페이지가 이 메타를 자동으로 일괄 표기합니다.

## 3. 호텔별 사진 확보 워크플로우

호텔 상세 페이지를 만들 때 다음 순서로 이미지 확보:

1. **1순위 — 호텔스컴바인 API hot-link**
   - IMG src로 임베드만 가능, 다운로드 X
2. **2순위 (대형 호텔)** — 호텔 공식 PR 키트
   - 호텔 PR 부서에 직접 이메일로 사용 허가 요청
   - 어드민에 "사진 사용 허락 받음" 체크 + 이메일 첨부
3. **3순위** — Wikimedia Commons
   - 호텔 외관 사진이 있는 경우만
4. **4순위** — 자체 OG 이미지
   - 호텔명+도시+평점 합성 (`scripts/generate-og.js`)
5. **금지** — 위 4가지로 못 구하면 그 호텔은 추천 목록에서 제외

## 4. /image-credits/ 페이지

`pages/image-credits.js` 가 모든 spots/hotels 의 gallery 메타를 순회해 출처·라이선스·작가를 표로 표시. 새 콘텐츠 추가 시 자동 갱신.

## 5. DMCA 대응

저작권자가 이미지 사용에 이의를 제기하면:
1. `/contact/` 또는 `cocoboogiwoo@gmail.com` 으로 접수
2. 24시간 이내 해당 이미지 비공개 처리
3. 검토 후 영구 삭제 또는 라이선스 재확인
4. 결과를 저작권자에게 회신
