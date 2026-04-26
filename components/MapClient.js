// LeafletMap 의 SSR-off dynamic import 래퍼
// Leaflet 은 window 객체를 요구하므로 클라이언트에서만 로드

import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div style={{
      height: 320, background:'#F0FDFA', border:'1px solid #E2E8F0', borderRadius:12,
      display:'flex', alignItems:'center', justifyContent:'center',
      fontSize:13, color:'#64748B', marginBottom:18,
    }}>
      🗺️ 지도 로딩 중…
    </div>
  ),
})

export default LeafletMap
