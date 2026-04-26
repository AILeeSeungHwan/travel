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
}

module.exports = nextConfig
