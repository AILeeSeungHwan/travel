import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps'

const NUMERIC_TO_SLUG = {
  '410': 'kr', '392': 'jp', '704': 'vn', '764': 'th', '158': 'tw',
  '608': 'ph', '458': 'my', '360': 'id', '156': 'cn',
  '250': 'fr', '380': 'it', '826': 'gb', '276': 'de', '840': 'us',
}

const POINT_MARKERS = [
  { slug: 'sg', name: '싱가포르', lng: 103.82, lat: 1.35 },
  { slug: 'hk', name: '홍콩',     lng: 114.17, lat: 22.32 },
]

const TOPO_URL = '/world-110m.json'

const CONTINENT_TABS = [
  { key: 'all',      label: '전체', icon: '🌐' },
  { key: 'domestic', label: '국내', icon: '🇰🇷' },
  { key: 'asia',     label: '아시아', icon: '🌏' },
  { key: 'europe',   label: '유럽', icon: '🏰' },
  { key: 'americas', label: '아메리카', icon: '🌎' },
]

const CONTINENT_COORDS = {
  all:      { coordinates: [20, 10], zoom: 1 },
  domestic: { coordinates: [127, 36], zoom: 5.5 },
  asia:     { coordinates: [110, 25], zoom: 2.2 },
  europe:   { coordinates: [15, 52], zoom: 3 },
  americas: { coordinates: [-80, 15], zoom: 1.8 },
}

// 국가별 대륙 매핑
const SLUG_CONTINENT = {
  kr: 'domestic', jp: 'asia', vn: 'asia', th: 'asia', tw: 'asia',
  ph: 'asia', my: 'asia', id: 'asia', cn: 'asia', sg: 'asia', hk: 'asia',
  fr: 'europe', it: 'europe', gb: 'europe', de: 'europe',
  us: 'americas',
}

