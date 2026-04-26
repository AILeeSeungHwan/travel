import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import situations from '../../data/situations'
import countries from '../../data/countries'

export async function getStaticPaths() {
  return { paths: situations.map(s => ({ params: { slug: s.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = situations.find(s => s.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/situations/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const recommended = (meta.recommendedCountrySlugs || []).map(s => countries.find(c => c.slug === s)).filter(Boolean)
    .map(c => ({ ...c, category: 'country', url: `/countries/${c.slug}/`, title: c.title }))

  return { props: { meta, postData, recommended } }
}

export default function SituationDetail({ meta, postData, recommended }) {
  const breadcrumbItems = [
    { name: '상황별', url: '/situations/' },
    { name: meta.situationName },
  ]
  const fallbackSections = [
    { type: 'intro', html: `${meta.description}<br/><br/>${meta.summary}` },
    { type: 'h2', id: 'recommended', text: '추천 목적지' },
    { type: 'body', html: recommended.length === 0
      ? '추천 목적지 목록을 준비 중입니다.'
      : `${meta.situationName} 상황에 적합한 추천 국가 ${recommended.length}곳을 정리했습니다.` },
    { type: 'h2', id: 'budget', text: '예산 가이드' },
    { type: 'body', html: `${meta.situationName}의 1인/가족당 예산 시뮬레이션은 본문 업데이트 시 제공됩니다.` },
    { type: 'h2', id: 'packing', text: '준비물 체크리스트' },
    { type: 'body', html: '여권, 비자, 여행자보험, 환전, 어댑터, 보조배터리 등 핵심 체크리스트는 본문 업데이트 시 정리됩니다.' },
    { type: 'sources', items: [
      { label: '외교부 해외안전여행', url: 'https://0404.go.kr/', org: '외교부', accessedAt: meta.updatedAt },
    ]},
    { type: 'disclaimer' },
  ]

  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer
        meta={{ ...meta, category: 'situation' }}
        postData={postData || { sections: fallbackSections }}
        related={recommended}
        breadcrumbItems={breadcrumbItems}
      />
    </Layout>
  )
}
