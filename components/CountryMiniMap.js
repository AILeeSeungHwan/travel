// 국가 허브용 mini-map (A안 — react-simple-maps)
// 해당 국가만 강조, 주변 대륙은 회색

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const TOPO_URL = '/world-110m.json'

const SLUG_TO_NUMERIC = {
  kr: '410', jp: '392', vn: '704', th: '764', tw: '158',
  ph: '608', my: '458', id: '360', cn: '156',
  fr: '250', it: '380', gb: '826', de: '276', us: '840',
}

const PROJECTION_BY_CONTINENT = {
  asia:     { rotate: [-110, -10, 0], scale: 700 },
  europe:   { rotate: [-10, -50, 0],  scale: 800 },
  americas: { rotate: [95,  -20, 0],  scale: 400 },
  oceania:  { rotate: [-150, 25, 0],  scale: 600 },
  africa:   { rotate: [-20,  0, 0],   scale: 550 },
  domestic: { rotate: [-127, -36, 0], scale: 4500 },
}

export default function CountryMiniMap({ country }) {
  const numeric = SLUG_TO_NUMERIC[country.slug]
  const proj = PROJECTION_BY_CONTINENT[country.continent || 'asia'] || PROJECTION_BY_CONTINENT.asia

  // 110m 해상도에 폴리곤 없는 국가(SG/HK)는 단순 좌표 안내로 폴백
  if (!numeric) {
    return (
      <div style={{
        background:'#F8FAFC', border:'1px solid #E2E8F0', borderRadius:12,
        padding:'18px', textAlign:'center', fontSize:13, color:'#64748B',
      }}>
        📍 {country.countryName} 좌표: {country.centerLat}, {country.centerLng}<br/>
        <span style={{ fontSize:11, color:'#94A3B8' }}>(작은 영토는 폴리곤 지도 대신 좌표로 표기)</span>
      </div>
    )
  }

  return (
    <div style={{ background:'#FFFFFF', border:'1px solid #E2E8F0', borderRadius:12, padding:'12px 14px', marginBottom:18 }}>
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{ rotate: proj.rotate, scale: proj.scale }}
        width={400} height={260}
        style={{ width:'100%', height:'auto' }}
      >
        <Geographies geography={TOPO_URL}>
          {({ geographies }) => geographies.map(geo => {
            const isTarget = geo.id === numeric
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: isTarget ? '#14B8A6' : '#E2E8F0', stroke:'#FFFFFF', strokeWidth: 0.5, outline:'none' },
                  hover:   { fill: isTarget ? '#0F766E' : '#CBD5E1', outline:'none' },
                  pressed: { outline:'none' },
                }}
              />
            )
          })}
        </Geographies>
      </ComposableMap>
      <div style={{ fontSize:11, color:'#94A3B8', textAlign:'center', marginTop:6 }}>
        {country.countryName} · 좌표 {country.centerLat?.toFixed(2)}, {country.centerLng?.toFixed(2)} · 시간대 {country.timeZone}
      </div>
    </div>
  )
}
