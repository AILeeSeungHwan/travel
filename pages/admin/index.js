import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'

const FONT_FAMILY = "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif"

export default function Admin() {
  const [pwd, setPwd] = useState('')
  const [authed, setAuthed] = useState(false)
  const [tab, setTab] = useState('stats')
  const [stats, setStats] = useState(null)
  const [coupangLinks, setCoupangLinks] = useState([])
  const [hotelLinks, setHotelLinks] = useState([])
  const [search, setSearch] = useState('')
  const [seeding, setSeeding] = useState(false)
  const [savingId, setSavingId] = useState(null)

  const refresh = useCallback(async () => {
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
      setCoupangLinks(r.ok ? await r.json() : [])
    } else if (tab === 'hotels') {
      const r = await fetch(`/api/admin/hotel-links`, { headers })
      setHotelLinks(r.ok ? await r.json() : [])
    }
  }, [pwd, tab, search])

  useEffect(() => { if (authed) refresh() }, [authed, tab, search, refresh])

  async function seedCoupang() {
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

  async function seedHotels() {
    if (!confirm('data/hotels.js 의 호텔 메타를 hotel_links 테이블에 일괄 등록(또는 업데이트)할까요?')) return
    setSeeding(true)
    const r = await fetch('/api/admin/hotel-links', {
      method: 'PATCH',
      headers: { 'x-admin-password': pwd, 'content-type': 'application/json' },
    })
    const j = await r.json()
    setSeeding(false)
    alert(`등록/갱신: ${j.inserted ?? 0} 건`)
    refresh()
  }

  async function updateCoupangUrl(id, coupang_url) {
    const target = coupangLinks.find(l => l.id === id)
    if (!target) return
    setSavingId(id)
    await fetch(`/api/coupang?id=${id}`, {
      method: 'PUT',
      headers: { 'x-admin-password': pwd, 'content-type': 'application/json' },
      body: JSON.stringify({ ...target, coupang_url }),
    })
    setSavingId(null)
    refresh()
  }

  async function updateHotelLink(id, fields) {
    const target = hotelLinks.find(l => l.id === id)
    if (!target) return
    setSavingId(id)
    const merged = { ...target, ...fields }
    await fetch(`/api/admin/hotel-links?id=${id}`, {
      method: 'PUT',
      headers: { 'x-admin-password': pwd, 'content-type': 'application/json' },
      body: JSON.stringify(merged),
    })
    setSavingId(null)
    refresh()
  }

  async function deleteHotelLink(id) {
    if (!confirm('이 호텔 링크 항목을 삭제할까요?')) return
    await fetch(`/api/admin/hotel-links?id=${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': pwd },
    })
    refresh()
  }

  async function addHotel() {
    const slug = prompt('호텔 슬러그 (예: shilla-jeju)')
    if (!slug) return
    const name = prompt('호텔 이름 (선택)')
    await fetch(`/api/admin/hotel-links`, {
      method: 'POST',
      headers: { 'x-admin-password': pwd, 'content-type': 'application/json' },
      body: JSON.stringify({ hotel_slug: slug, hotel_name: name }),
    })
    refresh()
  }

  if (!authed) {
    return (
      <div style={{ fontFamily: FONT_FAMILY, padding: 40, maxWidth: 420, margin: '80px auto' }}>
        <Head><title>트립스팟 어드민</title><meta name="robots" content="noindex,nofollow" /></Head>
        <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>트립스팟 어드민</h1>
        <input
          type="password" value={pwd} onChange={e => setPwd(e.target.value)} placeholder="ADMIN_PASSWORD"
          onKeyDown={async e => { if (e.key === 'Enter') {
            const r = await fetch('/api/stats?type=summary&days=1', { headers: { 'x-admin-password': pwd } })
            if (r.ok) setAuthed(true); else alert('비밀번호 오류')
          }}}
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
      <Head><title>트립스팟 어드민</title><meta name="robots" content="noindex,nofollow" /></Head>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>트립스팟 어드민</h1>
      <div style={{ display:'flex', gap:8, marginBottom:18, borderBottom:'1px solid #E2E8F0', paddingBottom:8, flexWrap:'wrap' }}>
        {[['stats','📊 통계'],['hotels','🏨 호텔 링크'],['coupang','🛒 쿠팡 링크']].map(([k, label]) => (
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

      {tab === 'hotels' && (
        <div>
          <Help />
          <div style={{ display:'flex', gap:10, marginBottom:14, flexWrap:'wrap' }}>
            <button onClick={seedHotels} disabled={seeding} style={btnPrimary}>
              {seeding ? '동기화 중…' : '📥 data/hotels.js → DB 일괄 동기화'}
            </button>
            <button onClick={addHotel} style={btnSecondary}>＋ 호텔 추가</button>
            <button onClick={refresh} style={btnSecondary}>↻ 새로고침</button>
          </div>
          {hotelLinks.length === 0 && (
            <Empty msg="등록된 호텔이 없습니다. 먼저 '📥 data/hotels.js → DB 일괄 동기화' 버튼을 눌러주세요." />
          )}
          {hotelLinks.map(h => (
            <HotelRow key={h.id} hotel={h} onUpdate={updateHotelLink} onDelete={deleteHotelLink} saving={savingId === h.id} />
          ))}
        </div>
      )}

      {tab === 'coupang' && (
        <div>
          <div style={{ display:'flex', gap:10, marginBottom:14 }}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="제품명 검색"
              style={{ flex:1, padding:'10px 12px', border:'1px solid #E2E8F0', borderRadius:8 }} />
            <button onClick={seedCoupang} disabled={seeding} style={btnPrimary}>
              {seeding ? '시드 중…' : 'coupang-seed.json 일괄 로드'}
            </button>
          </div>
          <div>
            {coupangLinks.map(l => (
              <div key={l.id} style={{ background:'#fff', border:'1px solid #E2E8F0', borderRadius:10, padding:'12px 14px', marginBottom:8 }}>
                <div style={{ fontWeight:700, marginBottom:4 }}>{l.product_name} <span style={{ fontSize:11, color:'#94A3B8' }}>· {l.category}</span></div>
                <div style={{ fontSize:12, color:'#64748B', marginBottom:6 }}>슬러그: {(l.post_slugs || []).join(', ')}</div>
                <input
                  defaultValue={l.coupang_url || ''}
                  onBlur={e => updateCoupangUrl(l.id, e.target.value)}
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

function HotelRow({ hotel, onUpdate, onDelete, saving }) {
  const [deeplink, setDeeplink] = useState(hotel.deeplink || '')
  const [hotelId, setHotelId] = useState(hotel.hotelscombined_id || '')
  const [notes, setNotes] = useState(hotel.notes || '')
  const dirty = deeplink !== (hotel.deeplink || '') || hotelId !== (hotel.hotelscombined_id || '') || notes !== (hotel.notes || '')

  return (
    <div style={{
      background:'#fff', border: hotel.verified ? '1px solid #14B8A6' : '1px solid #E2E8F0',
      borderRadius:10, padding:'14px 16px', marginBottom:10,
    }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
        <div>
          <div style={{ fontWeight:800, fontSize:15, color:'#0F172A' }}>
            {hotel.hotel_name || hotel.hotel_slug}
            {hotel.verified && <span style={{ marginLeft:8, fontSize:10, padding:'2px 6px', background:'#CCFBF1', color:'#0F766E', borderRadius:4 }}>✓ 인증됨</span>}
          </div>
          <div style={{ fontSize:11, color:'#94A3B8', marginTop:2 }}>슬러그: <code>{hotel.hotel_slug}</code> · 페이지: <a href={`/hotels/${hotel.hotel_slug}/`} target="_blank" rel="noreferrer" style={{ color:'#0369A1' }}>/hotels/{hotel.hotel_slug}/</a></div>
        </div>
        <button onClick={() => onDelete(hotel.id)} style={{ background:'transparent', border:'none', color:'#94A3B8', cursor:'pointer', fontSize:18 }}>×</button>
      </div>

      <label style={lblStyle}>호텔스컴바인 딥링크 (LinkPrice 변환 URL)</label>
      <input
        type="url" value={deeplink} onChange={e => setDeeplink(e.target.value)}
        placeholder="https://lpweb.kr/click.php?m=hcombine2&a=A100692599&l=0000&url=..."
        style={inputStyle}
      />

      <div style={{ display:'flex', gap:8, marginTop:8 }}>
        <div style={{ flex:1 }}>
          <label style={lblStyle}>호텔스컴바인 호텔 ID (선택)</label>
          <input value={hotelId} onChange={e => setHotelId(e.target.value)} placeholder="예: 12345" style={inputStyle} />
        </div>
        <div style={{ flex:2 }}>
          <label style={lblStyle}>메모</label>
          <input value={notes} onChange={e => setNotes(e.target.value)} placeholder="가입 일자, 검증 결과 등" style={inputStyle} />
        </div>
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:10 }}>
        <div style={{ fontSize:11, color:'#94A3B8' }}>
          최종 갱신: {(hotel.updated_at || '').slice(0, 16).replace('T', ' ')}
        </div>
        <div style={{ display:'flex', gap:6 }}>
          {deeplink && (
            <a href={deeplink} target="_blank" rel="noreferrer" style={{ ...btnSecondary, textDecoration:'none', fontSize:12, padding:'6px 12px' }}>
              🔗 테스트 클릭
            </a>
          )}
          <button
            disabled={!dirty || saving}
            onClick={() => onUpdate(hotel.id, { deeplink, hotelscombined_id: hotelId, notes })}
            style={{ ...btnPrimary, opacity: dirty ? 1 : 0.4, cursor: dirty ? 'pointer' : 'not-allowed' }}
          >
            {saving ? '저장 중…' : '💾 저장'}
          </button>
        </div>
      </div>
    </div>
  )
}

function Help() {
  return (
    <div style={{
      background:'#FFFBEB', border:'1px solid #F59E0B', borderRadius:10,
      padding:'12px 16px', marginBottom:16, fontSize:13, lineHeight:1.65, color:'#78350F',
    }}>
      <strong style={{ color:'#92400E' }}>💡 호텔 딥링크 만드는 법 (LinkPrice)</strong>
      <ol style={{ margin:'6px 0 0 18px', padding:0 }}>
        <li><a href="https://www.linkprice.com/" target="_blank" rel="noreferrer" style={{ color:'#0369A1' }}>LinkPrice</a> 로그인 → 어필리에이트 → <strong>호텔스컴바인</strong> 머천트</li>
        <li>"딥링크" 입력란에 변환할 호텔 페이지 URL 붙여넣기 (예: <code>https://www.hotelscombined.com/Hotel/12345</code>)</li>
        <li>"딥링크 변환" 버튼 → 변환된 URL 복사</li>
        <li>아래 호텔별 입력란에 붙여넣기 → <strong>저장</strong> 클릭</li>
      </ol>
      <div style={{ marginTop:6, fontSize:11, color:'#A16207' }}>
        ※ 비워두면 글로벌 폴백 URL(메인 페이지) 사용. 특정 호텔 직링크가 더 높은 전환율.
      </div>
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
function Empty({ msg }) {
  return <div style={{ padding:'18px 14px', fontSize:13, color:'#94A3B8', textAlign:'center', background:'#F8FAFC', borderRadius:8 }}>{msg || '아직 데이터가 없습니다.'}</div>
}

const inputStyle = { width:'100%', padding:'8px 10px', border:'1px solid #E2E8F0', borderRadius:6, fontSize:13, fontFamily: FONT_FAMILY }
const lblStyle = { fontSize:11, fontWeight:700, color:'#475569', marginBottom:4, display:'block' }
const btnPrimary = { padding:'9px 14px', background:'linear-gradient(135deg, #0EA5E9, #14B8A6)', color:'#fff', border:'none', borderRadius:8, fontWeight:700, cursor:'pointer', fontSize:13 }
const btnSecondary = { padding:'9px 14px', background:'#F1F5F9', color:'#334155', border:'1px solid #E2E8F0', borderRadius:8, fontWeight:600, cursor:'pointer', fontSize:13 }
