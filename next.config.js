/** @type {import('next').NextConfig} */
const pathPrefix = process.env.NODE_ENV === 'production' ? '/waxing' : '';
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    pathPrefix,
  },
};

module.exports = nextConfig;
