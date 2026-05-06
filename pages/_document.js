import { Html, Head, Main, NextScript } from 'next/document'

const BRAND_COLOR = '#0EA5E9'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '트립스팟'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID
const GOOGLE_VER = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
const NAVER_VER = process.env.NEXT_PUBLIC_NAVER_VERIFICATION
const DAUM_VER = process.env.NEXT_PUBLIC_DAUM_VERIFICATION
const BING_VER = process.env.NEXT_PUBLIC_BING_VERIFICATION

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* Daum 구형 대응 — ico 가장 먼저 */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* 현대 브라우저 */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

        {/* iOS / Android */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color={BRAND_COLOR} />

        {/* Microsoft */}
        <meta name="msapplication-TileColor" content={BRAND_COLOR} />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content={BRAND_COLOR} />

        {/* Feeds */}
        <link rel="alternate" type="application/rss+xml" title={`${SITE_NAME} RSS`} href="/rss.xml" />
        <link rel="alternate" type="application/atom+xml" title={`${SITE_NAME} Atom`} href="/atom.xml" />

        {/* 검색엔진 사이트 소유권 인증 */}
        {GOOGLE_VER && <meta name="google-site-verification" content={GOOGLE_VER} />}
        {NAVER_VER && <meta name="naver-site-verification" content={NAVER_VER} />}
        {DAUM_VER && <meta name="daum-site-verification" content={DAUM_VER} />}
        {BING_VER && <meta name="msvalidate.01" content={BING_VER} />}

        {/* 한국 크롤러 허용 */}
        <meta name="NaverBot" content="All" />
        <meta name="Yeti" content="index,follow" />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}} />
          </>
        )}

        {/* Microsoft Clarity */}
        {CLARITY_ID && (
          <script dangerouslySetInnerHTML={{ __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}} />
        )}

        {/* Leaflet CSS (mini-map 전역 — 사용 페이지에서만 실제 렌더) */}
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
      </Head>
      <body><Main /><NextScript /></body>
    </Html>
  )
}
