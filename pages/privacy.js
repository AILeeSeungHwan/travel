import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function Privacy() {
  return (
    <Layout title="개인정보 처리방침" description="보험모아는 사용자 개인정보를 수집하지 않으며 GA·Clarity 등 표준 분석 도구만 사용합니다.">
      <Breadcrumb items={[{ label:'개인정보' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>개인정보 처리방침</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#374151' }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>1. 수집하는 정보</h2>
        <p>본 사이트는 회원가입·로그인 기능이 없으며, 사용자에게 직접 개인정보(이름·연락처·주민번호 등)를 입력받지 않습니다. 다만 다음과 같은 비식별 데이터가 통계 목적으로 수집될 수 있습니다.</p>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>접속 IP, 브라우저, OS, 화면 크기 등 기술 정보</li>
          <li>방문 페이지 경로, 체류 시간, 유입 경로</li>
          <li>Google Analytics(GA4) 표준 이벤트, Microsoft Clarity 세션 레코딩</li>
          <li>Google AdSense 광고 표시·클릭에 따른 쿠키</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>2. 이용 목적</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>사이트 사용성 개선과 콘텐츠 품질 점검</li>
          <li>광고 노출 최적화 (개인 식별 정보 미사용)</li>
          <li>보안 침해 시도 차단</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>3. 제3자 제공</h2>
        <p>법령에 따른 의무가 발생하지 않는 한 사용자 정보를 제3자에게 제공하지 않습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>4. 쿠키 사용 동의 / 거부</h2>
        <p>대부분의 브라우저는 설정에서 쿠키 저장 거부가 가능합니다. 거부 시 일부 기능(광고 개인화 등)이 제한될 수 있습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>5. 보유 기간</h2>
        <p>방문 통계 데이터는 통상 12~24개월 보관 후 자동 삭제됩니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>6. 책임자 / 문의</h2>
        <p>개인정보 관련 문의는 <a href="/contact/" style={{ color:'#0369A1' }}>문의 페이지</a>로 연락 부탁드립니다.</p>
      </div>
    </Layout>
  )
}
