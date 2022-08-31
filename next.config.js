/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'media.rawg.io',
      'images.unsplash.com'
    ]
  }
}

module.exports = nextConfig
