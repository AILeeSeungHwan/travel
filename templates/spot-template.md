# spot-template.md

```js
module.exports = {
  sections: [
    { type: 'image',
      src: '/images/...',
      alt: '...',
      imageSource: 'korea-tour-api'|'wikimedia'|'unsplash'|'pexels',
      imageLicense: '...',
      imageCredit: '...',
      imageSourceUrl: '...' },
    { type: 'intro', html: '위치·입장료·소요시간·베스트 시즌' },
    { type: 'h2', id: 'about', text: '이곳은 어떤 곳' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'highlights', text: '하이라이트' },
    { type: 'body', html: '<ul><li>...</li></ul>' },
    { type: 'h2', id: 'tips', text: '방문 팁' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'access', text: '가는 방법' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'nearby', text: '주변 함께 가볼 곳' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'nearby-hotels', text: '근처 추천 호텔' },
    { type: 'body', html: '...' },
    { type: 'warning', title: '주의사항', html: '...' },
    { type: 'faq', items: [] },
    { type: 'sources', items: [] },
    { type: 'disclaimer' },
  ]
}
```
