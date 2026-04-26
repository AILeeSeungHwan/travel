import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import spots from '../data/spots'
import hotels from '../data/hotels'

export async function getStaticProps() {
  const items = []
  spots.forEach(s => (s.gallery || []).forEach(g => items.push({
    page: `/countries/${s.countrySlug}/regions/${s.regionSlug}/spots/${s.slug}/`,
    name: s.spotName, ...g,
  })))
  hotels.forEach(h => (h.gallery || []).forEach(g => items.push({
    page: `/hotels/${h.slug}/`,
    name: h.hotelName, ...g,
  })))
  return { props: { items } }
}

export default function ImageCredits({ items }) {
  return (
    <Layout title="이미지 출처 / Credits" description="여행모아에 사용된 모든 이미지의 출처·라이선스·작가명 일괄 표기 페이지.">
      <Breadcrumb items={[{ label:'이미지 출처' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>이미지 출처 / Credits</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#334155' }}>
        <p>여행모아에 사용된 모든 이미지의 출처와 라이선스를 일괄 표기합니다. DMCA·저작권 문의는 <a href="/contact/" style={{ color:'#0369A1' }}>문의 페이지</a>를 통해 보내주세요.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>허용된 이미지 출처</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li><strong>한국관광공사 TourAPI</strong> — 공공누리 1유형, 국내 관광지·문화유산</li>
          <li><strong>Wikimedia Commons</strong> — CC BY / CC BY-SA / Public Domain, 해외 도시·랜드마크</li>
          <li><strong>Unsplash / Pexels API</strong> — 분위기·배경 이미지</li>
          <li><strong>호텔스컴바인 API hot-link</strong> — 호텔 객실/외관 (다운로드 금지·IMG src로만)</li>
          <li><strong>자체 OG 이미지</strong> — 포스트별 메인 이미지</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>이미지 별 출처 일괄 표기</h2>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
          <thead>
            <tr style={{ background:'#F8FAFC', textAlign:'left' }}>
              <th style={{ padding:'10px 8px', borderBottom:'1px solid #E2E8F0' }}>페이지</th>
              <th style={{ padding:'10px 8px', borderBottom:'1px solid #E2E8F0' }}>이미지</th>
              <th style={{ padding:'10px 8px', borderBottom:'1px solid #E2E8F0' }}>출처</th>
              <th style={{ padding:'10px 8px', borderBottom:'1px solid #E2E8F0' }}>라이선스</th>
              <th style={{ padding:'10px 8px', borderBottom:'1px solid #E2E8F0' }}>작가</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i}>
                <td style={{ padding:'8px', borderBottom:'1px solid #F1F5F9' }}><a href={it.page} style={{ color:'#0369A1' }}>{it.name}</a></td>
                <td style={{ padding:'8px', borderBottom:'1px solid #F1F5F9' }}>{it.alt || '-'}</td>
                <td style={{ padding:'8px', borderBottom:'1px solid #F1F5F9' }}>{it.source}</td>
                <td style={{ padding:'8px', borderBottom:'1px solid #F1F5F9' }}>{it.license}</td>
                <td style={{ padding:'8px', borderBottom:'1px solid #F1F5F9' }}>{it.credit}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={{ marginTop:18, fontSize:13, color:'#64748B' }}>
          ※ 본 페이지는 새 콘텐츠 추가 시 자동으로 갱신됩니다. 이미지 사용에 대해 이의가 있는 저작권자는 <a href="/contact/" style={{ color:'#0369A1' }}>문의 페이지</a>로 연락 주시면 24시간 이내 검토·조치합니다.
        </p>
      </div>
    </Layout>
  )
}
