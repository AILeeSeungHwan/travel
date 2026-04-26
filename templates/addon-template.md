# addon-template.md

```js
module.exports = {
  sections: [
    { type: 'intro', html: '...' },
    { type: 'h2', id: 'who', text: '어떤 사람에게 필요한가' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'features', text: '핵심 특징·재질' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'usage', text: '사용법 / 시나리오' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'caution', text: '주의사항 (수하물 한도)' },
    { type: 'body', html: '...' },
    { type: 'productSlot', productKey: 'travel-luggage' },
    { type: 'faq', items: [] },
    { type: 'disclaimer' },
  ]
}
```
