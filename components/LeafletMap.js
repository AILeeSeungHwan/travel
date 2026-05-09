// LeafletMap — Carto Voyager 타일 + 모던 마커 + 카드형 팝업
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'

function fixDefaultIcon() {
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
}

function makeIcon(emoji, bg, size = 36) {
  if (typeof window === 'undefined') return null
  return L.divIcon({
    html: `
      <div style="
        width:${size}px;height:${size}px;
        background:${bg};
        border-radius:50% 50% 50% 0;transform:rotate(-45deg);
        border:2.5px solid rgba(255,255,255,0.9);
        box-shadow:0 4px 14px rgba(0,0,0,0.25),0 0 0 3px rgba(255,255,255,0.2);
        display:flex;align-items:center;justify-content:center;
      ">
        <span style="transform:rotate(45deg);font-size:${size * 0.45}px;line-height:1">${emoji}</span>
      </div>`,
    className: '',
    iconSize:   [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor:[0, -(size + 4)],
  })
}

const ICONS = {
  hotel:  () => makeIcon('🏨', 'linear-gradient(135deg,#F59E0B,#D97706)', 38),
  spot:   () => makeIcon('📍', 'linear-gradient(135deg,#14B8A6,#0284C7)', 32),
  region: () => makeIcon('🗺️', 'linear-gradient(135deg,#8B5CF6,#6366F1)', 32),
}

// Carto Voyager — 가장 현대적인 무료 타일
const CARTO_TILE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const CARTO_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'

export default function LeafletMap({ center, zoom = 13, markers = [], height = 340, scrollWheelZoom = false }) {
  useEffect(() => { fixDefaultIcon() }, [])
  if (!center || !Array.isArray(center) || center.length !== 2) return null

  const mainMarker = markers[0]

  return (
    <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 20, position: 'relative' }}>
      {/* 상단 위치 헤더 */}
      {mainMarker?.label && (
        <div style={{
          position: 'absolute', top: 14, left: 14, zIndex: 1000,
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
          border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: 14, padding: '8px 14px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          display: 'flex', alignItems: 'center', gap: 8, maxWidth: 'calc(100% - 100px)',
        }}>
          <span style={{ fontSize: 18 }}>
            {mainMarker.type === 'hotel' ? '🏨' : mainMarker.type === 'region' ? '🗺️' : '📍'}
          </span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
              {mainMarker.label}
            </div>
            {mainMarker.subLabel && (
              <div style={{ fontSize: 11, color: '#64748B', marginTop: 1 }}>{mainMarker.subLabel}</div>
            )}
          </div>
        </div>
      )}

      {/* 지도 오른쪽 위 뱃지 */}
      <div style={{
        position: 'absolute', top: 14, right: 14, zIndex: 1000,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10,
        padding: '5px 10px', fontSize: 10, color: '#64748B', fontWeight: 600,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}>
        © OpenStreetMap · CARTO
      </div>

      <MapContainer
        center={center} zoom={zoom}
        style={{ height, width: '100%' }}
        scrollWheelZoom={scrollWheelZoom}
        zoomControl={true}
      >
        <TileLayer
          url={CARTO_TILE}
          attribution={CARTO_ATTR}
          maxZoom={19}
        />

        {markers.map((m, i) => {
          const pos  = [m.lat, m.lng]
          const iconFn = ICONS[m.type] || ICONS.spot
          const icon = iconFn()
          return (
            <Marker key={i} position={pos} icon={icon || undefined}>
              {(m.label || m.url) && (
                <Popup
                  maxWidth={220}
                  className="modern-popup"
                  offset={[0, -8]}
                >
                  <div style={{ padding: '4px 2px' }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#0F172A', marginBottom: 4, lineHeight: 1.3 }}>
                      {m.label}
                    </div>
                    {m.subLabel && (
                      <div style={{
                        display: 'inline-block', fontSize: 11, color: '#14B8A6',
                        background: 'rgba(20,184,166,0.1)', padding: '2px 8px',
                        borderRadius: 6, fontWeight: 600, marginBottom: 6,
                      }}>
                        {m.subLabel}
                      </div>
                    )}
                    {m.url && (
                      <a href={m.url} style={{
                        display: 'block', textAlign: 'center', marginTop: 8,
                        background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                        color: '#fff', fontSize: 12, fontWeight: 700,
                        padding: '7px 12px', borderRadius: 10, textDecoration: 'none',
                        boxShadow: '0 2px 8px rgba(14,165,233,0.3)',
                      }}>
                        자세히 보기 →
                      </a>
                    )}
                  </div>
                </Popup>
              )}
            </Marker>
          )
        })}

        {markers.filter(m => m.radius).map((m, i) => (
          <Circle key={`c-${i}`} center={[m.lat, m.lng]} radius={m.radius}
            pathOptions={{
              color: '#0EA5E9', weight: 1.5,
              fillColor: '#0EA5E9', fillOpacity: 0.08,
              dashArray: '4 4',
            }}
          />
        ))}
      </MapContainer>

      {/* 팝업 스타일 오버라이드 */}
      <style>{`
        .leaflet-popup-content-wrapper {
          border-radius: 16px !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04) !important;
          border: none !important;
          padding: 0 !important;
        }
        .leaflet-popup-content {
          margin: 14px 16px !important;
        }
        .leaflet-popup-tip {
          box-shadow: none !important;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12) !important;
          border-radius: 12px !important;
          overflow: hidden;
        }
        .leaflet-control-zoom a {
          border: none !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #0F172A !important;
          background: rgba(255,255,255,0.95) !important;
          backdrop-filter: blur(8px) !important;
          width: 36px !important;
          height: 36px !important;
          line-height: 36px !important;
        }
        .leaflet-control-zoom a:hover {
          background: #F0FDFA !important;
          color: #0EA5E9 !important;
        }
        .leaflet-control-attribution {
          display: none !important;
        }
      `}</style>
    </div>
  )
}
