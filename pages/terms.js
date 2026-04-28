import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function Terms() {
  return (
    <Layout title="이용약관" description="트립스팟 이용약관. 사이트 이용 시 적용되는 일반 조건을 안내합니다.">
      <Breadcrumb items={[{ label:'이용약관' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>이용약관</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#334155' }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제1조 (목적)</h2>
        <p>본 약관은 트립스팟 사이트(이하 "본 사이트") 이용에 관한 일반 조건을 정합니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제2조 (서비스의 성격)</h2>
        <p>본 사이트는 여행 정보 큐레이션 서비스를 제공합니다. 호텔·항공권·여행 상품을 직접 판매·중개하지 않으며, 특정 호텔·항공사·여행사를 단정적으로 추천·알선하지 않습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제3조 (정보의 정확성)</h2>
        <p>본 사이트는 정보의 정확성을 위해 노력하나, 비자·여행경보·환율·호텔 가격 등의 변동으로 게재 정보와 실제 사이에 차이가 발생할 수 있습니다. 출국 전 외교부 해외안전여행(0404.go.kr) 및 호텔/항공사 공식 채널에서의 재확인은 사용자 책임입니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제4조 (저작권 및 이미지 라이선스)</h2>
        <p>본 사이트의 자체 작성 콘텐츠 저작권은 트립스팟에 귀속됩니다. 외부 출처(한국관광공사·Wikimedia·Unsplash·Pexels·호텔스컴바인 API)에서 가져온 이미지는 각 라이선스(공공누리·CC·파트너 약관)에 따라 표시됩니다. 자세한 내역은 <a href="/image-credits/" style={{ color:'#0369A1' }}>이미지 출처 페이지</a>에서 확인할 수 있습니다. 무단 복제·전재를 금합니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제5조 (책임 제한)</h2>
        <p>본 사이트는 사용자가 게재된 정보를 활용하여 행한 여행·예약·환전 등의 결정으로 발생한 손해에 대해 책임지지 않습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제6조 (약관 변경)</h2>
        <p>본 약관은 사이트 운영 사정에 따라 사전 통지 없이 변경될 수 있으며, 변경된 약관은 본 페이지 게재 시점부터 적용됩니다.</p>
      </div>
    </Layout>
  )
}
