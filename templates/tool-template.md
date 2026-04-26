# tool-template.md

```js
module.exports = {
  // 위젯은 pages/tools/[slug].js 가 별도 처리. 본 sections 는 가이드 본문.
  sections: [
    { type: 'intro', html: '...' },
    { type: 'info', title: '계산기 위젯', html: '입력 → 결과 자동 계산' },
    { type: 'h2', id: 'how', text: '어떻게 사용하나요' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'result', text: '결과 해석' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'tips', text: '활용 팁' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'limit', text: '계산기의 한계' },
    { type: 'body', html: '...' },
    { type: 'faq', items: [] },
    { type: 'sources', items: [] },
    { type: 'disclaimer' },
  ]
}
```
