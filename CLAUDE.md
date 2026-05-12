# 트립스팟 (tripspot) — CLAUDE.md

> 세션 역할: tripspot 전담. 콘텐츠 생성·유지보수·페이지 수정만 수행하며, 다른 사이트(insurance·health·car·card 등)는 절대 건드리지 않는다.

## 1. 프로젝트 개요

**도메인**: 여행 (Tripspot)
**스택**: Next.js 14 (pages router) + Supabase + Vercel
**브랜드**: 트립스팟 / `tripspot.ambitstock.com` / 컬러 `#0EA5E9`(sky) → `#14B8A6`(teal)
**수익 모델**: AdSense (주력) + 호텔스컴바인 어필리에이트(전환 수익) + 쿠팡 파트너스(보조 — 여행용품 카테고리 한정)
**E-E-A-T 등급**:
- Level A — 비자·출입국·여행자보험·외교부 여행경보 (가장 엄격)
- Level B — 호텔·항공·교통·환율·면세
- Level C — 여행 후기·추천·문화 (자체 큐레이션 가능)

## 2. 항상 로드

- `CLAUDE.md` (이 파일)
- `MEMORY.md` — 현재 상태, 포스트 카운트, 진행 로그
- `docs/TRAVEL_ETHICS.md` — 여행 도메인 윤리·이미지 라이선스·면책

## 3. 필요 시 로드

| 파일 | 용도 |
|---|---|
| `docs/DATA_SCHEMA.md` | 8개 엔티티 스키마 |
| `docs/SEO_META.md` | 메타·JSON-LD·내부링크 규칙 |
| `docs/COUPANG_RULES.md` | 호텔스컴바인·쿠팡 파트너스 분리 운영 규칙 |
| `docs/IMAGE_LICENSE.md` | 이미지 라이선스 파이프라인 (TourAPI/Wikimedia/Unsplash/Pexels/호텔스컴바인 hot-link) |
| `docs/WRITE_{TYPE}.md` | 포스트 타입별 작성 규칙 |
| `templates/{type}-template.md` | 복붙용 섹션 배열 스켈레톤 |
| `data/{entity}.js` | 신규 slug 충돌 체크 |

## 4. 8개 엔티티

```
Country (국가)        — 1단계 허브
  └─ Region (지역)    — 2단계 허브 (province/state/city/island)
       └─ Spot (스팟) — 3단계 상세

Hotel (호텔)          — 별도 슬롯 (수익 핵심)
Theme (테마)          — 호캉스/가족/효도/풀빌라/신혼/온천/비치/미식/문화/쇼핑/워케이션
Guide (가이드)        — 비자/안전/교통/통화/언어/에티켓/첫 해외여행
Situation (상황별)    — 첫 해외/가족/신혼/100만원/럭셔리/1박2일/1주일
Tool (계산기)         — 예산/비행시간/시차/환율/짐 무게/비자 체크/일정 빌더
Addon (여행용품)      — 캐리어/어댑터/보조배터리/여권지갑/목베개/압축팩 (쿠팡 파트너스)
```

## 5. URL 구조

```
/countries/                                      국가 허브
/countries/{c}/                                  국가 상세
/countries/{c}/regions/{r}/                      지역 상세
/countries/{c}/regions/{r}/spots/{s}/            스팟 상세
/hotels/                                         호텔 허브
/hotels/{slug}/                                  호텔 상세 (수익 핵심)
/themes/{slug}/                                  테마
/situations/{slug}/                              상황별
/guides/{slug}/                                  가이드
/tools/{slug}/                                   계산기
/compare/{slug}/                                 비교
/addons/{slug}/                                  여행용품 (쿠팡)
```

## 6. 작업 원칙

### 6-1. 이미지 합법성 (가장 중요)
- 호텔/여행지 사진 외부 다운로드 절대 금지
- 5개 출처 한정: 한국관광공사 TourAPI / Wikimedia Commons / Unsplash·Pexels API / 호텔스컴바인 API hot-link / 자체 OG
- 모든 이미지 메타: `imageSource`, `imageLicense`, `imageCredit` 동시 저장 (DMCA 대응)
- 사진을 못 구하면 그 페이지를 발행하지 않는다

### 6-2. 호텔스컴바인 어필리에이트
- 1개 어필리에이트만 사용 (HotelsCombined CJ 또는 Travelpayouts)
- 호텔 페이지 CTA 1~3개 / 지역 허브 카드 5~10개 / 스팟 상세 3~5개
- 어드민에서 딥링크 입력, 동작 자동 검증 (HTTP 응답 확인)
- KPI: 클릭 대비 예약 전환 3% 이상 유지 (못 미치면 어카운트 정지 리스크)

### 6-3. 단정 표현 금지
- "최저가 보장", "수수료 없음", "100% 안전" 금지
- 호텔스컴바인 트레이드마크 키워드 입찰 금지

### 6-4. 광고 규칙 (자동 삽입 — `components/PostRenderer.js`)
- 포스트 본문에 `type: 'ad'` 섹션을 쓰지 않는다 — 렌더러가 H2 인덱스로 자동 삽입
- 호텔 페이지의 호텔스컴바인 CTA 영역 위아래는 AdSense 미배치 (전환 방해 X)

