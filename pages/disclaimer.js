import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function Disclaimer() {
  return (
    <Layout title="여행 면책 안내" description="여행모아의 여행 정보는 일반적 설명이며, 비자·환율·여행경보·호텔 가격은 변동성이 큽니다. 출국 전 외교부·각국 대사관·호텔 공식 채널에서 재확인 필수.">
      <Breadcrumb items={[{ label:'여행 면책' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>여행 면책 안내</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#334155' }}>
        <p style={{ background:'#FEF2F2', border:'1px solid #FECACA', padding:'14px 18px', borderRadius:10, marginBottom:18, color:'#7F1D1D' }}>
          본 사이트는 <strong>호텔·항공권·여행 상품을 직접 판매·중개하지 않습니다</strong>. 호텔스컴바인 등 메타 검색 사이트의 가격 정보를 안내하며, 사용자가 클릭하면 해당 사이트로 연결됩니다. 여행 결정에 따른 책임은 여행자 본인에게 있습니다.
        </p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>1. 비자·출입국·여행경보 (Level A)</h2>
        <p>비자·출입국·외교부 여행경보 정보는 <strong>변경 빈도가 매우 높습니다</strong>. 본 사이트의 비자/안전 정보는 작성일 기준이며, 출국 전 반드시 외교부 해외안전여행(<a href="https://0404.go.kr/" target="_blank" rel="noopener noreferrer" style={{ color:'#B91C1C' }}>0404.go.kr</a>) 또는 해당 국가 대사관 공시를 재확인하세요.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>2. 호텔·항공·교통 가격 (Level B)</h2>
        <p>호텔 가격대는 호텔스컴바인 등 공시 시점 기준으로 <strong>클릭 시점·시즌·요금제에 따라 변동</strong>됩니다. 항공권 가격, 환율, 환전 수수료, 면세 한도, 비자 수수료도 같은 이유로 변동됩니다. 결제 직전 공식 채널에서 가격을 재확인하세요.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>3. 여행 후기·문화 정보 (Level C)</h2>
        <p>여행지 추천·후기·문화 정보는 자체 큐레이션이며 개인차가 있습니다. "직접 다녀온 후기"가 아닌 한국관광공사·관광청·호텔스컴바인 등의 평균 후기·자료를 기반으로 작성됩니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>4. 단정적 표현 배제</h2>
        <p>본 사이트는 "최저가 보장", "수수료 없음", "100% 안전" 같은 단정·권유 표현을 사용하지 않습니다. 특정 호텔·항공사·여행사를 추천·알선하지 않습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>5. 이미지 출처</h2>
        <p>본 사이트의 모든 이미지는 한국관광공사 TourAPI(공공누리), Wikimedia Commons(CC), Unsplash/Pexels API, 호텔스컴바인 API hot-link, 자체 OG 이미지 — 5개 출처에서만 수집합니다. 무단 다운로드 이미지는 사용하지 않으며, 자세한 내역은 <a href="/image-credits/" style={{ color:'#0369A1' }}>이미지 출처 페이지</a>에서 확인할 수 있습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>6. 광고 / 제휴</h2>
        <p>본 사이트는 Google AdSense 광고와 호텔스컴바인 어필리에이트, 그리고 일부 여행용품 페이지의 쿠팡 파트너스 제휴 수익으로 운영됩니다. Level A(비자·안전) 콘텐츠에는 어떠한 제휴 링크도 연결하지 않습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>7. 외부 링크</h2>
        <p>본 사이트는 공식 자료 확인을 위한 외부 링크를 제공합니다. 외부 사이트의 정보 정확성·약관·정책에 대해서는 각 사이트를 따릅니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>8. 면책의 변경</h2>
        <p>본 면책 내용은 사전 통지 없이 변경될 수 있으며, 최신 내용은 본 페이지에 게재된 시점이 기준입니다.</p>
      </div>
    </Layout>
  )
}
