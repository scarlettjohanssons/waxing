/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'static',
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
