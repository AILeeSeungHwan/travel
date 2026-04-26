# WRITE_ADDON.md — 여행용품 포스트 작성 규칙

## 분량 / 구조

- 본문 1,500자 이상 (Level C)

## 필수 섹션

1. intro
2. h2 "어떤 사람에게 필요한가"
3. h2 "핵심 특징·재질"
4. h2 "사용법 / 시나리오"
5. h2 "주의사항 (수하물 한도·기내반입)"
6. **productSlot** — `productKey` = 슬러그 정규화 형태
7. faq
8. disclaimer

## 쿠팡 링크

- 본문에 직접 적지 않는다
- `data/coupang-seed.json` 에 등록 → 어드민에서 URL 입력
- 한 포스트 7개 초과 CTA 금지
