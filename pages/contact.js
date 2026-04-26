import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function Contact() {
  return (
    <Layout title="문의" description="여행모아 정보 오류 신고·이미지 라이선스 문의·콘텐츠 제휴 문의 안내.">
      <Breadcrumb items={[{ label:'문의' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>문의 / 오류 신고</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#334155' }}>
        <p>본 사이트의 정보 오류·정정 요청·이미지 라이선스 문의·콘텐츠 제휴 문의는 아래 이메일로 보내주세요.</p>
        <p style={{ marginTop:18, fontSize:18, fontWeight:800 }}>
          📧 <a href="mailto:cocoboogiwoo@gmail.com" style={{ color:'#0369A1' }}>cocoboogiwoo@gmail.com</a>
        </p>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>회신 안내</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>영업일 기준 3~7일 이내 회신을 목표로 합니다.</li>
          <li>오류 신고는 페이지 URL과 해당 부분을 함께 알려주시면 빠르게 처리됩니다.</li>
          <li>이미지 라이선스 문제(DMCA 포함)는 사진의 출처·작가명·사용 페이지 URL을 함께 알려주시면 즉시 검토합니다.</li>
          <li>개별 호텔 예약·항공권 변경은 본 사이트의 운영 범위가 아닙니다 — 호텔 공식 채널·항공사·예약 사이트로 문의해야 합니다.</li>
        </ul>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>공식 기관 연결</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>외교부 영사콜센터: <a href="https://www.0404.go.kr/" target="_blank" rel="noopener noreferrer" style={{ color:'#0369A1' }}>0404.go.kr</a> · 국내 +82-2-3210-0404</li>
          <li>한국관광공사: <a href="https://www.visitkorea.or.kr" target="_blank" rel="noopener noreferrer" style={{ color:'#0369A1' }}>visitkorea.or.kr</a></li>
          <li>한국소비자원: <a href="https://www.kca.go.kr" target="_blank" rel="noopener noreferrer" style={{ color:'#0369A1' }}>kca.go.kr</a></li>
        </ul>
      </div>
    </Layout>
  )
}
