/** @type {import('next').NextConfig} */
// const repo = 'waxing';
// const assetPrefix = `/${repo}/`;
// const basePath = `/${repo}`;
const nextConfig = {
  // assetPrefix: assetPrefix,
  // basePath: basePath,
  // basePath: 'https://scarlettjohanssons.github.io/waxing/',
  // images: {
  //   loader: 'imgix',
  //   path: 'https://scarlettjohanssons.github.io/waxing/',
  // },
  images: {
    loader: 'default',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scarlettjohanssons.github.io',
        port: '',
        pathname: '/waxing/**',
      },
    ],
  },
  experimental: {
    appDir: true,
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
