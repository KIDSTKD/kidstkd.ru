/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig

export async function redirects() {
  return [
    { source: '/pages/01/03.html', destination: '/01-about-us/belttest', permanent: false },
    { source: '/pages/01/03_10-9.html', destination: '/01-about-us/belttest', permanent: false },
    { source: '/pages/01/03_8.html', destination: '/01-about-us/belttest', permanent: false },
    { source: '/pages/01/03_7.html', destination: '/01-about-us/belttest', permanent: false },
    { source: '/pages/01/03_6.html', destination: '/01-about-us/belttest', permanent: false },
    { source: '/pages/01/03_5.html', destination: '/01-about-us/belttest', permanent: false },
    { source: '/pages/01/03_4.html', destination: '/01-about-us/belttest', permanent: false },
    { source: '/pages/01/03_3.html', destination: '/01-about-us/belttest', permanent: false },
    { source: '/pages/01/03_2.html', destination: '/01-about-us/belttest', permanent: false },
    { source: '/pages/01/03_1.html', destination: '/01-about-us/belttest', permanent: false },

    {
      source: '/pages/05/01/:path*',
      destination: '/05-taekwondo/articles',
      permanent: false
    },

    {
      source: '/pages/05/09.html',
      destination: '/05-taekwondo/rules',
      permanent: false
    },

    {
      source: '/pages/05/:path*',
      destination: '/05-taekwondo/kibon',
      permanent: false
    },
  ]
}


