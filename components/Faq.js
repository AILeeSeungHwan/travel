import { useState } from 'react'

export default function Faq({ items }) {
  const [open, setOpen] = useState(null)
  if (!items || items.length === 0) return null
  return (
    <div style={{ margin:'8px 0 16px' }}>
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={i} style={{ borderBottom:'1px solid #E5E7EB' }}>
            <button onClick={() => setOpen(isOpen ? null : i)} style={{
              width:'100%', textAlign:'left', padding:'14px 0', background:'none', border:'none', cursor:'pointer',
              display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:15, fontWeight:700, color:'#111827'
            }}>
              <span>Q. {it.q}</span>
              <span style={{ color:'#9ca3af', fontSize:18 }}>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div style={{ padding:'0 0 16px', fontSize:14, lineHeight:1.8, color:'#374151' }}>
                <strong>A.</strong> {it.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
