import Layout from '../../components/Layout'
import { GridCard } from '../../components/PostCard'
import tools from '../../data/tools'

export async function getStaticProps() {
  const items = tools.map(t => ({ ...t, category: 'tool', url: `/tools/${t.slug}/` }))
  return { props: { items } }
}

export default function ToolsHub({ items }) {
  return (
    <Layout title="여행 계산기·도구 — 예산·비행시간·시차·환율·비자 체크" description="여행 예산·비행시간·시차·환율·짐 무게·비자 자동 체크 등 출국 전 필수 도구 모음.">
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:8 }}>여행 계산기·도구</h1>
      <p style={{ fontSize:14, color:'#64748B', marginBottom:24, lineHeight:1.7 }}>
        여행 예산·비행시간·시차·환율·짐 무게·비자 체크 등 출국 전 필요한 도구를 한 곳에 모았습니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))', gap:12 }}>
        {items.map(t => <GridCard key={t.slug} post={t} />)}
      </div>
    </Layout>
  )
}
