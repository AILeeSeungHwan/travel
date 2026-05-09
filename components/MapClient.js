// LeafletMap SSR-off dynamic import 래퍼
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div style={{
      height: 340,
      background: 'linear-gradient(160deg, #f0f9ff, #ecfdf5)',
      border: '1px solid rgba(14,165,233,0.15)',
      borderRadius: 20, marginBottom: 20,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 10,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        border: '3px solid #E2E8F0', borderTopColor: '#0EA5E9',
        animation: 'spin 0.8s linear infinite',
      }} />
      <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 600 }}>지도 불러오는 중…</div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  ),
})

export default LeafletMap
