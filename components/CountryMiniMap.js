// 국가 허브용 admin-1 지도 (A안 — react-simple-maps + 국가별 admin-1 GeoJSON)
// /maps/{country.slug}.geo.json 을 로드 → 모든 도/현/주 폴리곤 표시
// 우리 콘텐츠가 있는 region 의 adminName 과 일치하는 폴리곤만 teal 강조 + 클릭 → 지역 허브

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'

// 각 국가의 (rotate, scale) — 뷰포트 500×360에 admin-1 전체가 들어가도록 설정
const PROJECTION_BY_SLUG = {
  kr: { rotate: [-127.8, -36, 0], scale: 3200 },   // 제주~한반도 북단 모두 포함
  jp: { rotate: [-138, -37, 0],   scale: 1300 },
  vn: { rotate: [-108, -16, 0],   scale: 1800 },
  th: { rotate: [-101, -15, 0],   scale: 1700 },
  tw: { rotate: [-121, -23.7, 0], scale: 4200 },
  cn: { rotate: [-104, -35, 0],   scale: 650 },
  ph: { rotate: [-122, -12, 0],   scale: 1400 },
  my: { rotate: [-110, -3, 0],    scale: 1300 },
  id: { rotate: [-118, 2, 0],     scale: 800 },
  sg: { rotate: [-103.8, -1.35, 0], scale: 60000 },
  hk: { rotate: [-114.15, -22.35, 0], scale: 40000 },
  fr: { rotate: [-2, -47, 0],     scale: 2000 },
  it: { rotate: [-12, -42, 0],    scale: 1700 },
  gb: { rotate: [4, -54, 0],      scale: 1900 },
  de: { rotate: [-10, -51, 0],    scale: 2200 },
  us: { rotate: [97, -38, 0],     scale: 600 },
}

function normalize(s) {
  if (!s) return ''
  return String(s).toLowerCase()
    .replace(/[ōōÔô]/g, 'o').replace(/[īī]/g, 'i').replace(/[ā]/g, 'a').replace(/[ūū]/g, 'u').replace(/[ē]/g, 'e')
    .replace(/[ạáảãà]/gi, 'a').replace(/[ẵặắằ]/gi, 'a').replace(/[âấầẩẫậ]/gi, 'a')
    .replace(/[ếềểễệéẹẻẽè]/gi, 'e').replace(/[íìỉĩị]/gi, 'i').replace(/[ốồổỗộóòỏõọơớờởỡợ]/gi, 'o')
    .replace(/[ứừửữựúùủũụư]/gi, 'u').replace(/[ýỳỷỹỵ]/gi, 'y').replace(/[đ]/gi, 'd')
    .replace(/[\s\-·]/g, '')
}

export default function CountryMiniMap({ country, regions = [] }) {
  const router = useRouter()
  const [geo, setGeo] = useState(null)
  const [hover, setHover] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/maps/${country.slug}.geo.json`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (!cancelled) setGeo(data) })
      .catch(() => {})
    return () => { cancelled = true }
  }, [country.slug])

  const proj = PROJECTION_BY_SLUG[country.slug] || { rotate: [-110, -30, 0], scale: 800 }

  // adminName → region 매핑 (정규화 비교)
  const adminToRegion = {}
  regions.forEach(r => {
    if (!r.adminName) return
    adminToRegion[normalize(r.adminName)] = r
  })

  // adminName 이 없는 (도시·섬 등 admin-1 미일치) 지역은 좌표 마커로 폴백
  const pointMarkers = regions.filter(r => !r.adminName && r.centerLat && r.centerLng)

  if (!geo) {
    return (
      <div style={{ height: 280, background:'#F8FAFC', border:'1px solid #E2E8F0', borderRadius:12,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:13, color:'#64748B', marginBottom:18 }}>
        🗺️ {country.countryName} 지역 지도 로딩 중…
      </div>
    )
  }

  return (
    <div style={{ background:'#FFFFFF', border:'1px solid #E2E8F0', borderRadius:12, padding:'12px 14px', marginBottom:18, position:'relative' }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ rotate: proj.rotate, scale: proj.scale }}
        width={500} height={360}
        style={{ width:'100%', height:'auto' }}
      >
       <ZoomableGroup minZoom={0.8} maxZoom={6}>
        <Geographies geography={geo}>
          {({ geographies }) => geographies.map(g => {
            const adminKey = normalize(g.properties.name)
            const matched = adminToRegion[adminKey]
            const has = !!matched
            return (
              <Geography
                key={g.rsmKey}
                geography={g}
                onMouseEnter={(e) => setHover({
                  name: g.properties.name_ko || g.properties.name,
                  has, region: matched,
                  x: e.clientX, y: e.clientY,
                })}
                onMouseMove={(e) => setHover(h => h && ({ ...h, x: e.clientX, y: e.clientY }))}
                onMouseLeave={() => setHover(null)}
                onClick={() => { if (has) router.push(`/countries/${country.slug}/regions/${matched.slug}/`) }}
                style={{
                  default: {
                    fill: has ? '#14B8A6' : '#F1F5F9',
                    stroke: '#FFFFFF', strokeWidth: 0.4,
                    outline: 'none', cursor: has ? 'pointer' : 'default',
                  },
                  hover: {
                    fill: has ? '#0F766E' : '#E2E8F0',
                    stroke: '#FFFFFF', strokeWidth: 0.6,
                    outline: 'none', cursor: has ? 'pointer' : 'default',
                  },
                  pressed: { fill: '#0F766E', outline:'none' },
                }}
              />
            )
          })}
        </Geographies>

        {pointMarkers.map(r => (
          <Marker key={r.slug} coordinates={[r.centerLng, r.centerLat]}
            onMouseEnter={(e) => setHover({ name: r.regionName, has: true, region: r, x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setHover(null)}
            onClick={() => router.push(`/countries/${country.slug}/regions/${r.slug}/`)}
            style={{ default: { cursor: 'pointer' } }}
          >
            <circle r={5} fill="#0EA5E9" stroke="#FFFFFF" strokeWidth={1.5} />
          </Marker>
        ))}
       </ZoomableGroup>
      </ComposableMap>

      {hover && (
        <div style={{
          position: 'fixed', left: hover.x + 12, top: hover.y + 12, zIndex: 100,
          background: 'rgba(15, 23, 42, 0.92)', color: '#fff',
          padding: '8px 12px', borderRadius: 8, fontSize: 12, pointerEvents: 'none',
          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
        }}>
          <div style={{ fontWeight: 700 }}>{hover.name}</div>
          <div style={{ fontSize: 11, color: hover.has ? '#5EEAD4' : '#94A3B8', marginTop: 2 }}>
            {hover.has ? `클릭 → ${hover.region.regionName} 허브` : '준비 중'}
          </div>
        </div>
      )}

      <div style={{ fontSize:11, color:'#94A3B8', textAlign:'center', marginTop:6 }}>
        {country.countryName} · admin-1 ({geo.features.length}개 지역) · teal 강조 = 콘텐츠 있음
      </div>
    </div>
  )
}
