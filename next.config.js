/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'vercel.com', '*.vercel.app'],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig 