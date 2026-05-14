# TRAVEL_SITE_REBUILD_PROMPT.md
# 트립스팟 전면 품질 개선 마스터 플랜

> 이 파일은 프로젝트 루트에 저장된 리빌드 로드맵입니다.
> 작업 세션마다 진행 상황을 이 파일에 업데이트합니다.

---

## 배경 · 목표

**현황 분석 (2025-05 기준)**
- 포스트 총 93개 (국가 16 / 지역 19 / 스팟 5 / 호텔 19 / 테마 14 / 상황 12 / 가이드 16 / 계산기 8)
- 씬 콘텐츠: 32개 포스트 <800자 (addon 16, tool 8, situation 7, compare 3)
- 클러스터: 스팟 5개 (목표 5개/지역)
- 어필리에이트: 19개 호텔 중 3개만 딥링크 연결
- author 스키마: Organization → Person 교체 필요 (E-E-A-T)

**목표**
1. E-E-A-T 신뢰 신호 강화 (운영자 신원·편집자 Person 스키마)
2. 씬 콘텐츠 전량 리라이트 (5000자 이상)
3. 토픽 클러스터 완성 (지역당 5개 스팟)
4. 호텔 어필리에이트 연결률 100%
5. 썸네일 자동 생성 파이프라인
6. SYSTEM_PROMPT AI 냄새 제거 (운영자 어투·다양한 H2·검증 체계)

---

## Day 1 — E-E-A-T 기반 강화 ✅ (2025-05-14 완료)

### 완료 항목
- [x] `lib/jsonld.js` — `articleSchema.author` Organization → Person 교체
- [x] `lib/jsonld.js` — `productReviewSchema.author` Organization → Person 교체
- [x] `pages/about.js` — 운영자 신원 전면 공개 (Person JSON-LD, 이메일, 편집 철학, E-E-A-T 표)
- [x] `pages/editorial-policy.js` — 7개 섹션 완전 확장 (출처 표, 등급 표, 금지 표현 표, AI 보조 고지)
- [x] `scripts/auto-post.js` SYSTEM_PROMPT — 전면 업그레이드:
  - 운영자 어투 3레벨 (AI 냄새 제거)
  - H2 제목 13패턴 (반복 금지)
  - Intro 5패턴
  - 마무리 callout 5종
  - 외부 출처 인용 요건
  - 16-check 자가 검증 체계
  - 엔티티별 템플릿 확장 (H2 최소 10개, 5000자 기준)
- [x] `scripts/generate-thumbnail.js` — 신규 생성
  - 배경 이미지 다운로드 + 다크 오버레이 합성
  - 그라디언트 폴백 (이미지 없을 때)
  - 1200×630 PNG, 브랜드 배지·사이트명 자동 삽입
- [x] `scripts/auto-post.js` — 썸네일 생성 자동 연결 (모든 슬롯)

---

## Day 2-3 — 씬 콘텐츠 리라이트

### 대상 (32개)
- addon 16개: 캐리어·어댑터·보조배터리·여권지갑·목베개 등
- tool 8개: 예산계산기·비행시간·시차·환율·짐무게·비자체크·일정빌더
- situation 7개: 첫해외·가족·신혼·100만원·럭셔리·1박2일·1주일
- compare 3개: 호텔스컴바인vs부킹닷컴 등

### 기준
- 최소 5000자 (한국어 본문)
- H2 최소 10개
- 공식 출처 2개 이상
- 운영자 어투 Level 2~3 최소 2회

---

## Day 4-5 — 토픽 클러스터 확장

### 목표: 지역당 스팟 5개
현재 스팟 5개 (목표 95개 — 19개 지역 × 5개)

### 우선 지역 (방문자 多)
1. jp-tokyo (도쿄) — 현재 1개 → 5개 목표
2. jp-osaka (오사카) — 0개 → 5개
3. vn-danang (다낭) — 0개 → 5개
4. th-bangkok (방콕) — 0개 → 5개
5. kr-seoul (서울) — 0개 → 5개

---

## Day 6-7 — 호텔 어필리에이트 완성

### 현황
- 19개 호텔 중 딥링크 있는 호텔: 약 3개
- 목표: 19개 전체 딥링크 연결

### 방법
1. 어드민 `/admin/affiliate/` 페이지에서 각 호텔 딥링크 입력
2. 자동 검증 (HTTP 200 확인)
3. 딥링크 없는 호텔은 # → 호텔스컴바인 검색 URL로 대체

---

## Day 8+ — 지속 운영

### 자동 포스팅 (launchd)
- morning(7시): 트렌드 2개 + 큐 1개
- noon(12시): 큐 2개 + addon 2개
- evening(18시): 고단가 3개 → prebuild + commit + push

### 모니터링
- Vercel 빌드 실패 즉시 확인
- 씬 포스트 카운터: 매주 줄어드는지 확인
- 호텔 어필리에이트 클릭률: 3% 이상 유지

---

## 참조 파일

| 파일 | 내용 |
|---|---|
| `CLAUDE.md` | 이 프로젝트 전용 규칙 |
| `MEMORY.md` | 현재 상태·진행 로그 |
| `docs/TRAVEL_ETHICS.md` | 여행 도메인 윤리·이미지 라이선스 |
| `docs/DATA_SCHEMA.md` | 8개 엔티티 스키마 |
| `scripts/auto-post.js` | 자동 포스팅 엔진 |
| `scripts/generate-thumbnail.js` | OG 썸네일 생성 |
| `lib/jsonld.js` | 구조화 데이터 빌더 |
