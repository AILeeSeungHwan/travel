import { useState, useEffect } from 'react'
import Head from 'next/head'

const FONT_FAMILY = "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif"

export default function Admin() {
  const [pwd, setPwd] = useState('')
  const [authed, setAuthed] = useState(false)
  const [tab, setTab] = useState('stats')
  const [stats, setStats] = useState(null)
  const [links, setLinks] = useState([])
  const [search, setSearch] = useState('')
  const [seeding, setSeeding] = useState(false)

  useEffect(() => {
    if (!authed) return
    refresh()
  }, [authed, tab, search])

  async function refresh() {
    const headers = { 'x-admin-password': pwd, 'content-type': 'application/json' }
    if (tab === 'stats') {
      const [s, p, k, src] = await Promise.all([
        fetch(`/api/stats?type=summary&days=7`, { headers }).then(r => r.ok ? r.json() : null),
        fetch(`/api/stats?type=pages&days=7`,   { headers }).then(r => r.ok ? r.json() : []),
        fetch(`/api/stats?type=keywords&days=7`,{ headers }).then(r => r.ok ? r.json() : []),
        fetch(`/api/stats?type=sources&days=7`, { headers }).then(r => r.ok ? r.json() : []),
      ])
      setStats({ summary: s, pages: p, keywords: k, sources: src })
    } else if (tab === 'coupang') {
      const r = await fetch(`/api/coupang?search=${encodeURIComponent(search)}`, { headers })
      const data = r.ok ? await r.json() : []
      setLinks(data)
    }
  }

  async function seed() {
    if (!confirm('coupang-seed.json 의 항목을 DB에 일괄 삽입할까요?')) return
    setSeeding(true)
    const r = await fetch('/api/admin/seed-coupang', {
      method: 'POST',
      headers: { 'x-admin-password': pwd, 'content-type': 'application/json' },
    })
    const j = await r.json()
    setSeeding(false)
    alert(`inserted: ${j.inserted}, skipped: ${j.skipped}`)
    refresh()
  }

  async function updateUrl(id, coupang_url) {
    const target = links.find(l => l.id === id)
    if (!target) return
    await fetch(`/api/coupang?id=${id}`, {
      method: 'PUT',
      headers: { 'x-admin-password': pwd, 'content-type': 'application/json' },
      body: JSON.stringify({ ...target, coupang_url }),
    })
    refresh()
  }

  if (!authed) {
    return (
      <div style={{ fontFamily: FONT_FAMILY, padding: 40, maxWidth: 420, margin: '80px auto' }}>
        <Head><title>여행모아 어드민</title><meta name="robots" content="noindex,nofollow" /></Head>
        <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>여행모아 어드민</h1>
        <input
          type="password" value={pwd} onChange={e => setPwd(e.target.value)} placeholder="ADMIN_PASSWORD"
          style={{ width:'100%', padding:'12px 14px', border:'1px solid #E2E8F0', borderRadius:10, fontSize:14, marginBottom:10 }}
        />
        <button onClick={async () => {
          const r = await fetch('/api/stats?type=summary&days=1', { headers: { 'x-admin-password': pwd } })
          if (r.ok) setAuthed(true); else alert('비밀번호 오류')
        }} style={{ width:'100%', padding:'12px 14px', background:'#0EA5E9', color:'#fff', border:'none', borderRadius:10, fontWeight:700, cursor:'pointer' }}>로그인</button>
      </div>
    )
  }

  return (
    <div style={{ fontFamily: FONT_FAMILY, padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      <Head><title>여행모아 어드민</title><meta name="robots" content="noindex,nofollow" /></Head>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>여행모아 어드민</h1>
      <div style={{ display:'flex', gap:8, marginBottom:18, borderBottom:'1px solid #E2E8F0', paddingBottom:8 }}>
        {[['stats','통계'],['coupang','쿠팡 링크 관리']].map(([k, label]) => (
          <button key={k} onClick={() => setTab(k)} style={{
            padding:'8px 16px', background: tab===k ? '#0EA5E9' : '#F8FAFC',
            color: tab===k ? '#fff' : '#334155', border:'none', borderRadius:8, fontWeight:600, cursor:'pointer'
          }}>{label}</button>
        ))}
      </div>

      {tab === 'stats' && stats && (
        <div>
          {stats.summary && (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:12, marginBottom:18 }}>
              <Card title="총 페이지뷰" value={stats.summary.total} />
              <Card title="최근 7일" value={stats.summary.recent} />
            </div>
          )}
          <Section title="인기 페이지 TOP 15">
            {(stats.pages || []).map(p => <Row key={p.slug} l={p.slug} r={p.count} />)}
          </Section>
          <Section title="인기 검색어 TOP 15">
            {(stats.keywords || []).length === 0 ? <Empty /> : stats.keywords.map(k => <Row key={k.keyword} l={k.keyword} r={k.count} />)}
          </Section>
          <Section title="유입 채널">
            {(stats.sources || []).map(s => <Row key={s.source} l={s.source} r={s.count} />)}
          </Section>
        </div>
      )}

      {tab === 'coupang' && (
        <div>
          <div style={{ display:'flex', gap:10, marginBottom:14 }}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="제품명 검색"
              style={{ flex:1, padding:'10px 12px', border:'1px solid #E2E8F0', borderRadius:8 }} />
            <button onClick={seed} disabled={seeding} style={{ padding:'10px 16px', background:'#14B8A6', color:'#fff', border:'none', borderRadius:8, fontWeight:700, cursor:'pointer' }}>
              {seeding ? '시드 중…' : 'coupang-seed.json 일괄 로드'}
            </button>
          </div>
          <div>
            {links.map(l => (
              <div key={l.id} style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:10, padding:'12px 14px', marginBottom:8 }}>
                <div style={{ fontWeight:700, marginBottom:4 }}>{l.product_name} <span style={{ fontSize:11, color:'#94A3B8' }}>· {l.category}</span></div>
                <div style={{ fontSize:12, color:'#64748B', marginBottom:6 }}>슬러그: {(l.post_slugs || []).join(', ')}</div>
                <input
                  defaultValue={l.coupang_url || ''}
                  onBlur={e => updateUrl(l.id, e.target.value)}
                  placeholder="쿠팡 파트너스 URL"
                  style={{ width:'100%', padding:'8px 10px', border:'1px solid #E2E8F0', borderRadius:6, fontSize:13 }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
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
function Empty() {
  return <div style={{ padding:'12px 0', fontSize:13, color:'#94A3B8' }}>아직 데이터가 없습니다.</div>
}
