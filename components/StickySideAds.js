// 좌우 세로 스티키 광고 — Layout 에서 사용. 1280px 미만 뷰포트에서는 자동 숨김.
import AdUnit from './AdUnit'

export function SideAd({ side = 'left', slot }) {
  return (
    <aside
      className={`side-ad side-${side}`}
      aria-label={side === 'left' ? '좌측 광고' : '우측 광고'}
    >
      <div className="side-ad-sticky">
        <AdUnit slot={slot || (side === 'left' ? '3000000001' : '3000000002')} variant="vertical" minHeight={600} />
      </div>
      <style jsx>{`
        .side-ad { display: none; }
        .side-ad-sticky { position: sticky; top: 78px; }
        @media (min-width: 1280px) { .side-ad { display: block; } }
      `}</style>
    </aside>
  )
}
