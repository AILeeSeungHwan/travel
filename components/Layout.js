import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import topics from '../data/topics'
import { organizationSchema, websiteSchema } from '../lib/jsonld'
import { SideAd } from './StickySideAds'
import TopAdRow from './TopAdRow'

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '트립스팟'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://travel.ambitstock.com'
const SITE_DESC = '국내 50% / 해외 50% 균형 — 국가 → 지역 → 스팟 3단계 허브와 호텔·여행 가이드·계산기를 한 곳에서. 한국관광공사·외교부 출처를 우선합니다.'
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || ''
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || ''
const GOOGLE_VERIFY = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || ''
const NAVER_VERIFY  = process.env.NEXT_PUBLIC_NAVER_VERIFICATION || ''
const DAUM_VERIFY   = process.env.NEXT_PUBLIC_DAUM_VERIFICATION || ''
const BING_VERIFY   = process.env.NEXT_PUBLIC_BING_VERIFICATION || ''

const FONT_URL = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css'
const FONT_FAMILY = "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif"

const NAV_TOPICS = topics.filter(t => t.featured).sort((a, b) => a.priority - b.priority)

export default function Layout({ children, title, description, topAd = true, sideAds = true, narrow = false }) {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => { setMobileMenuOpen(false) }, [router.asPath])

  const pageTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — 국가·지역·스팟·호텔 통합 여행 허브`
  const pageDesc = description || SITE_DESC

  return (
    <div style={{ fontFamily: FONT_FAMILY, background: '#f5f9ff', color: '#0F172A', minHeight: '100vh' }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="stylesheet" href={FONT_URL} />

        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content="여행,여행지,호텔,여행가이드,여행계산기,국내여행,해외여행,제주,일본여행,베트남여행,호캉스,가족여행,신혼여행" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={`${SITE_URL}/og-default.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={`${SITE_URL}/og-default.png`} />

        <meta name="author" content={SITE_NAME} />
        <meta name="copyright" content={SITE_NAME} />
        <meta name="subject" content={pageTitle} />
        <meta name="NaverBot" content="All" />
        <meta name="Yeti" content="index,follow" />

        {GOOGLE_VERIFY && <meta name="google-site-verification" content={GOOGLE_VERIFY} />}
        {NAVER_VERIFY  && <meta name="naver-site-verification"  content={NAVER_VERIFY}  />}
        {DAUM_VERIFY   && <meta name="daum-site-verification"   content={DAUM_VERIFY}   />}
        {BING_VERIFY   && <meta name="msvalidate.01"            content={BING_VERIFY}   />}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />

        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
          </>
        )}
        {CLARITY_ID && (
          <script dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");` }} />
        )}
        {ADSENSE_ID && (
          <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`} crossOrigin="anonymous" />
        )}
      </Head>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; overflow-x: hidden; }
        body { font-family: ${FONT_FAMILY}; background: #f5f9ff; color: #0F172A; -webkit-font-smoothing: antialiased; }
        a { color: inherit; }
        img { max-width: 100%; height: auto; }
        ::selection { background: #0EA5E933; }
        .tag { display:inline-block; font-size:11px; font-weight:700; padding:3px 8px; border-radius:6px; background:#E0F2FE; color:#0369A1; margin-right:4px; }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <header style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', position:'sticky', top:0, zIndex:50 }}>
        <div style={{ maxWidth:1400, margin:'0 auto', padding:'0 20px', display:'flex', alignItems:'center', justifyContent:'space-between', height:62 }}>
          <Link href="/" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:8 }}>
            <span style={{ width:32, height:32, borderRadius:8, background:'linear-gradient(135deg, #0EA5E9, #14B8A6)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:18, letterSpacing:'-1px' }}>T</span>
            <span style={{ fontWeight:800, fontSize:17, color:'#0F172A' }}>{SITE_NAME}</span>
          </Link>
          <nav className="desktop-nav" style={{ display:'flex', gap:18 }}>
            {NAV_TOPICS.map(t => (
              <Link key={t.slug} href={t.href || `/${t.slug}/`} style={{ fontSize:14, color:'#334155', textDecoration:'none', fontWeight:600 }}>{t.icon} {t.name}</Link>
            ))}
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn" style={{ background:'none', border:'none', fontSize:22, cursor:'pointer', display:'none' }}>☰</button>
        </div>
        {mobileMenuOpen && (
          <div style={{ borderTop:'1px solid #e2e8f0', padding:'12px 20px', background:'#fff' }}>
            {NAV_TOPICS.map(t => (
              <Link key={t.slug} href={t.href || `/${t.slug}/`} style={{ display:'block', padding:'8px 0', fontSize:14, textDecoration:'none', color:'#334155' }}>
                {t.icon} {t.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className="page-shell">
        {sideAds && <SideAd side="left" />}
        <div className={`content-col ${narrow ? 'narrow' : ''}`}>
          {topAd && <TopAdRow />}
          {children}
        </div>
        {sideAds && <SideAd side="right" />}
      </div>

      <footer style={{ background:'#fff', borderTop:'1px solid #e2e8f0', marginTop:40 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 20px', display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', gap:24 }} className="grid-3">
          <div>
            <div style={{ fontWeight:800, fontSize:16, marginBottom:8 }}>{SITE_NAME}</div>
            <p style={{ fontSize:13, color:'#64748b', lineHeight:1.7 }}>
              본 사이트는 호텔·항공·여행 상품을 직접 판매하지 않으며, 게재된 정보는 한국관광공사·외교부·각국 관광청·호텔스컴바인 등 공식 출처에 기반한 큐레이션입니다.
              비자·환율·여행경보 등 변동성이 큰 정보는 출국 전 외교부 해외안전여행(0404.go.kr) 사이트에서 재확인하세요.
            </p>
            <p style={{ fontSize:12, color:'#94a3b8', marginTop:10 }}>
              ※ 본 사이트는 호텔스컴바인 제휴 활동의 일환으로 일정 수수료를 제공받을 수 있으며, 일부 여행용품 페이지에 한해 쿠팡 파트너스 활동의 일환으로 제휴 링크를 포함합니다.
            </p>
          </div>
          <div>
            <div style={{ fontSize:13, fontWeight:700, marginBottom:10, color:'#334155' }}>사이트 정책</div>
            <Link href="/about/" style={{ display:'block', fontSize:13, color:'#64748b', textDecoration:'none', marginBottom:6 }}>소개</Link>
            <Link href="/editorial-policy/" style={{ display:'block', fontSize:13, color:'#64748b', textDecoration:'none', marginBottom:6 }}>편집 정책</Link>
            <Link href="/disclaimer/" style={{ display:'block', fontSize:13, color:'#64748b', textDecoration:'none', marginBottom:6 }}>여행 면책</Link>
            <Link href="/image-credits/" style={{ display:'block', fontSize:13, color:'#64748b', textDecoration:'none', marginBottom:6 }}>이미지 출처</Link>
            <Link href="/privacy/" style={{ display:'block', fontSize:13, color:'#64748b', textDecoration:'none', marginBottom:6 }}>개인정보</Link>
            <Link href="/terms/" style={{ display:'block', fontSize:13, color:'#64748b', textDecoration:'none', marginBottom:6 }}>이용약관</Link>
            <Link href="/contact/" style={{ display:'block', fontSize:13, color:'#64748b', textDecoration:'none' }}>문의</Link>
          </div>
          <div>
            <div style={{ fontSize:13, fontWeight:700, marginBottom:10, color:'#334155' }}>주요 영역</div>
            {NAV_TOPICS.map(t => (
              <Link key={t.slug} href={t.href || `/${t.slug}/`} style={{ display:'block', fontSize:13, color:'#64748b', textDecoration:'none', marginBottom:6 }}>
                {t.icon} {t.name}
              </Link>
            ))}
          </div>
        </div>
        <div style={{ borderTop:'1px solid #e2e8f0', padding:'14px 20px', textAlign:'center', fontSize:12, color:'#94a3b8' }}>
          © {new Date().getFullYear()} {SITE_NAME} · travel.ambitstock.com
        </div>
      </footer>

      <style jsx>{`
        .page-shell {
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px 20px;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 24px;
        }
        .content-col { max-width: 860px; margin: 0 auto; width: 100%; min-width: 0; }
        .content-col.narrow { max-width: 720px; }
        @media (min-width: 1280px) {
          .page-shell {
            grid-template-columns: 180px minmax(0, 1fr) 180px;
          }
          .content-col { max-width: 860px; margin: 0 auto; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  )
}
