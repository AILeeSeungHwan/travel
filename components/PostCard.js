import Link from 'next/link'

const CATEGORY_COLORS = {
  country:    { color: '#0369A1', bg: '#E0F2FE', label: '국가' },
  region:     { color: '#0F766E', bg: '#CCFBF1', label: '지역' },
  spot:       { color: '#15803D', bg: '#DCFCE7', label: '스팟' },
  hotel:      { color: '#B45309', bg: '#FEF3C7', label: '호텔' },
  theme:      { color: '#7C3AED', bg: '#EDE9FE', label: '테마' },
  guide:      { color: '#475569', bg: '#F1F5F9', label: '가이드' },
  situation:  { color: '#0891B2', bg: '#CFFAFE', label: '상황별' },
  tool:       { color: '#0284C7', bg: '#E0F2FE', label: '계산기' },
  compare:    { color: '#B91C1C', bg: '#FEF2F2', label: '비교' },
  addon:      { color: '#EA580C', bg: '#FFF7ED', label: '여행용품' },
}

export function GridCard({ post }) {
  const meta = CATEGORY_COLORS[post.category] || { color:'#64748b', bg:'#F1F5F9', label: post.category }
  return (
    <Link href={post.url} style={{ textDecoration:'none' }}>
      <article style={{
        background:'#fff', borderRadius:12, padding:'18px 20px', border:'1px solid #E2E8F0',
        transition:'all 0.2s', height:'100%', display:'flex', flexDirection:'column'
      }}>
        <span style={{
          fontSize:11, fontWeight:700, padding:'3px 8px', borderRadius:6,
          color:meta.color, background:meta.bg, display:'inline-block', marginBottom:10, alignSelf:'flex-start'
        }}>{meta.label}</span>
        <h3 style={{ fontSize:15, fontWeight:700, color:'#0F172A', margin:'0 0 8px', lineHeight:1.4 }}>{post.title || post.name || post.spotName || post.regionName || post.countryName || post.hotelName}</h3>
        <p style={{ fontSize:13, color:'#64748b', lineHeight:1.6, margin:0, flex:1 }}>
          {(post.description || post.summary || '').slice(0, 100)}
        </p>
        {post.updatedAt && (
          <time style={{ fontSize:11, color:'#94A3B8', marginTop:10 }}>업데이트: {post.updatedAt}</time>
        )}
      </article>
    </Link>
  )
}

export function ListCard({ post }) {
  const meta = CATEGORY_COLORS[post.category] || { color:'#64748b', bg:'#F1F5F9', label: post.category }
  return (
    <Link href={post.url} style={{ textDecoration:'none' }}>
      <div style={{
        display:'flex', gap:10, alignItems:'flex-start', padding:'14px 0',
        borderBottom:'1px solid #F1F5F9'
      }}>
        <span style={{
          fontSize:11, fontWeight:700, padding:'3px 8px', borderRadius:6,
          color:meta.color, background:meta.bg, flexShrink:0
        }}>{meta.label}</span>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:14, fontWeight:600, color:'#0F172A', marginBottom:4 }}>{post.title || post.name}</div>
          <div style={{ fontSize:12, color:'#64748b', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
            {post.description || post.summary}
          </div>
        </div>
      </div>
    </Link>
  )
}
