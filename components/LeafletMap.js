// B안 — Leaflet + OSM 타일 (지역/스팟/호텔 mini-map 공통 베이스)
// dynamic import 로만 사용 (SSR off)

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'

// Webpack/Next 환경에서 기본 마커 아이콘 경로가 깨지는 이슈 패치
function fixDefaultIcon() {
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
}

const HOTEL_ICON = typeof window !== 'undefined' ? L.divIcon({
  html: '<div style="background:linear-gradient(135deg,#F59E0B,#D97706);width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff"><span style="transform:rotate(45deg)">🏨</span></div>',
  className: '', iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -28],
}) : null

const SPOT_ICON = typeof window !== 'undefined' ? L.divIcon({
  html: '<div style="background:#14B8A6;width:24px;height:24px;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;font-weight:700">📍</div>',
  className: '', iconSize: [24, 24], iconAnchor: [12, 12], popupAnchor: [0, -12],
}) : null

export default function LeafletMap({ center, zoom = 13, markers = [], height = 320, scrollWheelZoom = false }) {
  useEffect(() => { fixDefaultIcon() }, [])
  if (!center || !Array.isArray(center) || center.length !== 2) return null

  return (
    <div style={{ borderRadius:12, overflow:'hidden', border:'1px solid #E2E8F0', marginBottom:18 }}>
      <MapContainer
        center={center} zoom={zoom}
        style={{ height, width:'100%' }}
        scrollWheelZoom={scrollWheelZoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m, i) => {
          const pos = [m.lat, m.lng]
          const icon = m.type === 'hotel' ? HOTEL_ICON : SPOT_ICON
          return (
            <Marker key={i} position={pos} icon={icon || undefined}>
              {(m.label || m.url) && (
                <Popup>
                  <div style={{ fontSize:13, fontWeight:700 }}>{m.label}</div>
                  {m.subLabel && <div style={{ fontSize:11, color:'#64748B', marginTop:2 }}>{m.subLabel}</div>}
                  {m.url && <a href={m.url} style={{ fontSize:11, color:'#0369A1', display:'block', marginTop:6 }}>자세히 →</a>}
                </Popup>
              )}
            </Marker>
          )
        })}
        {markers.filter(m => m.radius).map((m, i) => (
          <Circle key={`c-${i}`} center={[m.lat, m.lng]} radius={m.radius}
            pathOptions={{ color:'#14B8A6', fillColor:'#14B8A6', fillOpacity:0.1 }} />
        ))}
      </MapContainer>
    </div>
  )
}
