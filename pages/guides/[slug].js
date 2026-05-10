import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import guides from '../../data/guides'
import countries from '../../data/countries'

export async function getStaticPaths() {
  return { paths: guides.filter(g => g?.slug).map(g => ({ params: { slug: g.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = guides.find(g => g.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/guides/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const country = meta.targetCountrySlug ? countries.find(c => c.slug === meta.targetCountrySlug) : null
  const related = country ? [{ ...country, category: 'country', url: `/countries/${country.slug}/`, title: country.title }] : []

  return { props: { meta, postData, related } }
}

export default function GuideDetail({ meta, postData, related }) {
  const breadcrumbItems = [
    { name: '가이드', url: '/guides/' },
    { name: meta.title },
  ]
  const fallbackSections = [
    { type: 'intro', html: `${meta.summary}<br/><br/>${meta.description}` },
    ...(meta.ymylLevel === 'A' ? [{
      type: 'risk', title: '출국 전 재확인 필수',
      html: '비자·여행경보 등 본 가이드 정보는 작성일 기준이며 정책 변경이 잦습니다. 출국 전 외교부 영사민원24(0404.go.kr) 또는 해당 국가 대사관 공시를 반드시 재확인하세요.'
    }] : []),
    { type: 'h2', id: 'overview', text: '핵심 요약' },
    { type: 'body', html: meta.description },
    { type: 'h2', id: 'detail', text: '자세히 보기' },
    { type: 'body', html: '본문 업데이트 시 단계별 절차·필요 서류·주의사항이 추가됩니다.' },
    { type: 'sources', items: meta.sources || [
      { label: '외교부 해외안전여행', url: 'https://0404.go.kr/', org: '외교부', accessedAt: meta.updatedAt },
    ]},
    { type: 'disclaimer' },
  ]

  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer
        meta={{ ...meta, category: 'guide' }}
        postData={postData || { sections: fallbackSections }}
        related={related}
        breadcrumbItems={breadcrumbItems}
      />
    </Layout>
  )
}
