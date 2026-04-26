// 인터랙티브 세계지도(MVP) — 대륙별 국가 그리드
// react-simple-maps/d3-geo 도입 전 단계 폴백. 모바일/SSR 친화적.
import Link from 'next/link'

const CONTINENT_LABEL = {
  domestic: '🇰🇷 국내',
  asia:     '🌏 아시아',
  europe:   '🇪🇺 유럽',
  americas: '🌎 아메리카',
  oceania:  '🌏 오세아니아',
  africa:   '🌍 아프리카',
}

const CONTINENT_ORDER = ['domestic', 'asia', 'europe', 'americas', 'oceania', 'africa']

function CountryTile({ country, hasContent }) {
  const inner = (
    <div style={{
      background: hasContent ? 'linear-gradient(135deg, #E0F2FE, #CCFBF1)' : '#F8FAFC',
      border: hasContent ? '1px solid #14B8A6' : '1px solid #E2E8F0',
      borderRadius: 10,
      padding: '14px 12px',
      textAlign: 'center',
      transition: 'all .2s',
      opacity: hasContent ? 1 : 0.55,
      cursor: hasContent ? 'pointer' : 'default',
    }}>
      <div style={{ fontSize: 24, marginBottom: 4 }}>{country.flag || '🏳️'}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: hasContent ? '#0F766E' : '#94A3B8' }}>
        {country.countryName}
      </div>
      <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 2 }}>
        {hasContent ? '콘텐츠 있음' : '준비 중'}
      </div>
    </div>
  )
  if (!hasContent) return <div>{inner}</div>
  return <Link href={`/countries/${country.slug}/`} style={{ textDecoration: 'none' }}>{inner}</Link>
}

export default function WorldMap({ countries, contentSlugs }) {
  const slugSet = new Set(contentSlugs || [])
  const grouped = {}
  countries.forEach(c => {
    const k = c.continent || 'asia'
    if (!grouped[k]) grouped[k] = []
    grouped[k].push(c)
  })

  return (
    <div style={{
      background: 'linear-gradient(135deg, #ECFEFF, #F0FDFA, #EFF6FF)',
      borderRadius: 18,
      padding: '28px 24px',
      marginBottom: 28,
    }}>
      <div style={{ textAlign: 'center', marginBottom: 18 }}>
        <h1 style={{ fontSize: 26, fontWeight: 900, color: '#0F172A', margin: '0 0 8px' }}>
          어디로 떠나시나요?
        </h1>
        <p style={{ fontSize: 14, color: '#475569', margin: 0 }}>
          국가 → 지역 → 스팟 3단계 허브 · 호텔·여행 가이드·계산기를 한 곳에서
        </p>
      </div>
      {CONTINENT_ORDER.filter(k => grouped[k]).map(k => (
        <div key={k} style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#334155', marginBottom: 10 }}>
            {CONTINENT_LABEL[k]}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
            gap: 10,
          }}>
            {grouped[k].map(c => (
              <CountryTile key={c.slug} country={c} hasContent={slugSet.has(c.slug)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
