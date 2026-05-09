// 국가 허브 지역 지도 — 모던 다크 글래스 UI
import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'

const PROJECTION_BY_SLUG = {
  kr: { rotate: [-127.8, -36, 0], scale: 3200 },
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

const FLAG = { kr:'🇰🇷', jp:'🇯🇵', vn:'🇻🇳', th:'🇹🇭', tw:'🇹🇼', cn:'🇨🇳', ph:'🇵🇭',
  my:'🇲🇾', id:'🇮🇩', sg:'🇸🇬', hk:'🇭🇰', fr:'🇫🇷', it:'🇮🇹', gb:'🇬🇧', de:'🇩🇪', us:'🇺🇸' }

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
  const [activeRegion, setActiveRegion] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`/maps/${country.slug}.geo.json`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (!cancelled) setGeo(data) })
      .catch(() => {})
    return () => { cancelled = true }
  }, [country.slug])

  const proj = PROJECTION_BY_SLUG[country.slug] || { rotate: [-110, -30, 0], scale: 800 }

  const adminToRegion = {}
  regions.forEach(r => {
    if (!r.adminName) return
    adminToRegion[normalize(r.adminName)] = r
  })

  const pointMarkers = regions.filter(r => !r.adminName && r.centerLat && r.centerLng)
  const contentCount = regions.filter(r => r.adminName ? adminToRegion[normalize(r.adminName)] : (r.centerLat && r.centerLng)).length
  const flag = FLAG[country.slug] || '🌍'

  const handleMouseMove = useCallback((e) => {
    setHover(h => h ? { ...h, x: e.clientX, y: e.clientY } : h)
  }, [])

  if (!geo) {
    return (
      <div style={{
        height: 300,
        background: 'linear-gradient(160deg, #0c1a35 0%, #0d2244 50%, #0a1628 100%)',
        border: '1px solid rgba(14,165,233,0.15)',
        borderRadius: 20, marginBottom: 20,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 12,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          border: '3px solid rgba(20,184,166,0.3)', borderTopColor: '#14B8A6',
          animation: 'cmSpin 0.8s linear infinite',
        }} />
        <div style={{ fontSize: 13, color: '#5EEAD4', fontWeight: 600, letterSpacing: '0.02em' }}>
          {flag} {country.countryName} 지도 불러오는 중
        </div>
        <style>{`@keyframes cmSpin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(160deg, #0c1a35 0%, #0d2244 50%, #0a1628 100%)',
      border: '1px solid rgba(14,165,233,0.15)',
      borderRadius: 20, marginBottom: 20, overflow: 'hidden',
      boxShadow: '0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
    }}>

      {/* 상단 정보 헤더 */}
      <div style={{
        position: 'absolute', top: 14, left: 14, zIndex: 10,
        background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 14, padding: '8px 14px',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ fontSize: 22 }}>{flag}</span>
        <div>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#F8FAFC', lineHeight: 1.2 }}>
            {country.countryName}
          </div>
          <div style={{ fontSize: 11, color: '#5EEAD4', marginTop: 2, fontWeight: 600 }}>
            {contentCount}개 지역 콘텐츠 보유
          </div>
        </div>
      </div>

      {/* 우상단 범례 */}
      <div style={{
        position: 'absolute', top: 14, right: 14, zIndex: 10,
        background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 10, padding: '6px 10px',
        display: 'flex', flexDirection: 'column', gap: 5,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: 'linear-gradient(135deg, #14B8A6, #0EA5E9)' }} />
          <span style={{ fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>콘텐츠 있음 (클릭)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: 'rgba(148,163,184,0.2)' }} />
          <span style={{ fontSize: 10, color: '#64748B', fontWeight: 600 }}>준비 중</span>
        </div>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ rotate: proj.rotate, scale: proj.scale }}
        width={500} height={360}
        style={{ width: '100%', height: 'auto' }}
        onMouseMove={handleMouseMove}
      >
        <ZoomableGroup minZoom={0.8} maxZoom={6}>
          {/* 배경 사각형 (지도 영역 시각화) */}
          <rect x={0} y={0} width={500} height={360} fill="transparent" />

          <Geographies geography={geo}>
            {({ geographies }) => geographies.map(g => {
              const adminKey = normalize(g.properties.name)
              const matched = adminToRegion[adminKey]
              const has = !!matched
              const isActive = activeRegion === (matched?.slug)

              return (
                <Geography
                  key={g.rsmKey}
                  geography={g}
                  onMouseEnter={() => {
                    setHover({
                      name: g.properties.name_ko || g.properties.name,
                      has, region: matched,
                    })
                    if (has) setActiveRegion(matched.slug)
                  }}
                  onMouseLeave={() => {
                    setHover(null)
                    setActiveRegion(null)
                  }}
                  onClick={() => { if (has) router.push(`/countries/${country.slug}/regions/${matched.slug}/`) }}
                  style={{
                    default: {
                      fill: has
                        ? (isActive ? '#0EA5E9' : '#14B8A6')
                        : 'rgba(148,163,184,0.12)',
                      stroke: 'rgba(255,255,255,0.12)',
                      strokeWidth: 0.5,
                      outline: 'none',
                      cursor: has ? 'pointer' : 'default',
                      transition: 'fill 0.15s ease',
                      filter: has ? 'drop-shadow(0 0 4px rgba(20,184,166,0.3))' : 'none',
                    },
                    hover: {
                      fill: has ? '#0EA5E9' : 'rgba(148,163,184,0.2)',
                      stroke: 'rgba(255,255,255,0.25)',
                      strokeWidth: 0.8,
                      outline: 'none',
                      cursor: has ? 'pointer' : 'default',
                      filter: has ? 'drop-shadow(0 0 8px rgba(14,165,233,0.5))' : 'none',
                    },
                    pressed: {
                      fill: '#0284C7',
                      stroke: 'rgba(255,255,255,0.4)',
                      strokeWidth: 1,
                      outline: 'none',
                    },
                  }}
                />
              )
            })}
          </Geographies>

          {/* 포인트 마커 (adminName 없는 도시·섬) */}
          {pointMarkers.map(r => (
            <Marker
              key={r.slug}
              coordinates={[r.centerLng, r.centerLat]}
              onMouseEnter={() => {
                setHover({ name: r.regionName, has: true, region: r })
                setActiveRegion(r.slug)
              }}
              onMouseLeave={() => {
                setHover(null)
                setActiveRegion(null)
              }}
              onClick={() => router.push(`/countries/${country.slug}/regions/${r.slug}/`)}
              style={{ default: { cursor: 'pointer' } }}
            >
              <circle r={6} fill="#0EA5E9" stroke="rgba(255,255,255,0.6)" strokeWidth={2}
                style={{ filter: 'drop-shadow(0 0 6px rgba(14,165,233,0.7))' }} />
              <circle r={3} fill="#FFFFFF" />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* 글래스 툴팁 */}
      {hover && (
        <div style={{
          position: 'fixed', left: hover.x + 14, top: hover.y - 10, zIndex: 1000,
          background: 'rgba(15,23,42,0.88)', backdropFilter: 'blur(16px)',
          border: hover.has ? '1px solid rgba(20,184,166,0.4)' : '1px solid rgba(148,163,184,0.2)',
          borderRadius: 12, padding: '10px 14px', pointerEvents: 'none',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          minWidth: 130,
        }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#F8FAFC', lineHeight: 1.3 }}>
            {hover.has && hover.region ? hover.region.regionName : hover.name}
          </div>
          {hover.has && hover.region?.summary && (
            <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 3, lineHeight: 1.4, maxWidth: 180 }}>
              {hover.region.summary.slice(0, 40)}{hover.region.summary.length > 40 ? '…' : ''}
            </div>
          )}
          <div style={{
            marginTop: 6, fontSize: 11, fontWeight: 700,
            color: hover.has ? '#5EEAD4' : '#64748B',
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            {hover.has ? (
              <>
                <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background:'#14B8A6' }} />
                클릭 → {hover.region?.regionName} 허브 보기
              </>
            ) : (
              <>
                <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background:'#475569' }} />
                콘텐츠 준비 중
              </>
            )}
          </div>
        </div>
      )}

      {/* 하단 바 */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(10,22,40,0.9), transparent)',
        padding: '16px 16px 10px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ fontSize: 11, color: '#475569' }}>
          © OpenStreetMap · Natural Earth
        </div>
        <div style={{ fontSize: 11, color: '#475569' }}>
          스크롤·핀치로 확대 가능
        </div>
      </div>
    </div>
  )
}
