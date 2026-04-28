import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import AdUnit from './AdUnit'
import MultiplexAd from './MultiplexAd'
import TopAdRow from './TopAdRow'
import Faq from './Faq'
import {
  InfoBox, WarningBox, RiskBox, TravelDisclaimer, SourceList, YmylBadge, ImageCredit
} from './TravelBoxes'
import {
  articleSchema, breadcrumbSchema, faqSchema,
  touristDestinationSchema, touristAttractionSchema, hotelSchema,
  webApplicationSchema, howToSchema
} from '../lib/jsonld'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://tripspot.ambitstock.com'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '트립스팟'

const PREFIX = {
  country:   '/countries',
  theme:     '/themes',
  hotel:     '/hotels',
  guide:     '/guides',
  situation: '/situations',
  tool:      '/tools',
  compare:   '/compare',
  addon:     '/addons',
}

const CAT_LABEL = {
  country:'국가', region:'지역', spot:'스팟', hotel:'호텔',
  theme:'테마', guide:'가이드', situation:'상황별', tool:'계산기',
  compare:'비교', addon:'여행용품',
}

function TOC({ sections }) {
  const h2s = sections.filter(s => s.type === 'h2')
  if (h2s.length < 3) return null
  return (
    <nav style={{ background:'#F8FAFC', border:'1px solid #E2E8F0', borderRadius:10, padding:'16px 20px', margin:'18px 0 22px' }}>
      <strong style={{ fontSize:13, display:'block', marginBottom:10, color:'#334155' }}>📑 목차</strong>
      <ol style={{ listStyle:'none', padding:0, margin:0 }}>
        {h2s.map((s, i) => (
          <li key={i} style={{ marginBottom:6 }}>
            <a href={'#' + s.id} style={{ fontSize:14, textDecoration:'none', color:'#475569', lineHeight:1.5 }}>
              {i + 1}. {s.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

function normalize(s) { return s ? String(s).replace(/[\s\-·・]/g, '').toLowerCase() : '' }

const HOTELS_COMBINED_FALLBACK = process.env.NEXT_PUBLIC_HOTELSCOMBINED_BASE_URL || 'https://lpweb.kr/click.php?m=hcombine2&a=A100692599&l=0000'

function Section({ section, coupangLinks, meta }) {
  const s = section
  if (s.type === 'intro')   return <div style={{ fontSize:16, lineHeight:1.9, marginBottom:22, color:'#334155' }} dangerouslySetInnerHTML={{ __html: s.html }} />
  if (s.type === 'h2')      return <h2 id={s.id} style={{ fontSize:22, fontWeight:800, margin:'38px 0 14px', lineHeight:1.35, color:'#0F172A', borderLeft:'4px solid #0EA5E9', paddingLeft:12 }}>{s.text}</h2>
  if (s.type === 'h3')      return <h3 id={s.id} style={{ fontSize:17, fontWeight:700, margin:'22px 0 8px', color:'#0F172A' }}>{s.text}</h3>
  if (s.type === 'body')    return <div style={{ fontSize:15, lineHeight:1.85, marginBottom:16, color:'#334155' }} dangerouslySetInnerHTML={{ __html: s.html }} />
  if (s.type === 'callout') return <div style={{ background:'#F0FDFA', borderLeft:'4px solid #14B8A6', padding:'14px 18px', borderRadius:'0 10px 10px 0', margin:'16px 0', fontSize:14, lineHeight:1.7 }} dangerouslySetInnerHTML={{ __html: s.html }} />
  if (s.type === 'info')      return <InfoBox html={s.html} title={s.title} />
  if (s.type === 'warning')   return <WarningBox html={s.html} title={s.title} />
  if (s.type === 'emergency' || s.type === 'risk') return <RiskBox html={s.html} title={s.title} />
  if (s.type === 'sources')   return <SourceList items={s.items} />
  if (s.type === 'faq')       return <Faq items={s.items} />
  if (s.type === 'medDisclaimer' || s.type === 'disclaimer') return <TravelDisclaimer />
  if (s.type === 'toc')     return null
  if (s.type === 'image')   return (
    <figure style={{ margin:'20px 0', textAlign:'center' }}>
      <img src={s.src} alt={s.alt || ''} loading="lazy" style={{ maxWidth:'100%', borderRadius:10 }} />
      {s.caption && <figcaption style={{ fontSize:12, color:'#94A3B8', marginTop:8 }}>{s.caption}</figcaption>}
      <ImageCredit source={s.imageSource} license={s.imageLicense} credit={s.imageCredit} link={s.imageSourceUrl} />
    </figure>
  )
  if (s.type === 'ending')  return <div style={{ background:'#F8FAFC', borderRadius:10, padding:'18px 22px', margin:'24px 0' }} dangerouslySetInnerHTML={{ __html: s.html }} />
  if (s.type === 'ad')      return null
  if (s.type === 'hotelsCombinedCTA') {
    // 우선순위: 섹션의 href → 호텔 meta의 hotelsCombinedDeepLink → 글로벌 fallback
    const href = s.href && s.href !== '#'
      ? s.href
      : (meta && meta.hotelsCombinedDeepLink) || HOTELS_COMBINED_FALLBACK
    return (
      <div style={{ margin:'24px 0', padding:'22px 24px', background:'linear-gradient(135deg, #FEF3C7, #FDE68A)', borderRadius:14, border:'1px solid #F59E0B' }}>
        <div style={{ fontSize:14, fontWeight:800, color:'#92400E', marginBottom:6 }}>🏨 호텔 최저가 비교</div>
        <div style={{ fontSize:13, color:'#78350F', marginBottom:12, lineHeight:1.6 }}>{s.subText || '체크인 / 체크아웃 / 인원 입력으로 호텔스컴바인이 여러 예약 사이트의 가격을 동시에 비교합니다.'}</div>
        <a href={href} target="_blank" rel="noopener noreferrer nofollow" style={{
          display:'inline-block', padding:'14px 28px', background:'linear-gradient(135deg,#F59E0B,#D97706)', color:'#fff',
          borderRadius:10, fontWeight:800, textDecoration:'none', fontSize:15
        }}>
          {s.text || '호텔스컴바인에서 가격 보기 →'}
        </a>
        <p style={{ fontSize:11, color:'#A16207', marginTop:10 }}>※ 본 사이트는 호텔스컴바인 제휴 활동의 일환으로 일정 수수료를 제공받습니다. 가격은 클릭 시점에 따라 변동됩니다.</p>
      </div>
    )
  }
  if (s.type === 'productSlot') {
    const matched = (coupangLinks || []).filter(l => {
      if (!l.coupang_url) return false
      if (!s.productKey) return false
      return normalize(l.product_name).includes(normalize(s.productKey)) ||
             normalize(s.productKey).includes(normalize(l.product_name))
    })
    if (matched.length === 0) return null
    return (
      <div style={{ margin:'24px 0', padding:'18px 20px', background:'#FFF7ED', borderRadius:12, border:'1px solid #FED7AA' }}>
        <div style={{ fontSize:14, fontWeight:800, color:'#EA580C', marginBottom:10 }}>🛒 관련 여행용품 (쿠팡 파트너스)</div>
        {matched.map((l, i) => (
          <a key={i} href={l.coupang_url} target="_blank" rel="noopener noreferrer nofollow"
             style={{ display:'flex', justifyContent:'space-between', alignItems:'center', background:'#fff', padding:'12px 16px', borderRadius:8, marginBottom:8, textDecoration:'none' }}>
            <span style={{ fontSize:14, fontWeight:700, color:'#334155' }}>{l.product_name}</span>
            <span style={{ fontSize:12, fontWeight:700, color:'#EA580C' }}>최저가 확인 →</span>
          </a>
        ))}
        <p style={{ fontSize:11, color:'#94A3B8', marginTop:8 }}>※ 쿠팡 파트너스 활동의 일환으로 수수료를 제공받습니다. 호텔·항공 가격과는 무관한 보조 여행용품 정보입니다.</p>
      </div>
    )
  }
  if (s.type === 'cta') {
    const href = (() => {
      const m = (coupangLinks || []).find(l => l.coupang_url && (normalize(s.text).includes(normalize(l.product_name)) || normalize(l.product_name).includes(normalize(s.productKey || ''))))
      return m ? m.coupang_url : (s.href || '#')
    })()
    return (
      <div style={{ margin:'20px 0' }}>
        <a href={href} target="_blank" rel="noopener noreferrer nofollow"
           style={{ display:'inline-block', padding:'14px 24px', background:'linear-gradient(135deg,#0EA5E9,#14B8A6)', color:'#fff', borderRadius:10, fontWeight:800, textDecoration:'none' }}>
          {s.text || '바로가기 →'}
        </a>
      </div>
    )
  }
  return null
}

function renderWithAds(sections, coupangLinks, meta) {
  const out = []
  let h2Index = -1
  sections.forEach((s, i) => {
    if (s.type === 'h2') {
      h2Index++
      if (h2Index === 1) {
        out.push(<MultiplexAd key={`ad-mx-${i}`} />)
      } else if (h2Index >= 2) {
        out.push(<AdUnit key={`ad-h2-${i}`} slot="4000000001" variant="auto" />)
      }
    }
    out.push(<Section key={i} section={s} coupangLinks={coupangLinks} meta={meta} />)
  })
  return out
}

export default function PostRenderer({ meta, postData, related, breadcrumbItems, canonicalPath }) {
  const sections = postData ? postData.sections : null
  const slug = meta.slug
  const canonicalUrl = SITE + (canonicalPath || (PREFIX[meta.category] || '/posts') + '/' + slug + '/')

  // 카테고리·슬러그별 자체 OG 이미지 (scripts/generate-og-images.js 가 자동 생성)
  const PLURAL = { country:'countries', region:'regions', spot:'spots', hotel:'hotels',
                   theme:'themes', guide:'guides', situation:'situations', tool:'tools',
                   compare:'compares', addon:'addons' }
  const ogSlug = (meta.category === 'region')
    ? `${meta.countrySlug}-${slug}`
    : (meta.category === 'spot')
      ? `${meta.countrySlug}-${slug}`
      : slug
  const ogImage = `${SITE}/og/${PLURAL[meta.category] || 'posts'}-${ogSlug}.png`

  const [coupangLinks, setCoupangLinks] = useState([])
  useEffect(() => {
    if (!slug) return
    fetch(`/api/post-links?slug=${encodeURIComponent(slug)}`)
      .then(r => r.ok ? r.json() : [])
      .then(data => { if (Array.isArray(data) && data.length > 0) setCoupangLinks(data) })
      .catch(() => {})
  }, [slug])

  const crumbItems = breadcrumbItems || [
    { name: CAT_LABEL[meta.category] || '콘텐츠', url: (PREFIX[meta.category] || '') + '/' },
    { name: meta.title },
  ]

  const ldArticle = articleSchema({
    title: meta.title, description: meta.description, url: canonicalUrl,
    date: meta.publishedAt, updated: meta.updatedAt, tags: meta.tags, image: ogImage,
  })
  const ldBreadcrumb = breadcrumbSchema([{ name: SITE_NAME, url: '/' }, ...crumbItems])

  const ldSpecific = (() => {
    if (meta.category === 'country' || meta.category === 'region') {
      return touristDestinationSchema({
        name: meta.title, description: meta.description, url: canonicalUrl,
        country: meta.countryName,
      })
    }
    if (meta.category === 'spot') {
      return touristAttractionSchema({
        name: meta.spotName || meta.title, description: meta.description, url: canonicalUrl,
        lat: meta.lat, lng: meta.lng, address: meta.address,
      })
    }
    if (meta.category === 'hotel') {
      return hotelSchema({
        name: meta.hotelName || meta.title, description: meta.description, url: canonicalUrl,
        starRating: meta.starRating, ratingValue: meta.guestRating,
        address: meta.address, addressCountry: meta.iso2 || 'KR',
        lat: meta.lat, lng: meta.lng, priceRange: meta.priceRange,
        amenities: meta.amenities,
      })
    }
    if (meta.category === 'tool') {
      return webApplicationSchema({ name: meta.title, description: meta.description, url: canonicalUrl })
    }
    if (meta.category === 'guide' && meta.steps) {
      return howToSchema({ title: meta.title, description: meta.description, steps: meta.steps })
    }
    return null
  })()

  const faqSection = sections && sections.find(s => s.type === 'faq')
  const ldFaq = faqSection ? faqSchema(faqSection.items) : null

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="article:published_time" content={(meta.publishedAt || '') + 'T00:00:00+09:00'} />
        <meta property="article:modified_time" content={(meta.updatedAt || meta.publishedAt || '') + 'T00:00:00+09:00'} />
        <meta property="article:section" content={CAT_LABEL[meta.category] || ''} />
        {(meta.tags || []).map(tag => <meta key={tag} property="article:tag" content={tag} />)}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
        {ldSpecific && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSpecific) }} />}
        {ldFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />}
      </Head>

      <article>
        <Breadcrumb items={crumbItems.map(c => ({ label: c.name, href: c.url }))} />

        <header style={{ marginBottom: 14 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10, flexWrap:'wrap' }}>
            <YmylBadge level={meta.ymylLevel} />
            {meta.countryName && <span className="tag">{meta.countryName}</span>}
            {meta.regionName && <span className="tag">{meta.regionName}</span>}
            {meta.hotelClass && <span className="tag">{meta.hotelClass}</span>}
          </div>
          <h1 style={{ fontSize:28, fontWeight:900, lineHeight:1.3, margin:'0 0 12px', color:'#0F172A' }}>{meta.title}</h1>
          <p style={{ fontSize:15, color:'#475569', lineHeight:1.7, margin:'0 0 10px' }}>{meta.description}</p>
          <div style={{ fontSize:12, color:'#94A3B8' }}>
            업데이트: {meta.updatedAt}
            {meta.priceUpdatedAt && <span style={{ marginLeft:10 }}>· 가격 기준일 {meta.priceUpdatedAt}</span>}
          </div>
        </header>

        <TopAdRow />

        {sections && (
          <>
            <TOC sections={sections} />
            {renderWithAds(sections, coupangLinks, meta)}
          </>
        )}

        {meta.tags && meta.tags.length > 0 && (
          <div style={{ marginTop:28, marginBottom:18 }}>
            {meta.tags.map(t => (
              <span key={t} style={{ display:'inline-block', fontSize:12, padding:'4px 10px', borderRadius:20, background:'#F1F5F9', color:'#475569', marginRight:6, marginBottom:6 }}>#{t}</span>
            ))}
          </div>
        )}

        {related && related.length > 0 && (
          <section style={{ marginTop:28, paddingTop:22, borderTop:'1px solid #E2E8F0' }}>
            <h2 style={{ fontSize:17, fontWeight:800, marginBottom:10 }}>관련 콘텐츠</h2>
            <ul style={{ listStyle:'none', padding:0, margin:0 }}>
              {related.map(r => (
                <li key={r.slug + r.url} style={{ padding:'10px 0', borderBottom:'1px solid #F1F5F9' }}>
                  <Link href={r.url} style={{ color:'#0369A1', textDecoration:'none', fontSize:14, fontWeight:600 }}>
                    {r.title || r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </>
  )
}
