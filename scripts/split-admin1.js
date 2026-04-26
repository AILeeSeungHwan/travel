// scripts/split-admin1.js
// Natural Earth 10m admin-1 GeoJSON 을 국가별로 분할 + 좌표 정밀도 축소
// 입력: /tmp/admin1_10m.geojson (39MB)
// 출력: public/maps/{slug}.geo.json (각 국가 admin-1 폴리곤만)

const fs = require('fs')
const path = require('path')

const SRC = '/tmp/admin1_10m.geojson'
const OUT_DIR = path.resolve(__dirname, '..', 'public', 'maps')

const ISO_TO_SLUG = {
  KR: 'kr', JP: 'jp', VN: 'vn', TH: 'th', TW: 'tw',
  PH: 'ph', MY: 'my', ID: 'id', CN: 'cn',
  SG: 'sg', HK: 'hk',
  FR: 'fr', IT: 'it', GB: 'gb', DE: 'de', US: 'us',
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
if (!fs.existsSync(SRC)) {
  console.error('[split-admin1] 소스 파일 없음:', SRC)
  console.error('  먼저 다음을 실행: curl -sSL https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson -o /tmp/admin1_10m.geojson')
  process.exit(1)
}

const g = JSON.parse(fs.readFileSync(SRC, 'utf8'))

// 좌표 소수 4자리(약 11m 해상도)로 축소 → 파일 크기 절반 이하
function trimCoord(n) { return Math.round(n * 1e4) / 1e4 }
function trimRing(ring) { return ring.map(([x, y]) => [trimCoord(x), trimCoord(y)]) }
function trimGeom(geom) {
  if (geom.type === 'Polygon') {
    return { type: 'Polygon', coordinates: geom.coordinates.map(trimRing) }
  }
  if (geom.type === 'MultiPolygon') {
    return { type: 'MultiPolygon', coordinates: geom.coordinates.map(rings => rings.map(trimRing)) }
  }
  return geom
}

// 작은 부속 섬(노이즈)은 면적이 매우 작은 ring 을 제거 — 단순화의 보조
function ringArea(ring) {
  let a = 0
  for (let i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    a += (ring[j][0] + ring[i][0]) * (ring[j][1] - ring[i][1])
  }
  return Math.abs(a) / 2
}
const MIN_AREA = 0.001 // 약 11km × 11km 미만 부속 섬 제거 (메인 폴리곤은 유지)
function simplifyGeom(geom) {
  if (geom.type === 'MultiPolygon') {
    const filtered = geom.coordinates.filter(rings => ringArea(rings[0]) >= MIN_AREA)
    return { type: 'MultiPolygon', coordinates: filtered.length > 0 ? filtered : geom.coordinates }
  }
  return geom
}

let total = 0
Object.entries(ISO_TO_SLUG).forEach(([iso, slug]) => {
  const features = g.features
    .filter(f => f.properties.iso_a2 === iso)
    .map(f => ({
      type: 'Feature',
      properties: {
        name: f.properties.name,
        name_ko: f.properties.name_ko,
        iso_3166_2: f.properties.iso_3166_2,
        type: f.properties.type_en || f.properties.type,
        admin: f.properties.admin,
      },
      geometry: simplifyGeom(trimGeom(f.geometry)),
    }))
  if (features.length === 0) {
    console.log(' ', iso, slug.padEnd(3), 'no features')
    return
  }
  const out = { type: 'FeatureCollection', features }
  const filePath = path.join(OUT_DIR, `${slug}.geo.json`)
  fs.writeFileSync(filePath, JSON.stringify(out))
  const size = fs.statSync(filePath).size
  total += size
  console.log('✓', iso, slug.padEnd(3), features.length.toString().padStart(3), '개', '→', (size / 1024).toFixed(0).padStart(5), 'KB')
})
console.log('총', (total / 1024).toFixed(0), 'KB')
