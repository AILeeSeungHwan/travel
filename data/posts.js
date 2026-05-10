// data/posts.js — 모든 포스트의 단일 인덱스 (RSS·홈 최근 업데이트용)
const countries  = require('./countries')
const regions    = require('./regions')
const spots      = require('./spots')
const hotels     = require('./hotels')
const themes     = require('./themes')
const guides     = require('./guides')
const situations = require('./situations')
const tools      = require('./tools')
const compares   = require('./compares')
const addons     = require('./addons')

const posts = [
  ...countries.map(p => ({ ...p, category: 'country', categoryLabel: '국가', url: `/countries/${p.slug}/` })),
  ...regions.map(p => ({ ...p, category: 'region', categoryLabel: '지역', url: `/countries/${p.countrySlug}/regions/${p.slug}/` })),
  ...spots.map(p => ({ ...p, category: 'spot', categoryLabel: '스팟', url: `/countries/${p.countrySlug}/regions/${p.regionSlug}/spots/${p.slug}/` })),
  ...hotels.map(p => ({ ...p, category: 'hotel', categoryLabel: '호텔', url: `/hotels/${p.slug}/` })),
  ...themes.map(p => ({ ...p, category: 'theme', categoryLabel: '테마', url: `/themes/${p.slug}/` })),
  ...guides.map(p => ({ ...p, category: 'guide', categoryLabel: '가이드', url: `/guides/${p.slug}/` })),
  ...situations.map(p => ({ ...p, category: 'situation', categoryLabel: '상황별', url: `/situations/${p.slug}/` })),
  ...tools.map(p => ({ ...p, category: 'tool', categoryLabel: '계산기', url: `/tools/${p.slug}/` })),
  ...compares.map(p => ({ ...p, category: 'compare', categoryLabel: '비교', url: `/compare/${p.slug}/` })),
  ...addons.map(p => ({ ...p, category: 'addon', categoryLabel: '여행용품', url: `/addons/${p.slug}/` })),
].filter(p => p != null && p.slug)  // sparse array / undefined 방어 (이중 쉼표 등)

module.exports = posts
