import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function About() {
  return (
    <Layout title="소개" description="트립스팟은 한국관광공사·외교부·각국 관광청 자료를 기반으로 여행 정보를 정리하는 큐레이터 사이트입니다.">
      <Breadcrumb items={[{ label:'소개' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>트립스팟 소개</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#334155' }}>
        <p style={{ marginBottom:14 }}>
          <strong>트립스팟(tripspot)</strong>는 국내·해외 여행을 준비하는 분들이 한국관광공사·외교부·각국 관광청·호텔스컴바인 등 공식 출처 자료를 손쉽게 비교·이해할 수 있도록 정리하는 <strong>여행 정보 큐레이터 사이트</strong>입니다.
          국가 → 지역 → 스팟 3단계 허브 구조로 어떤 여행자든 자신의 여행지·예산·일정에 맞는 정보를 빠르게 찾을 수 있도록 설계했습니다.
        </p>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>이 사이트의 포지셔닝</h2>
        <p style={{ marginBottom:14 }}>
          본 사이트는 <strong>호텔·항공권을 직접 판매하거나 중개하지 않습니다</strong>. 호텔스컴바인 등 메타 검색 사이트의 가격 정보를 안내하고, 사용자가 클릭하면 해당 사이트로 연결됩니다. 여행자보험·렌터카 등도 마찬가지로 비교 가이드 형태로만 안내합니다.
        </p>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>이미지 출처 정책</h2>
        <p style={{ marginBottom:14 }}>
          본 사이트의 모든 이미지는 (1) 한국관광공사 TourAPI(공공누리), (2) Wikimedia Commons(CC), (3) Unsplash/Pexels API, (4) 호텔스컴바인 API hot-link, (5) 자체 제작 OG 이미지 — 이 5개 출처에서만 수집합니다. 무단 다운로드 이미지는 사용하지 않습니다. 자세한 내역은 <a href="/image-credits/" style={{ color:'#0369A1' }}>이미지 출처 페이지</a>에서 확인할 수 있습니다.
        </p>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>운영 자금 출처</h2>
        <p style={{ marginBottom:14 }}>
          본 사이트는 <strong>Google AdSense 광고 수익과 호텔스컴바인 어필리에이트 수익, 그리고 일부 여행용품 페이지의 쿠팡 파트너스 제휴 수익</strong>으로 운영됩니다. 비자·안전·여행경보 같은 Level A 콘텐츠에는 어떠한 제휴 링크도 연결하지 않습니다.
        </p>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>편집 정책</h2>
        <p style={{ marginBottom:14 }}>
          모든 포스트는 <a href="/editorial-policy/" style={{ color:'#0369A1' }}>편집 정책</a>에 따라 작성됩니다. 정보 오류를 발견하면 <a href="/contact/" style={{ color:'#0369A1' }}>문의 페이지</a>로 알려주시면 검토 후 수정합니다.
        </p>
      </div>
    </Layout>
  )
}
