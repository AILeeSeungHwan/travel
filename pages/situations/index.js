import Layout from '../../components/Layout'
import { GridCard } from '../../components/PostCard'
import situations from '../../data/situations'

export async function getStaticProps() {
  const items = situations.map(s => ({ ...s, category: 'situation', url: `/situations/${s.slug}/` }))
  return { props: { items } }
}

export default function SituationsHub({ items }) {
  return (
    <Layout title="상황별 여행 — 첫 해외·가족·신혼·100만원·럭셔리" description="첫 해외여행·아이와 함께·신혼여행·부모님 여행·100만원 예산·럭셔리 등 상황별 우선순위 가이드.">
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:8 }}>상황별 여행</h1>
      <p style={{ fontSize:14, color:'#64748B', marginBottom:24, lineHeight:1.7 }}>
        여행은 '누구와' '얼마로' '몇 박'으로 떠나느냐에 따라 우선순위가 완전히 달라집니다. 상황별 추천 목적지·예산·숙소·일정을 한 페이지에 정리했습니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:12 }}>
        {items.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}