### 6-5. 쿠팡 분리
- 본문에 쿠팡 URL 직접 적기 금지
- `data/coupang-seed.json` → 어드민에서 일괄 로드 → 어드민에서 URL 입력
- Level A(비자·안전) 페이지에 쿠팡 링크 절대 연결 X

## 7. 새 포스트 생성 후 검증

1. `node --check posts/{entity}/{slug}.js`
2. `data/{entity}.js` 메타 추가 (slug 충돌 체크)
3. 관련 엔티티의 `related*` 배열 업데이트
4. 이미지가 있으면 `data/{entity}.js` 의 gallery 메타 (source/license/credit) 동시 입력
5. 쿠팡 매칭이 가능하면 `data/coupang-seed.json` 추가
6. `MEMORY.md` 진행 로그 + 포스트 카운트 업데이트

## 7-1. data/hotels.js 필수 필드 규칙 (누락 시 빌드 오류)

`data/hotels.js`에 호텔을 추가할 때 **아래 필드를 반드시 포함**한다.
누락 시 `getStaticProps`에서 `undefined` 직렬화 오류 또는 `Cannot read properties of undefined` 런타임 오류 발생.

**필수 필드 체크리스트**:
```js
{
  id,           // 'H001' 형식, 중복 금지
  slug,         // URL 키, 중복 금지
  countrySlug,  // data/countries.js slug 값
  regionSlug,   // data/regions.js slug 값
  hotelName,    // 한국어 호텔명
  hotelNameEn,  // 영문 호텔명
  title,        // ★ SEO 제목 (누락 시 국가·지역 페이지 빌드 오류)
  description,  // ★ SEO 설명 (누락 시 undefined 직렬화 오류)
  summary,      // ★ 카드 요약 1줄 (누락 시 undefined 직렬화 오류)
  hotelClass,   // '5성' 등
  hotelType,    // '리조트' | '비즈니스·럭셔리' 등
  starRating,   // 숫자
  guestRating,  // 숫자
  priceRange,   // 문자열
  amenities,    // 배열
  roomTypes,    // 배열
  whoIsItFor,   // 문자열
  standoutFeatures, // 배열
  nearestAirport,   // 문자열
  distanceFromAirport, // 문자열
  address,      // 상세 주소
  lat, lng,     // 위경도 숫자
  iso2,         // 국가코드 2자리
  gallery,      // [{url, source, license, credit, alt}] — placeholder도 필수
  hotelsCombinedDeepLink, // 빈 문자열 허용, undefined 불가
  hotelsCombinedHotelId,  // 빈 문자열 허용
  affiliateLinkVerified,  // boolean
  imageVerified,          // boolean
  ymylLevel,    // 'B'
  tags,         // 배열
  publishedAt,  // 'YYYY-MM-DD'
  updatedAt,    // 'YYYY-MM-DD'
}
```

**검증 명령** (추가 후 반드시 실행):
```bash
node --check data/hotels.js
node -e "const h=require('./data/hotels'); h.forEach(x=>{ ['title','description','summary','gallery','hotelsCombinedDeepLink'].forEach(f=>{ if(x[f]===undefined) throw new Error(x.slug+' missing: '+f) }) }); console.log('OK')"
```

**페이지 방어 원칙**: `getStaticProps`에서 호텔 객체를 props로 넘길 때 반드시 `h.title ?? h.hotelName ?? null` 패턴을 사용하고 `undefined`를 그대로 전달하지 않는다.

## 7-2. `TypeError: Cannot read properties of undefined` 방지 규칙

**원인**: 포스트·데이터 파일에 필드를 추가할 때 `updatedAt`, `publishedAt`, `summary` 등 필수 필드를 누락하면, 렌더러나 fallbackSections에서 `.속성` 참조 시 런타임 오류 발생.

**모든 엔티티(hotels/spots/regions/countries/guides/themes) 공통 점검 명령** — 신규 항목 추가 후 반드시 실행:
```bash
node -e "
const entities = [
  { name:'hotels',   file:'./data/hotels.js',   fields:['title','description','summary','updatedAt','publishedAt','gallery','hotelsCombinedDeepLink'] },
  { name:'spots',    file:'./data/spots.js',     fields:['title','description','updatedAt','publishedAt'] },
  { name:'regions',  file:'./data/regions.js',   fields:['regionName','updatedAt','publishedAt'] },
  { name:'guides',   file:'./data/guides.js',    fields:['title','description','updatedAt','publishedAt'] },
  { name:'themes',   file:'./data/themes.js',    fields:['title','description','updatedAt','publishedAt'] },
];
let ok = true;
entities.forEach(({name,file,fields})=>{
  let data;
  try { data = require(file); } catch(e){ return; }
  data.forEach(x=>{
    fields.forEach(f=>{
      if(x[f]===undefined){ console.error(name+' '+x.slug+': missing '+f); ok=false; }
    });
  });
});
if(ok) console.log('OK — 모든 필드 정상');
"
```

