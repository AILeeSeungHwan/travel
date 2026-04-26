import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import addons from '../../data/addons'

export async function getStaticPaths() {
  return { paths: addons.map(a => ({ params: { slug: a.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = addons.find(a => a.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/addons/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  return { props: { meta, postData } }
}

export default function AddonDetail({ meta, postData }) {
  const breadcrumbItems = [
    { name: '여행용품', url: '/addons/' },
    { name: meta.title },
  ]
  const fallbackSections = [
    { type: 'intro', html: `${meta.summary}<br/><br/>${meta.description}` },
    { type: 'h2', id: 'features', text: '핵심 특징' },
    { type: 'body', html: '제품 카테고리별 특징·재질·사용감 비교는 본문 업데이트 시 추가됩니다.' },
    { type: 'h2', id: 'usage', text: '사용법' },
    { type: 'body', html: '여행 시 사용 시나리오·주의사항은 본문 업데이트 시 추가됩니다.' },
    { type: 'h2', id: 'caution', text: '주의사항' },
    { type: 'body', html: '항공 수하물 한도·기내반입 가능 여부 등 핵심 주의사항은 본문 업데이트 시 추가됩니다.' },
    { type: 'productSlot', productKey: meta.slug.replace(/-/g, '') },
    { type: 'disclaimer' },
  ]

  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer
        meta={{ ...meta, category: 'addon' }}
        postData={postData || { sections: fallbackSections }}
        breadcrumbItems={breadcrumbItems}
      />
    </Layout>
  )
}
