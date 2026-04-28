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
