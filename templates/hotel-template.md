# hotel-template.md

```js
module.exports = {
  sections: [
    { type: 'image', src: '...', alt: '...', imageSource: 'hotelscombined-api', imageLicense: '파트너 약관', imageCredit: 'via HotelsCombined' },
    { type: 'intro', html: '위치·등급·평점·가격대·타겟' },
    { type: 'h2', id: 'standout', text: '이 호텔의 차별점' },
    { type: 'body', html: '<ul>...</ul>' },
    { type: 'h2', id: 'rooms', text: '객실 타입' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'amenities', text: '시설·편의' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'who', text: '이런 분에게 추천' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'location', text: '위치와 주변' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'access', text: '공항에서 가는 법' },
    { type: 'body', html: '...' },
    { type: 'h2', id: 'nearby', text: '주변 추천 스팟' },
    { type: 'body', html: '...' },
    { type: 'hotelsCombinedCTA',
      text: '호텔스컴바인에서 최저가 보기 →',
      subText: '...',
      href: 'https://www.hotelscombined.com/Hotel/{id}?aid={aff}&label={slug}' },
    { type: 'warning', title: '예약 전 알아두세요', html: '체크인·반려동물·취소 정책은 호텔별로 다릅니다.' },
    { type: 'faq', items: [] },
    { type: 'sources', items: [
      { label: '호텔스컴바인', url: 'https://www.hotelscombined.com/', org: 'HotelsCombined' },
    ]},
    { type: 'disclaimer' },
  ]
}
```
