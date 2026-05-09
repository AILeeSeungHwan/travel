import { Html, Head, Main, NextScript } from 'next/document'

const BRAND_COLOR = '#0EA5E9'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '트립스팟'

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
        <meta name="google-site-verification" content="2DAD_BGWxdRXKWrw6lYKe6e0p3BLAiAXbMHVYXrU48k" />
        <meta name="naver-site-verification" content="2ebb1c722a29180952399bdc54403df21800cc54" />
        <meta name="msvalidate.01" content="1E4F2FA1D46763B9C53162346F20C68D" />

        {/* 한국 크롤러 허용 */}
        <meta name="NaverBot" content="All" />
        <meta name="Yeti" content="index,follow" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZJ3XS3HJSK" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZJ3XS3HJSK');
        `}} />

        {/* Microsoft Clarity */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wmt3liusxh");
        `}} />

        {/* Travelpayouts 어필리에이트 트래킹 (ID: 527031) */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var s=document.createElement("script");
            s.async=1;
            s.src='https://emrldco.com/NTI3MDMx.js?t=527031';
            document.head.appendChild(s);
          })();
        `}} />

        {/* Leaflet CSS (mini-map 전역 — 사용 페이지에서만 실제 렌더) */}
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
      </Head>
      <body><Main /><NextScript /></body>
    </Html>
  )
}