**렌더러 방어 코딩 원칙** (페이지 파일 수정 시 적용):
- `meta.updatedAt` 참조 전 반드시 `?? meta.publishedAt ?? ''` 폴백 사용
- `meta.summary`, `meta.address` 등 문자열 필드는 `?? ''` 폴백
- 배열 필드(`amenities`, `roomTypes`, `standoutFeatures`)는 `|| []` 폴백
- `country?.countryName`, `region?.regionName` — 옵셔널 체이닝 필수

**generate-sitemap.js 방어**: `allPosts` 배열은 반드시 `.filter(p => p != null && p.slug)` 후처리. sparse array(이중 쉼표 `,,`)나 auto-post가 undefined 삽입 시 크래시 방지.

**data 파일에 이중 쉼표 `,,` 절대 금지** — sparse array 생성 원인. auto-post의 `appendToDataFile`이 항목 추가 후 생성되는 JS를 `node --check data/{file}.js`로 반드시 검증.

**이중 쉼표 근본 원인**: data 파일의 마지막 항목에 trailing comma(`,`)가 있을 때 `appendToDataFile`이 추가로 `,\n`을 붙이면 `},,` 발생. `appendToDataFile`은 내부적으로 `/,\s*$/` 패턴으로 trailing comma를 감지해 중복 추가를 방지한다.

**getStaticProps 방어 패턴** (모든 동적 라우트 페이지에 적용):
```js
// 이중쉼표로 인한 undefined 요소가 있어도 .find()/.filter() 내부에서 크래시 방지
const meta = hotels.filter(h => h?.slug).find(h => h.slug === params.slug)
const region = regions.filter(r => r?.slug && r?.countrySlug)
  .find(r => r.countrySlug === meta.countrySlug && r.slug === meta.regionSlug) ?? null
const nearbySpots = spots.filter(s => s?.slug && s.regionSlug === meta.regionSlug ...) ...
```

**gallery 필드는 반드시 실제 배열** — `gallery: '[]'`(문자열) 금지, `gallery: []`(배열)만 허용. 문자열이면 `.map()` 호출 시 TypeError. `lib/images.js`·`pages/hotels/[slug].js`·`pages/image-credits.js` 모두 `Array.isArray(h.gallery)` 방어 적용 완료.

**배열 이중쉼표 점검 명령** (데이터 파일 변경 후 즉시 실행):
```bash
node -e "
['hotels','regions','spots','guides','themes','situations','compares','addons','tools'].forEach(n=>{
  const d=require('./data/'+n+'.js');
  d.forEach((x,i)=>{ if(x==null) throw new Error(n+'['+i+']=undefined 이중쉼표!') })
  console.log(n, d.length,'OK')
})
"
```

## 7-3. 자동 포스팅(auto-post.js) 규칙

**커밋·푸시는 하루 1회(evening 슬롯)에만**:
- morning(7시): 포스트 파일만 생성, prebuild/push 없음
- noon(12시): 포스트 파일만 생성, prebuild/push 없음
- evening(18시): 하루 전체 생성분 + sitemap 갱신 → 커밋 → 푸시 1회

**appendToDataFile 필수 필드 자동 검증** (auto-post.js 내장):
- `REQUIRED_FIELDS` 맵에 엔티티별 필수 필드 정의
- 누락 필드는 `DEFAULT_FIELDS`로 자동 채움 (name/icon/category 등)
- 누락 필드 경고 로그: `⚠ {entity}/{slug} 누락 필드: ...`

**auto-post가 data 파일에 항목 추가 후 반드시 실행**:
```bash
node --check data/{entity}s.js   # 문법 오류(이중 쉼표 등) 즉시 발견
```

## 8. 배포 전 체크

```bash
npm run build                              # 빌드 성공 확인
node scripts/generate-sitemap.js           # 사이트맵 갱신
node scripts/generate-feeds.js             # RSS·Atom 갱신
file public/favicon.ico                    # "MS Windows icon resource - 3 icons" 확인
grep -r "최저가 보장\|수수료 없음\|100% 안전" posts/   # 단정 표현 검색 (없어야 함)
```

## 9. 콜드 스타트 재현성

새 세션이 본 프롬프트(`NEW_SITE_PROMPT.md`·`TRAVEL_SITE_PROMPT.md`) 를 다시 읽지 않아도 본 `CLAUDE.md` + `MEMORY.md` + `docs/TRAVEL_ETHICS.md` 만으로 동일 품질 작업이 이어져야 한다.

## 10. 상위 규칙

본 프로젝트는 다음 상위 규칙도 함께 따른다:
- `~/.claude/CLAUDE.md` — 글로벌 규칙 (한국 SEO 풀세트, favicon 다음 호환, OG/sitemap/RSS, 검증 메타)
- `Project/CLAUDE.md` — ambitstock 네트워크 공통 규칙
- `Project/insurance/insurance/NEW_SITE_PROMPT.md` §2 — 모든 사이트 공통 (포스팅 디테일·광고·쿠팡 플로우·MD 구조)
