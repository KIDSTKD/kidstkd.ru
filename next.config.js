/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/pages/01/03/:path*',
        destination: '/01-about-us/03',
        permanent: false
      }
    ]
  },
}
