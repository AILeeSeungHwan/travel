# country-template.md

```js
module.exports = {
  sections: [
    { type: 'intro', html: '...' },
    { type: 'info', title: '비자 안내', html: '...' },
    { type: 'h2', id: 'about', text: '이 나라는 어떤 곳' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'regions', text: '지역별로 가보기' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'themes', text: '인기 여행 테마' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'hotels', text: '추천 호텔 BEST' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'guides', text: '여행 가이드' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'practical', text: '여행 전 알아둘 것' },
    { type: 'body', html: '...' },
    { type: 'faq', items: [
      { q: '...', a: '...' },
    ]},
    { type: 'sources', items: [
      { label: '외교부 해외안전여행', url: 'https://0404.go.kr/', org: '외교부', accessedAt: '2026-04-25' },
    ]},
    { type: 'disclaimer' },
  ]
}
```
