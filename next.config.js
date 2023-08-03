/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['books.google.com', 'media.istockphoto.com'],
  },
};

module.exports = nextConfig;
