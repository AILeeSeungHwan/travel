import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import tools from '../../data/tools'

export async function getStaticPaths() {
  return { paths: tools.map(t => ({ params: { slug: t.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = tools.find(t => t.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/tools/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  return { props: { meta, postData } }
}

export default function ToolDetail({ meta, postData }) {
  const breadcrumbItems = [
    { name: '계산기', url: '/tools/' },
    { name: meta.toolName || meta.title },
  ]
  const fallbackSections = [
    { type: 'intro', html: `${meta.description}<br/><br/>본 계산기는 공개 통계·가정값을 바탕으로 한 <strong>추정치</strong>이며, 실제 항공·호텔·식비는 시즌·환율·예약 시점에 따라 크게 달라집니다.` },
    { type: 'info', title: '계산기 위젯',
      html: '계산기 위젯은 본문 업데이트 시 활성화됩니다. 현재는 추정 가이드라인을 제공합니다.' },
    { type: 'h2', id: 'how', text: '어떻게 사용하나요' },
    { type: 'body', html: '입력 필드에 인원·기간·목적지 등을 넣으면 결과가 자동 계산됩니다. 결과는 가이드라인으로 활용하세요.' },
    { type: 'h2', id: 'tips', text: '활용 팁' },
    { type: 'body', html: '예산 절감, 시즌 선택, 항공권 검색 시점 등 도구별 활용 팁은 본문 업데이트 시 추가됩니다.' },
    { type: 'h2', id: 'limit', text: '계산기의 한계' },
    { type: 'body', html: '본 계산기는 평균값·공시 환율 기준입니다. 실제 가격은 항공사·호텔·예약 사이트마다 다르며, 클릭 시점에 호텔스컴바인 등에서 재확인하세요.' },
    { type: 'sources', items: [
      { label: '한국은행 ECOS', url: 'https://ecos.bok.or.kr/', org: '한국은행', accessedAt: meta.updatedAt },
    ]},
    { type: 'disclaimer' },
  ]

  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer
        meta={{ ...meta, category: 'tool' }}
        postData={postData || { sections: fallbackSections }}
        breadcrumbItems={breadcrumbItems}
      />
    </Layout>
  )
}
