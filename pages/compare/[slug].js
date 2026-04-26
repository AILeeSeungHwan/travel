import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import compares from '../../data/compares'

export async function getStaticPaths() {
  return { paths: compares.map(c => ({ params: { slug: c.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = compares.find(c => c.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/compares/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  return { props: { meta, postData } }
}

export default function CompareDetail({ meta, postData }) {
  const breadcrumbItems = [
    { name: '비교', url: '/compare/' },
    { name: meta.title },
  ]
  const fallbackSections = [
    { type: 'intro', html: `${meta.summary}<br/><br/>${meta.description}` },
    { type: 'h2', id: 'matrix', text: '비교 매트릭스' },
    { type: 'body', html: '핵심 항목별 비교 표는 본문 업데이트 시 추가됩니다. 가격·평점·시즌·접근성·시설을 항목별로 비교합니다.' },
    { type: 'h2', id: 'recommendations', text: '타겟별 추천' },
    { type: 'body', html: '신혼·가족·효도·예산별 베스트 추천은 본문 업데이트 시 정리됩니다.' },
    { type: 'sources', items: [
      { label: '호텔스컴바인', url: 'https://www.hotelscombined.com/', org: 'HotelsCombined', accessedAt: meta.updatedAt },
    ]},
    { type: 'disclaimer' },
  ]

  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer
        meta={{ ...meta, category: 'compare' }}
        postData={postData || { sections: fallbackSections }}
        breadcrumbItems={breadcrumbItems}
      />
    </Layout>
  )
}
