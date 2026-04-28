// 인터랙티브 세계지도 (A안 — react-simple-maps + Natural Earth 1:110m TopoJSON)
// 데스크톱: SVG 폴리곤 + hover 툴팁 + 클릭 이동
// 모바일: 대륙별 타일 그리드(폴백)

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'

// ISO 3166-1 numeric → 우리 사이트 country slug 매핑
const NUMERIC_TO_SLUG = {
  '410': 'kr', '392': 'jp', '704': 'vn', '764': 'th', '158': 'tw',
  '608': 'ph', '458': 'my', '360': 'id', '156': 'cn',
  '250': 'fr', '380': 'it', '826': 'gb', '276': 'de',
  '840': 'us',
  // 싱가포르(702)·홍콩(344) 은 110m 해상도에 폴리곤 없음 → Marker 로 별도 표시
}

// 110m 해상도에 폴리곤이 없는 작은 영토는 Marker 로 표시
const POINT_MARKERS = [
  { slug: 'sg', name: '싱가포르', lng: 103.82, lat:  1.35 },
  { slug: 'hk', name: '홍콩',     lng: 114.17, lat: 22.32 },
]

const TOPO_URL = '/world-110m.json'

// 대륙별 타일 그리드 (모바일 폴백)
const CONTINENT_LABEL = {
  domestic: '🇰🇷 국내', asia: '🌏 아시아', europe: '🇪🇺 유럽',
  americas: '🌎 아메리카', oceania: '🌏 오세아니아', africa: '🌍 아프리카',
}
const CONTINENT_ORDER = ['domestic', 'asia', 'europe', 'americas', 'oceania', 'africa']

function CountryTile({ country, hasContent }) {
  const inner = (
    <div style={{
      background: hasContent ? 'linear-gradient(135deg, #E0F2FE, #CCFBF1)' : '#F8FAFC',
      border: hasContent ? '1px solid #14B8A6' : '1px solid #E2E8F0',
      borderRadius: 10, padding: '14px 12px', textAlign: 'center',
      opacity: hasContent ? 1 : 0.55, cursor: hasContent ? 'pointer' : 'default',
    }}>
      <div style={{ fontSize: 24, marginBottom: 4 }}>{country.flag || '🏳️'}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: hasContent ? '#0F766E' : '#94A3B8' }}>{country.countryName}</div>
      <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 2 }}>{hasContent ? '콘텐츠 있음' : '준비 중'}</div>
    </div>
  )
  if (!hasContent) return <div>{inner}</div>
  return <Link href={`/countries/${country.slug}/`} style={{ textDecoration: 'none' }}>{inner}</Link>
}

function MobileGrid({ countries, slugSet }) {
  const grouped = {}
  countries.forEach(c => {
    const k = c.continent || 'asia'
    if (!grouped[k]) grouped[k] = []
    grouped[k].push(c)
  })
  return (
    <div>
      {CONTINENT_ORDER.filter(k => grouped[k]).map(k => (
        <div key={k} style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#334155', marginBottom: 10 }}>{CONTINENT_LABEL[k]}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 10 }}>
            {grouped[k].map(c => <CountryTile key={c.slug} country={c} hasContent={slugSet.has(c.slug)} />)}
          </div>
        </div>
      ))}
    </div>
  )
}

