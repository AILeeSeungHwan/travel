import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import tools from '../../data/tools'
import { fetchAllRates } from '../../lib/ecos'

export async function getStaticPaths() {
  return { paths: tools.map(t => ({ params: { slug: t.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = tools.find(t => t.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/tools/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  // 환율 도구는 ECOS API 에서 실제 환율 가져오기 (ISR 1시간)
  let rates = null
  if (meta.slug === 'currency') {
    rates = await fetchAllRates(['USD','JPY','EUR','CNY','GBP','HKD','TWD','SGD','THB','VND','IDR','MYR','PHP'])
  }

  return { props: { meta, postData, rates }, revalidate: 3600 }
}

function formatRate(rate, currency) {
  // JPY·VND·IDR 는 100원 단위 표시
  if (['JPY','VND','IDR'].includes(currency)) {
    return `100 ${currency} ≈ ${rate.toFixed(2)} 원`
  }
  return `1 ${currency} ≈ ${rate.toFixed(2)} 원`
}

export default function ToolDetail({ meta, postData, rates }) {
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

      {meta.slug === 'currency' && rates && Object.keys(rates).length > 0 && (
        <section style={{
          background: 'linear-gradient(135deg, #ECFEFF, #F0FDFA)',
          border: '1px solid #14B8A6',
          borderRadius: 14, padding: '20px 22px', marginBottom: 24,
        }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#0F766E', marginBottom: 8 }}>
            💱 실시간 환율 (한국은행 ECOS, {Object.values(rates)[0]?.date.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')} 기준)
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
            {Object.entries(rates).map(([cur, r]) => (
              <div key={cur} style={{ background: '#fff', padding: '10px 14px', borderRadius: 8, fontSize: 13 }}>
                <strong style={{ color: '#0F172A' }}>{formatRate(r.rate, cur)}</strong>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, color: '#64748B', marginTop: 10 }}>
            ※ 한국은행 매매기준율(전일 종가). 실제 환전 시 은행 우대율·트래블카드는 ±1~3% 차이.
          </div>
        </section>
      )}

      <PostRenderer
        meta={{ ...meta, category: 'tool' }}
        postData={postData || { sections: fallbackSections }}
        breadcrumbItems={breadcrumbItems}
      />
    </Layout>
  )
}
