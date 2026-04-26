// 멀티플렉스 (autorelaxed) 광고 — 두 번째 H2 직전에 고정 삽입
import AdUnit from './AdUnit'

export default function MultiplexAd({ slot }) {
  return (
    <div style={{ margin:'28px 0' }}>
      <div style={{ fontSize:11, color:'#9ca3af', marginBottom:6, textAlign:'center' }}>— 추천 콘텐츠 —</div>
      <AdUnit slot={slot || '2000000000'} variant="multiplex" minHeight={320} />
    </div>
  )
}
