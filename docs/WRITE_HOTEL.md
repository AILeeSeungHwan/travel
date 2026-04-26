# WRITE_HOTEL.md — 호텔 포스트 작성 규칙 (수익 핵심)

## 분량 / 구조

- 본문 1,800자 이상
- 갤러리 5~10장 (모두 라이선스 메타 포함)
- 호텔스컴바인 CTA 1개 (큰 버튼)

## 필수 섹션 (순서)

1. image (갤러리 1장)
2. intro — 위치·등급·평점·가격대·타겟
3. h2 "이 호텔의 차별점" (3~5개)
4. h2 "객실 타입"
5. h2 "시설·편의" — 표 또는 아이콘 그리드
6. h2 "이런 분에게 추천"
7. h2 "위치와 주변" — 좌표·주변 스팟 거리표
8. h2 "공항에서 가는 법"
9. h2 "주변 추천 스팟" — nearbySpotSlugs 카드
10. **hotelsCombinedCTA** — 큰 버튼, 제휴 고지 병기
11. warning "예약 전 알아두세요" — 체크인·반려동물·취소
12. faq
13. sources (호텔스컴바인 + 호텔 공식)
14. disclaimer

## 금지

- "최저가 보장", "수수료 없음" 등 단정
- 갤러리 사진 다운로드 (호텔스컴바인 hot-link 또는 PR 키트만)
- CTA 영역 위아래에 AdSense 광고 (PostRenderer 자동 처리)

## 검증

- 모든 gallery 항목에 source/license/credit 입력 (없으면 빌드 실패시키기 추천)
- `imageVerified: true` 가 false면 어드민에서 보류
- `affiliateLinkVerified: true` 가 false면 CTA 미표시 (현재 폴백 미구현 — 본문 작성 시점에 처리)
