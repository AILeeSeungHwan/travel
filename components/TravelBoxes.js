// 여행 3단계 박스 — Info(참고·문화) / Warning(주의·환율·관습) / Risk(외교부 경보·금기·안전)

export function InfoBox({ children, html, title }) {
  return (
    <div style={{
      background:'#EFF6FF', borderLeft:'4px solid #0EA5E9', padding:'14px 18px',
      borderRadius:'0 10px 10px 0', margin:'16px 0', fontSize:14, lineHeight:1.7, color:'#075985'
    }}>
      {title && (
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6, fontWeight:800, color:'#0369A1' }}>
          <span>ℹ️</span><span>{title}</span>
        </div>
      )}
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}

export function WarningBox({ children, html, title }) {
  return (
    <div style={{
      background:'#FFFBEB', borderLeft:'4px solid #D97706', padding:'14px 18px',
      borderRadius:'0 10px 10px 0', margin:'16px 0', fontSize:14, lineHeight:1.7, color:'#78350F'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6, fontWeight:800, color:'#B45309' }}>
        <span>⚠️</span>
        <span>{title || '주의 · 출국 전 재확인 권장'}</span>
      </div>
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}

// 여행에서의 최상위 경고: 외교부 여행경보 / 분쟁지역 / 안전 위험
export function RiskBox({ children, html, title }) {
  return (
    <div style={{
      background:'#FEF2F2', border:'2px solid #DC2626', padding:'16px 20px',
      borderRadius:10, margin:'20px 0', fontSize:14, lineHeight:1.7, color:'#7F1D1D'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8, fontWeight:900, color:'#B91C1C', fontSize:15 }}>
        <span style={{ fontSize:18 }}>🚨</span>
        <span>{title || '여행경보 · 안전 주의'}</span>
      </div>
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}

export const EmergencyBox = RiskBox

export function TravelDisclaimer() {
  return (
    <div style={{
      background:'#F8FAFC', border:'1px solid #E2E8F0', padding:'16px 20px',
      borderRadius:10, margin:'32px 0 16px', fontSize:12, lineHeight:1.7, color:'#64748B'
    }}>
      <strong>여행 면책 안내</strong><br/>
      본 사이트는 호텔·항공·여행 상품을 직접 판매·중개하지 않습니다.
      비자·환율·여행경보·항공/호텔 가격 등은 변동성이 매우 크므로, 출국 전 외교부 해외안전여행(0404.go.kr)·각국 대사관·항공사·호텔 공식 채널에서 반드시 재확인하세요.
      게재된 호텔 평점·가격대는 호텔스컴바인 등 공시 시점 기준이며, 클릭 시점 가격과 다를 수 있습니다.
    </div>
  )
}

// 하위 호환: PostRenderer 가 'medDisclaimer'·'disclaimer' 모두 호출
export const MedicalDisclaimer = TravelDisclaimer
export const InsuranceDisclaimer = TravelDisclaimer

export function SourceList({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div style={{ marginTop:24, padding:'16px 20px', background:'#F8FAFC', borderRadius:10, border:'1px solid #E2E8F0' }}>
      <div style={{ fontSize:13, fontWeight:800, marginBottom:8, color:'#334155' }}>📚 출처 · 공식 자료</div>
      <ul style={{ listStyle:'none', padding:0, margin:0 }}>
        {items.map((s, i) => (
          <li key={i} style={{ fontSize:13, color:'#475569', marginBottom:6 }}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color:'#0369A1', textDecoration:'underline' }}>
              {s.label}
            </a>
            {s.org && <span style={{ marginLeft:6, color:'#94A3B8', fontSize:12 }}>· {s.org}</span>}
            {s.accessedAt && <span style={{ marginLeft:6, color:'#94A3B8', fontSize:11 }}>(참조일 {s.accessedAt})</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function YmylBadge({ level }) {
  const MAP = {
    A: { label: '비자·안전·법규', color: '#DC2626', bg: '#FEE2E2' },
    B: { label: '호텔·항공·교통', color: '#D97706', bg: '#FEF3C7' },
    C: { label: '여행 후기·문화', color: '#16A34A', bg: '#DCFCE7' },
  }
  const m = MAP[level] || MAP.C
  return (
    <span style={{
      fontSize:11, fontWeight:800, padding:'3px 8px', borderRadius:6,
      color: m.color, background: m.bg
    }}>Level {level} · {m.label}</span>
  )
}

// 이미지 라이선스 표기 캡션 (여행 사이트 핵심 의무)
export function ImageCredit({ source, license, credit, link }) {
  if (!source) return null
  return (
    <div style={{ fontSize:11, color:'#94A3B8', marginTop:6 }}>
      📷 {credit ? <>{credit} · </> : null}
      {link ? <a href={link} target="_blank" rel="noopener noreferrer" style={{ color:'#64748B' }}>{source}</a> : source}
      {license && <> · {license}</>}
    </div>
  )
}
