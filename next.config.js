const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: '/:path*.md',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ]
  },
  async rewrites() {
    return [{ source: '/:path*.md', destination: '/404/' }]
  },
  async redirects() {
    return [
      // 중복 트렌드 포스트 통합 (301)
      { source: '/guides/trend-20260510-2/', destination: '/guides/trend-20260509-2/', permanent: true },
    ]
  },
}

module.exports = nextConfig
