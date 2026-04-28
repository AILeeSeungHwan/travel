import { useState, useEffect } from 'react'
import Head from 'next/head'

const FONT_FAMILY = "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif"
const PRESETS = [['1','오늘'],['7','7일'],['14','14일'],['30','30일'],['90','90일']]

export default function SearchAnalytics() {
  const [pwd, setPwd] = useState('')
  const [authed, setAuthed] = useState(false)
  const [days, setDays] = useState('7')
  const [data, setData] = useState({})

  useEffect(() => {
    if (!authed) return
    const h = { 'x-admin-password': pwd }
    Promise.all([
      fetch(`/api/stats?type=summary&days=${days}`,  { headers: h }).then(r => r.ok ? r.json() : null),
      fetch(`/api/stats?type=sources&days=${days}`,  { headers: h }).then(r => r.ok ? r.json() : []),
      fetch(`/api/stats?type=pages&days=${days}`,    { headers: h }).then(r => r.ok ? r.json() : []),
      fetch(`/api/stats?type=keywords&days=${days}`, { headers: h }).then(r => r.ok ? r.json() : []),
      fetch(`/api/stats?type=recent`,                { headers: h }).then(r => r.ok ? r.json() : []),
    ]).then(([summary, sources, pages, keywords, recent]) => setData({ summary, sources, pages, keywords, recent }))
  }, [authed, days])

  if (!authed) {
    return (
      <div style={{ fontFamily: FONT_FAMILY, padding: 40, maxWidth: 420, margin: '80px auto' }}>
        <Head><title>트립스팟 검색유입 분석</title><meta name="robots" content="noindex,nofollow" /></Head>
        <h1 style={{ fontSize:22, fontWeight:800, marginBottom:16 }}>검색유입 분석</h1>
        <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} placeholder="ADMIN_PASSWORD"
          style={{ width:'100%', padding:'12px 14px', border:'1px solid #E2E8F0', borderRadius:10, fontSize:14, marginBottom:10 }} />
        <button onClick={async () => {
          const r = await fetch('/api/stats?type=summary&days=1', { headers: { 'x-admin-password': pwd } })
          if (r.ok) setAuthed(true); else alert('비밀번호 오류')
        }} style={{ width:'100%', padding:'12px 14px', background:'#0EA5E9', color:'#fff', border:'none', borderRadius:10, fontWeight:700, cursor:'pointer' }}>로그인</button>
      </div>
    )
  }

  return (
    <div style={{ fontFamily: FONT_FAMILY, padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      <Head><title>트립스팟 검색유입 분석</title><meta name="robots" content="noindex,nofollow" /></Head>
      <h1 style={{ fontSize:22, fontWeight:800, marginBottom:14 }}>검색유입 분석</h1>
      <div style={{ display:'flex', gap:6, marginBottom:18 }}>
        {PRESETS.map(([k, label]) => (
          <button key={k} onClick={() => setDays(k)} style={{
            padding:'6px 14px', background: days===k ? '#0EA5E9' : '#F8FAFC',
            color: days===k ? '#fff' : '#334155', border:'none', borderRadius:8, fontWeight:600, cursor:'pointer'
          }}>{label}</button>
        ))}
      </div>

      {data.summary && (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:10, marginBottom:18 }}>
          <Card title={`최근 ${days}일`} value={data.summary.recent || 0} />
          <Card title="총 누적" value={data.summary.total || 0} />
          <Card title="키워드 종류" value={(data.keywords || []).length} />
        </div>
      )}

      <Section title="유입 채널">
        {(data.sources || []).map(s => <Row key={s.source} l={s.source} r={s.count} />)}
      </Section>
      <Section title="인기 페이지 TOP 15">
        {(data.pages || []).map(p => <Row key={p.slug} l={p.slug} r={p.count} />)}
      </Section>
      <Section title="인기 검색 키워드 TOP 15">
        {(data.keywords || []).length === 0 ? <Empty /> : data.keywords.map(k => <Row key={k.keyword} l={k.keyword} r={k.count} />)}
      </Section>
      <Section title="최근 유입 100건">
        {(data.recent || []).map((r, i) => (
          <div key={i} style={{ padding:'8px 0', borderBottom:'1px solid #F1F5F9', fontSize:12, color:'#475569' }}>
            <span style={{ color:'#94A3B8' }}>{(r.created_at || '').slice(0,16).replace('T',' ')}</span>
            {' · '}<span>{r.source || 'direct'}</span>
            {r.keyword ? <> · <strong>{r.keyword}</strong></> : null}
            {' → '}<a href={`/${r.slug}/`} style={{ color:'#0369A1' }}>{r.title || r.slug}</a>
          </div>
        ))}
      </Section>
    </div>
  )
}

function Card({ title, value }) {
  return (
    <div style={{ background:'#F8FAFC', border:'1px solid #E2E8F0', borderRadius:12, padding:'14px 18px' }}>
      <div style={{ fontSize:11, color:'#64748B', marginBottom:4 }}>{title}</div>
      <div style={{ fontSize:24, fontWeight:800, color:'#0F172A' }}>{value}</div>
    </div>
  )
}
function Section({ title, children }) {
  return (
    <section style={{ marginBottom:22 }}>
      <h2 style={{ fontSize:14, fontWeight:800, marginBottom:8, color:'#334155' }}>{title}</h2>
      <div style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:10, padding:'8px 14px' }}>{children}</div>
    </section>
  )
}
function Row({ l, r }) {
  return (
    <div style={{ display:'flex', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid #F1F5F9', fontSize:13 }}>
      <span style={{ color:'#475569' }}>{l}</span>
      <span style={{ color:'#0F172A', fontWeight:700 }}>{r}</span>
    </div>
  )
}
function Empty() { return <div style={{ padding:'12px 0', fontSize:13, color:'#94A3B8' }}>데이터가 없습니다.</div> }
