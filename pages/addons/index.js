import Layout from '../../components/Layout'
import { GridCard } from '../../components/PostCard'
import addons from '../../data/addons'

export async function getStaticProps() {
  const items = addons.map(a => ({ ...a, category: 'addon', url: `/addons/${a.slug}/` }))
  return { props: { items } }
}

export default function AddonsHub({ items }) {
  return (
    <Layout title="여행용품 — 캐리어·어댑터·보조배터리·여권지갑" description="캐리어·여행어댑터·보조배터리·여권지갑·목베개·압축팩 등 여행용품 추천(쿠팡 파트너스).">
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:8 }}>여행용품</h1>
      <p style={{ fontSize:14, color:'#64748B', marginBottom:24, lineHeight:1.7 }}>
        본 카테고리는 호텔·항공권 가격과 무관한 보조 여행용품 정보입니다. 일부 페이지에는 쿠팡 파트너스 활동의 일환으로 제휴 링크가 포함됩니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:12 }}>
        {items.map(a => <GridCard key={a.slug} post={a} />)}
      </div>
    </Layout>
  )
}
