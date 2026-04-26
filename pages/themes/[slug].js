import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import themes from '../../data/themes'
import countries from '../../data/countries'

export async function getStaticPaths() {
  return { paths: themes.map(t => ({ params: { slug: t.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = themes.find(t => t.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/themes/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const recommendedCountries = (meta.bestCountrySlugs || []).map(s => countries.find(c => c.slug === s)).filter(Boolean)
    .map(c => ({ ...c, category: 'country', url: `/countries/${c.slug}/`, title: c.title }))

  return { props: { meta, postData, recommendedCountries } }
}

export default function ThemeDetail({ meta, postData, recommendedCountries }) {
  const breadcrumbItems = [
    { name: '테마', url: '/themes/' },
    { name: meta.name },
  ]
  const fallbackSections = [
    { type: 'intro', html: `${meta.summary || meta.description}<br/><br/>${meta.targetAudience ? `대상: ${meta.targetAudience}<br/>` : ''}${meta.typicalDuration ? `추천 기간: ${meta.typicalDuration}<br/>` : ''}${meta.typicalCost ? `예상 비용: ${meta.typicalCost}` : ''}` },
    { type: 'h2', id: 'why', text: `왜 ${meta.name}인가` },
    { type: 'body', html: meta.description },
    { type: 'h2', id: 'countries', text: '추천 국가' },
    { type: 'body', html: recommendedCountries.length === 0
      ? '추천 국가 목록을 준비 중입니다.'
      : `${meta.name}에 적합한 추천 국가 ${recommendedCountries.length}곳입니다.` },
    { type: 'h2', id: 'tips', text: '여행 팁' },
    { type: 'body', html: `${meta.name} 여행 시 핵심 체크포인트와 시즌·예산·숙소 선택 팁은 본문 업데이트 시 추가됩니다.` },
    { type: 'sources', items: [
      { label: '한국관광공사', url: 'https://visitkorea.or.kr/', org: '한국관광공사', accessedAt: meta.updatedAt },
    ]},
    { type: 'disclaimer' },
  ]

  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer
        meta={{ ...meta, category: 'theme' }}
        postData={postData || { sections: fallbackSections }}
        related={recommendedCountries}
        breadcrumbItems={breadcrumbItems}
      />
    </Layout>
  )
}
