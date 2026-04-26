import { useEffect, useRef, useState } from 'react'

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || ''

/**
 * 범용 AdSense 광고 컴포넌트
 * - IntersectionObserver 로 뷰포트 200px 이내 진입 시에만 push
 * - 개발 환경에선 placeholder 표시
 *
 * variant:
 *   'auto'       — 기본 반응형 (본문 삽입용)
 *   'rectangle'  — 상단 2분할용 (336x280 주변)
 *   'vertical'   — 사이드 스카이스크래퍼 (160x600 / 300x600)
 *   'multiplex'  — 멀티플렉스 광고 (두 번째 H2용)
 */
export default function AdUnit({ slot, variant = 'auto', style, minHeight }) {
  const containerRef = useRef(null)
  const pushed = useRef(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect() }
    }, { rootMargin: '300px' })
    obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || pushed.current) return
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') return
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch (_) {}
  }, [inView])

  // slot/format 변형
  const slotId = slot || '0000000000'
  const fmt = variant === 'vertical' ? 'vertical'
           : variant === 'rectangle' ? 'rectangle'
           : variant === 'multiplex' ? 'autorelaxed'
           : 'auto'

  const baseMinH = minHeight ?? (variant === 'vertical' ? 600 : variant === 'rectangle' ? 250 : variant === 'multiplex' ? 300 : 100)

  // 개발환경 플레이스홀더
  if (process.env.NODE_ENV !== 'production') {
    const dashed = variant === 'vertical' ? '세로 스카이스크래퍼 160×600'
                 : variant === 'rectangle' ? '사각 광고 336×280'
                 : variant === 'multiplex' ? '멀티플렉스 추천 광고'
                 : '반응형 광고'
    return (
      <div style={{
        background:'#fef9c3', border:'1.5px dashed #ca8a04', borderRadius:8,
        padding:'14px 12px', textAlign:'center', fontSize:12, color:'#92400e',
        minHeight: baseMinH, display:'flex', alignItems:'center', justifyContent:'center',
        margin:'14px 0', ...style
      }}>
        📢 {dashed} <span style={{opacity:.6}}>(slot: {slotId})</span>
      </div>
    )
  }

  if (!ADSENSE_ID) return null

  return (
    <div ref={containerRef} style={{ margin:'14px 0', textAlign:'center', overflow:'hidden', minHeight: inView ? 'auto' : baseMinH, ...style }}>
      {inView && (
        <ins className="adsbygoogle" style={{ display:'block' }}
          data-ad-client={ADSENSE_ID}
          data-ad-slot={slotId}
          data-ad-format={fmt}
          data-full-width-responsive="true" />
      )}
    </div>
  )
}
