import Layout from '../../components/Layout'
import { GridCard } from '../../components/PostCard'
import guides from '../../data/guides'

export async function getStaticProps() {
  const items = guides.map(g => ({ ...g, category: 'guide', url: `/guides/${g.slug}/` }))
  return { props: { items } }
}

export default function GuidesHub({ items }) {
  return (
    <Layout title="여행 가이드 — 비자·안전·환율·면세·짐 싸기" description="비자·외교부 여행경보·환율·면세 한도·첫 해외여행·짐 싸기 등 출국 전 필수 가이드 모음.">
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:8 }}>여행 가이드</h1>
      <p style={{ fontSize:14, color:'#64748B', marginBottom:24, lineHeight:1.7 }}>
        비자·여행경보·환율·면세 한도 같은 변동성 큰 정보는 외교부 해외안전여행(0404.go.kr) 기준으로 작성됐으며, 출국 전 재확인이 필수입니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:12 }}>
        {items.map(g => <GridCard key={g.slug} post={g} />)}
      </div>
    </Layout>
  )
}
