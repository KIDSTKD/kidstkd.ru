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
        source: '/pages/01/:path*',
        destination: '/01-about-us/03',
        permanent: false
      }
    ]
  },
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/pages/05/01/:path*',
        destination: '/05-taekwondo/articles',
        permanent: false
      }
    ]
  },
}
