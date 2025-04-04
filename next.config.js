/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  assetPrefix: '/',
}

module.exports = nextConfig 