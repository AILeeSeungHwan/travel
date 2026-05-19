export default function Faq({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div style={{ margin:'8px 0 16px' }}>
      {items.map((it, i) => (
        <div key={i} style={{ borderBottom:'1px solid #E5E7EB', padding:'14px 0' }}>
          <p style={{ margin:0, fontSize:15, fontWeight:700, color:'#111827' }}>Q. {it.q}</p>
          <p style={{ margin:'10px 0 0', fontSize:14, lineHeight:1.8, color:'#374151' }}>
            <strong>A.</strong> {it.a}
          </p>
        </div>
      ))}
    </div>
  )
}
