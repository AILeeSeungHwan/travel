# CLAUDE-AUTO.md — tripspot(travel) 자동 포스팅 경량 규칙

> 자동 포스팅 세션에서만 사용. 수동 작업은 CLAUDE.md 참조.
> 마지막 업데이트: 2026-05-18

## ★ 포스팅 주제 선정 — 인사이트 추천 최우선

포스팅 시작 전 **반드시** 프롬프트 앞에 합쳐진 `[★ 오늘의 인사이트 추천 — 최우선 활용]` 블록을 확인하라.

- 인사이트 추천이 있으면:
  - `recommendations[].contentHint` 를 **1순위 주제** 후보로 사용
  - `priority: 'P1'` 항목부터 먼저 작성
  - `keyword` 필드를 destination·H2·태그에 자연스럽게 반영
- 자동 스크립트(`scripts/run-autopost.sh`)가 `/Users/lee/bin/insight-hint.sh travel` 결과를 `INSIGHT_HINT` 환경변수로 export
- `scripts/auto-post.js`가 `process.env.INSIGHT_HINT`를 systemPrompt 다음에 prepend

## 사이트 컨텍스트

- 도메인: tripspot (여행지·테마·여행 가이드)
- trip-type 분류: guide / theme / situation / addon / highRPM
- 발행 빈도: morning·noon·evening 3회
- 인사이트 활용 책임: travel 사이트 갭 키워드 우선 선점

## 필수 체크

- 같은 destination을 같은 trip-type으로 중복 발행 금지
- 외부 출처: TourAPI · 한국관광공사 · Unsplash(이미지 라이선스)
- 사진 라이선스·출처 명시
- 본문 분량 2,500자 이상
- 면책: "여행 정보는 시점에 따라 변동 가능"

## 검증 & 커밋

1. 빌드 검증
2. 이미지 라이선스 확인
3. `git add` → `git commit` → `git push`
