import Link from 'next/link'

export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null
  return (
    <nav aria-label="breadcrumb" style={{ marginBottom: 16 }}>
      <ol style={{ display:'flex', alignItems:'center', gap:6, listStyle:'none', padding:0, margin:0, flexWrap:'wrap' }}>
        <li><Link href="/" style={{ fontSize:13, color:'#6b7280', textDecoration:'none' }}>홈</Link></li>
        {items.map((item, i) => (
          <li key={i} style={{ display:'flex', alignItems:'center', gap:6 }}>
            <span style={{ fontSize:11, color:'#d1d5db' }}>›</span>
            {item.href ? (
              <Link href={item.href} style={{ fontSize:13, color:'#6b7280', textDecoration:'none' }}>{item.label}</Link>
            ) : (
              <span style={{ fontSize:13, color:'#374151', fontWeight:500 }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