function InteractiveMap({ countries, slugSet, onSelect }) {
  const [hover, setHover] = useState(null)
  const [position, setPosition] = useState({ coordinates: [20, 10], zoom: 1 })
  const [activeContinent, setActiveContinent] = useState('all')
  const [animating, setAnimating] = useState(false)

  const slugToCountry = Object.fromEntries(countries.map(c => [c.slug, c]))
  const z = position.zoom

  const flyTo = useCallback((continent) => {
    setAnimating(true)
    setActiveContinent(continent)
    const target = CONTINENT_COORDS[continent] || CONTINENT_COORDS.all
    setPosition(target)
    setTimeout(() => setAnimating(false), 600)
  }, [])

  const handleClick = (slug) => {
    if (!slug) return
    if (z < 2.5) {
      const c = slugToCountry[slug]
      if (c) setPosition({ coordinates: [c.centerLng || 127, c.centerLat || 36], zoom: 5 })
    } else {
      onSelect && onSelect(slug)
    }
  }

  const zoomIn  = () => setPosition(p => ({ ...p, zoom: Math.min(p.zoom * 1.5, 12) }))
  const zoomOut = () => setPosition(p => ({ ...p, zoom: Math.max(p.zoom / 1.5, 0.6) }))
  const reset   = () => { setPosition(CONTINENT_COORDS.all); setActiveContinent('all') }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* 대륙 탭 필터 */}
      <div style={{
        display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {CONTINENT_TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => flyTo(tab.key)}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '7px 16px', borderRadius: 50, border: 'none',
              background: activeContinent === tab.key
                ? 'linear-gradient(135deg, #0EA5E9, #14B8A6)'
                : 'rgba(255,255,255,0.7)',
              color: activeContinent === tab.key ? '#fff' : '#475569',
              fontSize: 13, fontWeight: 700, cursor: 'pointer',
              boxShadow: activeContinent === tab.key
                ? '0 4px 14px rgba(14,165,233,0.4)'
                : '0 1px 4px rgba(0,0,0,0.08)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease',
              transform: activeContinent === tab.key ? 'translateY(-1px)' : 'none',
            }}
          >
            <span style={{ fontSize: 15 }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* 지도 컨테이너 */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(160deg, #0c1a35 0%, #0d2244 40%, #0a1628 100%)',
        borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
        opacity: animating ? 0.85 : 1,
        transition: 'opacity 0.3s ease',
      }}>
        {/* 별 배경 효과 */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 20% 50%, rgba(14,165,233,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(20,184,166,0.06) 0%, transparent 60%)',
        }} />

        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 155 }}
          width={980} height={480}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <ZoomableGroup
            center={position.coordinates}
            zoom={position.zoom}
            minZoom={0.6} maxZoom={12}
            onMoveEnd={setPosition}
          >
            <Geographies geography={TOPO_URL}>
              {({ geographies }) => geographies.map(geo => {
                const slug = NUMERIC_TO_SLUG[geo.id]
                const has  = slug && slugSet.has(slug)
                const country = slug ? slugToCountry[slug] : null
                const continent = slug ? SLUG_CONTINENT[slug] : null
                const dimmed = activeContinent !== 'all' && continent !== activeContinent

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(e) => setHover({
                      name: country ? country.countryName : geo.properties.name,
                      flag: country ? country.flag : null,
                      slug: has ? slug : null,
                      x: e.clientX, y: e.clientY,
                    })}
                    onMouseMove={(e) => setHover(h => h && ({ ...h, x: e.clientX, y: e.clientY }))}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => has && handleClick(slug)}
                    style={{
                      default: {
                        fill: dimmed
                          ? 'rgba(255,255,255,0.04)'
                          : has ? 'url(#countryGradient)' : 'rgba(255,255,255,0.07)',
                        stroke: dimmed ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.12)',
                        strokeWidth: 0.5 / z,
                        outline: 'none',
                        cursor: has && !dimmed ? 'pointer' : 'default',
                        filter: has && !dimmed ? 'drop-shadow(0 0 6px rgba(20,184,166,0.4))' : 'none',
                        transition: 'fill 0.2s ease',
                      },
                      hover: {
                        fill: has ? '#0EA5E9' : 'rgba(255,255,255,0.14)',
                        stroke: has ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.12)',
                        strokeWidth: 0.8 / z,
                        outline: 'none',
                        cursor: has ? 'pointer' : 'default',
                        filter: has ? 'drop-shadow(0 0 12px rgba(14,165,233,0.7))' : 'none',
                      },
                      pressed: { fill: '#0284C7', outline: 'none' },
                    }}
                  />
                )
              })}
            </Geographies>

            {/* SVG 그라디언트 정의 */}
            <defs>
              <linearGradient id="countryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>

            {/* 소국 마커 */}
            {POINT_MARKERS.filter(m => slugSet.has(m.slug)).map(m => {
              const dimmed = activeContinent !== 'all' && SLUG_CONTINENT[m.slug] !== activeContinent
              return (
                <Marker key={m.slug} coordinates={[m.lng, m.lat]}
                  onMouseEnter={(e) => setHover({ name: m.name, slug: m.slug, x: e.clientX, y: e.clientY })}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => !dimmed && handleClick(m.slug)}
                >
                  <circle r={6 / z} fill={dimmed ? 'rgba(255,255,255,0.15)' : '#0EA5E9'}
                    stroke="#fff" strokeWidth={1.5 / z}
                    style={{ cursor: dimmed ? 'default' : 'pointer', filter: dimmed ? 'none' : 'drop-shadow(0 0 6px rgba(14,165,233,0.8))' }}
                  />
                </Marker>
              )
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* 줌 컨트롤 — 플로팅 pill */}
        <div style={{
          position: 'absolute', top: 16, right: 16,
          display: 'flex', flexDirection: 'column', gap: 2,
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
          borderRadius: 14, padding: '4px',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        }}>
          {[
            { label: '+', title: '확대', action: zoomIn },
            { label: '−', title: '축소', action: zoomOut },
            { label: '⟲', title: '초기화', action: reset, small: true },
          ].map(btn => (
            <button key={btn.label} onClick={btn.action} title={btn.title} style={{
              width: 34, height: 34, border: 'none', borderRadius: 10,
              background: 'rgba(255,255,255,0.15)', color: '#fff',
              fontSize: btn.small ? 13 : 18, fontWeight: 700,
              cursor: 'pointer', lineHeight: 1,
              transition: 'background 0.15s',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
              onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.28)'}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
            >{btn.label}</button>
          ))}
        </div>

        {/* 안내 레이블 */}
        {position.zoom < 1.4 && (
          <div style={{
            position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
            fontSize: 11, color: 'rgba(255,255,255,0.55)',
            background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(6px)',
            padding: '5px 14px', borderRadius: 20, pointerEvents: 'none',
            border: '1px solid rgba(255,255,255,0.08)',
            whiteSpace: 'nowrap',
          }}>
            스크롤·드래그로 이동 &nbsp;·&nbsp; 밝은 국가 클릭
          </div>
        )}

        {/* 콘텐츠 있는 국가 수 뱃지 */}
        <div style={{
          position: 'absolute', top: 16, left: 16,
          background: 'rgba(20,184,166,0.2)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(20,184,166,0.35)',
          padding: '5px 12px', borderRadius: 20,
          fontSize: 11, color: '#5EEAD4', fontWeight: 700,
        }}>
          ✦ {slugSet.size}개국 콘텐츠
        </div>
      </div>

      {/* 호버 툴팁 — 글라스모피즘 카드 */}
      {hover && (
        <div style={{
          position: 'fixed', left: hover.x + 16, top: hover.y + 16, zIndex: 9999,
          background: 'rgba(15, 23, 42, 0.88)',
          backdropFilter: 'blur(20px)',
          color: '#fff', padding: '12px 16px', borderRadius: 14,
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
          pointerEvents: 'none', minWidth: 120,
          animation: 'fadeIn 0.12s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: hover.slug ? 6 : 0 }}>
            {hover.flag && <span style={{ fontSize: 20 }}>{hover.flag}</span>}
            <span style={{ fontSize: 14, fontWeight: 800 }}>{hover.name}</span>
          </div>
          {hover.slug ? (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              fontSize: 11, color: '#5EEAD4', fontWeight: 600,
              background: 'rgba(20,184,166,0.15)', padding: '3px 8px', borderRadius: 6,
            }}>
              <span>→</span>
              <span>{z < 2.5 ? '클릭하여 줌 인' : '클릭하여 이동'}</span>
            </div>
          ) : (
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>준비 중</div>
          )}
        </div>
      )}
    </div>
  )
}

