# situation-template.md

```js
module.exports = {
  sections: [
    { type: 'intro', html: '인트로 1단락' },
    { type: 'intro', html: '인트로 2단락' },
    { type: 'intro', html: '인트로 3단락' },
    { type: 'h2', id: 'recommended', text: '추천 목적지' },
    { type: 'h3', id: 'r-1', text: '국가 1' },
    { type: 'body', html: '...' },
    { type: 'h3', id: 'r-2', text: '국가 2' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'budget', text: '예산 가이드' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'hotels', text: '추천 호텔' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'itinerary', text: '추천 일정' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'packing', text: '준비물' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'caution', text: '주의사항' },
    { type: 'body', html: '...' },
    { type: 'faq', items: [] },
    { type: 'sources', items: [] },
    { type: 'disclaimer' },
  ]
}
```