function InteractiveMap({ countries, slugSet, onSelect }) {
  const [hover, setHover] = useState(null) // { name, slug, x, y }
  const [position, setPosition] = useState({ coordinates: [20, 20], zoom: 1 })
  const slugToCountry = Object.fromEntries(countries.map(c => [c.slug, c]))
  const z = position.zoom

  const zoomTo = (slug) => {
    const c = slugToCountry[slug]
    if (!c) return
    setPosition({ coordinates: [c.centerLng, c.centerLat], zoom: 6 })
  }
  const handleClick = (slug) => {
    if (z < 3) {
      zoomTo(slug) // 처음 클릭 → 해당 국가로 줌
    } else {
      onSelect && onSelect(slug) // 이미 줌된 상태 → 국가 허브로 이동
    }
  }

  const zoomIn  = () => setPosition(p => ({ ...p, zoom: Math.min(p.zoom * 1.5, 12) }))
  const zoomOut = () => setPosition(p => ({ ...p, zoom: Math.max(p.zoom / 1.5, 0.6) }))
  const reset   = () => setPosition({ coordinates: [20, 20], zoom: 1 })

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 155 }}
        width={980} height={500}
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup
          center={position.coordinates}
          zoom={position.zoom}
          minZoom={0.6}
          maxZoom={12}
          onMoveEnd={setPosition}
        >
          <Geographies geography={TOPO_URL}>
            {({ geographies }) => geographies.map(geo => {
              const slug = NUMERIC_TO_SLUG[geo.id]
              const has = slug && slugSet.has(slug)
              const country = slug ? slugToCountry[slug] : null
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => setHover({
                    name: country ? country.countryName : geo.properties.name,
                    slug: has ? slug : null,
                    x: e.clientX, y: e.clientY,
                  })}
                  onMouseMove={(e) => setHover(h => h && ({ ...h, x: e.clientX, y: e.clientY }))}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => { if (has) handleClick(slug) }}
                  style={{
                    default: {
                      fill: has ? '#14B8A6' : '#E2E8F0',
                      stroke: '#FFFFFF', strokeWidth: 0.5 / z,
                      outline: 'none',
                      cursor: has ? 'pointer' : 'default',
                    },
                    hover: {
                      fill: has ? '#0F766E' : '#CBD5E1',
                      stroke: '#FFFFFF', strokeWidth: 0.7 / z,
                      outline: 'none',
                      cursor: has ? 'pointer' : 'default',
                    },
                    pressed: { fill: '#0F766E', outline: 'none' },
                  }}
                />
              )
            })}
          </Geographies>

          {POINT_MARKERS.filter(m => slugSet.has(m.slug)).map(m => (
            <Marker key={m.slug} coordinates={[m.lng, m.lat]}
              onMouseEnter={(e) => setHover({ name: m.name, slug: m.slug, x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setHover(null)}
              onClick={() => handleClick(m.slug)}
              style={{ default: { cursor: 'pointer' } }}
            >
              <circle r={5 / z} fill="#0EA5E9" stroke="#FFFFFF" strokeWidth={1.5 / z} />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* 줌 컨트롤 */}
      <div style={{
        position: 'absolute', top: 12, right: 12, display: 'flex', flexDirection: 'column',
        gap: 4, background: 'rgba(255,255,255,0.92)', borderRadius: 10, padding: 4,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}>
        <button onClick={zoomIn}  title="확대" style={zoomBtn}>＋</button>
        <button onClick={zoomOut} title="축소" style={zoomBtn}>－</button>
        <button onClick={reset}   title="초기화" style={{ ...zoomBtn, fontSize: 11 }}>⟲</button>
      </div>

      {/* 줌 안내 */}
      {position.zoom < 1.2 && (
        <div style={{
          position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
          fontSize: 11, color: '#475569', background: 'rgba(255,255,255,0.85)',
          padding: '4px 10px', borderRadius: 12, pointerEvents: 'none',
        }}>
          마우스 휠로 줌 · 드래그로 이동 · 작은 국가는 ＋ 버튼 또는 작은 점 마커 사용
        </div>
      )}

      {hover && (
        <div style={{
          position: 'fixed', left: hover.x + 12, top: hover.y + 12, zIndex: 100,
          background: 'rgba(15, 23, 42, 0.92)', color: '#fff',
          padding: '8px 12px', borderRadius: 8, fontSize: 12, pointerEvents: 'none',
          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
        }}>
          <div style={{ fontWeight: 700 }}>{hover.name}</div>
          <div style={{ fontSize: 11, color: hover.slug ? '#5EEAD4' : '#94A3B8', marginTop: 2 }}>
            {hover.slug ? (z < 3 ? '클릭 → 줌 인' : '클릭 → 국가 허브') : '준비 중'}
          </div>
        </div>
      )}
    </div>
  )
}

const zoomBtn = {
  width: 32, height: 32, border: 'none', borderRadius: 6,
  background: '#fff', color: '#0F172A', fontSize: 16, fontWeight: 700,
  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
}

export default function WorldMap({ countries, contentSlugs, onSelect }) {
  const slugSet = new Set(contentSlugs || [])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleSelect = (slug) => {
    if (onSelect) onSelect(slug)
    else if (typeof window !== 'undefined') window.location.href = `/countries/${slug}/`
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #ECFEFF, #F0FDFA, #EFF6FF)',
      borderRadius: 18, padding: '28px 24px', marginBottom: 28,
    }}>
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <h1 style={{ fontSize: 26, fontWeight: 900, color: '#0F172A', margin: '0 0 8px' }}>어디로 떠나시나요?</h1>
        <p style={{ fontSize: 14, color: '#475569', margin: 0 }}>
          국가 → 지역 → 스팟 3단계 허브 · 호텔·여행 가이드·계산기를 한 곳에서
        </p>
        <p style={{ fontSize: 11, color: '#94A3B8', marginTop: 6 }}>
          {isMobile ? '국가 타일 탭' : '폴리곤 클릭으로 해당 국가 허브로 이동 · hover 시 정보 표시'}
        </p>
      </div>
      {isMobile
        ? <MobileGrid countries={countries} slugSet={slugSet} />
        : <InteractiveMap countries={countries} slugSet={slugSet} onSelect={handleSelect} />}
    </div>
  )
}