function MobileGrid({ countries, slugSet }) {
  const [activeContinent, setActiveContinent] = useState('all')

  const filtered = activeContinent === 'all'
    ? countries
    : countries.filter(c => (SLUG_CONTINENT[c.slug] || 'asia') === activeContinent)

  return (
    <div>
      {/* 대륙 탭 */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, overflowX: 'auto', paddingBottom: 4 }}>
        {CONTINENT_TABS.map(tab => (
          <button key={tab.key} onClick={() => setActiveContinent(tab.key)} style={{
            flexShrink: 0, padding: '7px 14px', borderRadius: 50, border: 'none',
            background: activeContinent === tab.key
              ? 'linear-gradient(135deg, #0EA5E9, #14B8A6)' : 'rgba(241,245,249,1)',
            color: activeContinent === tab.key ? '#fff' : '#64748B',
            fontSize: 12, fontWeight: 700, cursor: 'pointer',
            boxShadow: activeContinent === tab.key ? '0 4px 12px rgba(14,165,233,0.3)' : 'none',
            transition: 'all 0.2s ease',
          }}>
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: 10,
      }}>
        {filtered.map(c => {
          const has = slugSet.has(c.slug)
          const inner = (
            <div style={{
              background: has
                ? 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(20,184,166,0.12))'
                : '#F8FAFC',
              border: has ? '1.5px solid rgba(14,165,233,0.25)' : '1.5px solid #E2E8F0',
              borderRadius: 16, padding: '14px 10px', textAlign: 'center',
              opacity: has ? 1 : 0.5, cursor: has ? 'pointer' : 'default',
              transition: 'all 0.2s ease',
              boxShadow: has ? '0 2px 12px rgba(14,165,233,0.1)' : 'none',
            }}>
              <div style={{ fontSize: 28, marginBottom: 6, lineHeight: 1 }}>{c.flag || '🏳️'}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: has ? '#0F766E' : '#94A3B8', lineHeight: 1.3 }}>
                {c.countryName}
              </div>
              {has && (
                <div style={{
                  fontSize: 9, color: '#0EA5E9', marginTop: 5, fontWeight: 700,
                  background: 'rgba(14,165,233,0.1)', padding: '2px 6px',
                  borderRadius: 6, display: 'inline-block',
                }}>
                  보기 →
                </div>
              )}
            </div>
          )
          if (!has) return <div key={c.slug}>{inner}</div>
          return (
            <Link key={c.slug} href={`/countries/${c.slug}/`} style={{ textDecoration: 'none' }}>
              {inner}
            </Link>
          )
        })}
      </div>
    </div>
  )
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
      background: 'linear-gradient(160deg, #f0f9ff 0%, #ecfdf5 50%, #f0f9ff 100%)',
      borderRadius: 24,
      padding: isMobile ? '20px 16px 24px' : '28px 28px 32px',
      marginBottom: 32,
      boxShadow: '0 4px 24px rgba(14,165,233,0.07)',
      border: '1px solid rgba(14,165,233,0.1)',
    }}>
      {/* 헤더 */}
      <div style={{ textAlign: 'center', marginBottom: 22 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)',
          borderRadius: 50, padding: '5px 14px', fontSize: 12, color: '#0284C7',
          fontWeight: 700, marginBottom: 12,
        }}>
          <span>✦</span> {slugSet.size}개국 여행 정보
        </div>
        <h1 style={{
          fontSize: isMobile ? 22 : 28, fontWeight: 900, color: '#0F172A',
          margin: '0 0 8px', letterSpacing: '-0.5px',
        }}>
          어디로 떠나시나요?
        </h1>
        <p style={{ fontSize: 13, color: '#64748B', margin: 0, lineHeight: 1.6 }}>
          국가 → 지역 → 스팟 &nbsp;·&nbsp; 호텔 · 가이드 · 계산기를 한 곳에서
        </p>
      </div>

      {isMobile
        ? <MobileGrid countries={countries} slugSet={slugSet} />
        : <InteractiveMap countries={countries} slugSet={slugSet} onSelect={handleSelect} />}
    </div>
  )
}
