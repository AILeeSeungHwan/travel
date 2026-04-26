# guide-template.md

```js
module.exports = {
  sections: [
    // Level A 인 경우
    { type: 'risk', title: '출국 전 재확인 필수', html: '비자·여행경보는 변경 빈도가 매우 높습니다. 외교부 영사민원24에서 재확인하세요.' },
    { type: 'intro', html: '...' },
    { type: 'h2', id: 'summary', text: '핵심 요약' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'documents', text: '필요 서류' },
    { type: 'body', html: '<ul>...</ul>' },
    { type: 'h2', id: 'process', text: '신청 절차' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'cost', text: '비용' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'validity', text: '유효기간 / 갱신' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'rejection', text: '거부 사유 / 대응' },
    { type: 'body', html: '...' },
    { type: 'faq', items: [] },
    { type: 'sources', items: [
      { label: '외교부 영사민원24', url: 'https://www.0404.go.kr/', org: '외교부' },
    ]},
    { type: 'disclaimer' },
  ]
}
```
