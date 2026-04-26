// scripts/generate-sitemap.js — 분할 sitemap + 인덱스 생성 (travelmoa)
const fs = require('fs')
const path = require('path')

const countries  = require('../data/countries')
const regions    = require('../data/regions')
const spots      = require('../data/spots')
const hotels     = require('../data/hotels')
const themes     = require('../data/themes')
const guides     = require('../data/guides')
const situations = require('../data/situations')
const tools      = require('../data/tools')
const compares   = require('../data/compares')
const addons     = require('../data/addons')

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://travelmoa.ambitstock.com'
const now = new Date().toISOString().slice(0, 10)

function url(loc, lastmod, priority, changefreq) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod || now}</lastmod>\n    <changefreq>${changefreq || 'weekly'}</changefreq>\n    <priority>${priority || '0.8'}</priority>\n  </url>`
}
function urlset(entries) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`
}
function sitemap(name, entries) {
  fs.writeFileSync(path.join(__dirname, '..', 'public', name), urlset(entries))
  console.log('✓', name, '(' + entries.length + ' urls)')
}

const coreRoutes = [
  ['/',                  '1.0', 'daily'],
  ['/countries/',        '0.9', 'daily'],
  ['/hotels/',           '0.9', 'daily'],
  ['/themes/',           '0.8', 'weekly'],
  ['/situations/',       '0.8', 'weekly'],
  ['/guides/',           '0.8', 'weekly'],
  ['/tools/',            '0.8', 'weekly'],
  ['/compare/',          '0.7', 'weekly'],
  ['/addons/',           '0.6', 'weekly'],
  ['/about/',            '0.3', 'monthly'],
  ['/editorial-policy/', '0.3', 'monthly'],
  ['/disclaimer/',       '0.3', 'monthly'],
  ['/image-credits/',    '0.4', 'weekly'],
  ['/privacy/',          '0.3', 'monthly'],
  ['/terms/',            '0.3', 'monthly'],
  ['/contact/',          '0.3', 'monthly'],
]

sitemap('sitemap-core.xml',       coreRoutes.map(([p, pr, cf]) => url(SITE + p, now, pr, cf)))
sitemap('sitemap-countries.xml',  countries.map(p => url(`${SITE}/countries/${p.slug}/`, p.updatedAt, '0.9', 'weekly')))
sitemap('sitemap-regions.xml',    regions.map(p => url(`${SITE}/countries/${p.countrySlug}/regions/${p.slug}/`, p.updatedAt, '0.9', 'weekly')))
sitemap('sitemap-spots.xml',      spots.map(p => url(`${SITE}/countries/${p.countrySlug}/regions/${p.regionSlug}/spots/${p.slug}/`, p.updatedAt, '0.8', 'monthly')))
sitemap('sitemap-hotels.xml',     hotels.map(p => url(`${SITE}/hotels/${p.slug}/`, p.updatedAt, '0.9', 'weekly')))
sitemap('sitemap-themes.xml',     themes.map(p => url(`${SITE}/themes/${p.slug}/`, p.updatedAt, '0.8', 'monthly')))
sitemap('sitemap-situations.xml', situations.map(p => url(`${SITE}/situations/${p.slug}/`, p.updatedAt, '0.7', 'monthly')))
sitemap('sitemap-guides.xml',     guides.map(p => url(`${SITE}/guides/${p.slug}/`, p.updatedAt, '0.8', 'monthly')))
sitemap('sitemap-tools.xml',      tools.map(p => url(`${SITE}/tools/${p.slug}/`, p.updatedAt, '0.7', 'monthly')))
sitemap('sitemap-compares.xml',   compares.map(p => url(`${SITE}/compare/${p.slug}/`, p.updatedAt, '0.7', 'weekly')))
sitemap('sitemap-addons.xml',     addons.map(p => url(`${SITE}/addons/${p.slug}/`, p.updatedAt, '0.5', 'monthly')))

const allPosts = [
  ...countries.map(p => ({ ...p, path: `countries/${p.slug}` })),
  ...regions.map(p => ({ ...p, path: `countries/${p.countrySlug}/regions/${p.slug}` })),
  ...spots.map(p => ({ ...p, path: `countries/${p.countrySlug}/regions/${p.regionSlug}/spots/${p.slug}` })),
  ...hotels.map(p => ({ ...p, path: `hotels/${p.slug}` })),
  ...themes.map(p => ({ ...p, path: `themes/${p.slug}` })),
  ...situations.map(p => ({ ...p, path: `situations/${p.slug}` })),
  ...guides.map(p => ({ ...p, path: `guides/${p.slug}` })),
  ...tools.map(p => ({ ...p, path: `tools/${p.slug}` })),
  ...compares.map(p => ({ ...p, path: `compare/${p.slug}` })),
]
const cutoff = new Date(Date.now() - 30*24*60*60*1000).toISOString().slice(0, 10)
const recent = allPosts.filter(p => (p.updatedAt || '0000-00-00') >= cutoff)
sitemap('sitemap-news.xml', recent.map(p => url(`${SITE}/${p.path}/`, p.updatedAt, '0.9', 'daily')))

const sitemaps = [
  'sitemap-core', 'sitemap-countries', 'sitemap-regions', 'sitemap-spots',
  'sitemap-hotels', 'sitemap-themes', 'sitemap-situations', 'sitemap-guides',
  'sitemap-tools', 'sitemap-compares', 'sitemap-addons', 'sitemap-news',
]
const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(n => `  <sitemap>\n    <loc>${SITE}/${n}.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`).join('\n')}
</sitemapindex>
`
fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), indexXml)
console.log('✓ sitemap.xml (index of', sitemaps.length, 'sitemaps)')
