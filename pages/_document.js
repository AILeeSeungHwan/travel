import { Html, Head, Main, NextScript } from 'next/document'

const BRAND_COLOR = '#0EA5E9'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '여행모아'

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

        {/* Leaflet CSS (mini-map 전역 — 사용 페이지에서만 실제 렌더) */}
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
      </Head>
      <body><Main /><NextScript /></body>
    </Html>
  )
}
