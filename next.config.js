/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'https://noop/',
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
