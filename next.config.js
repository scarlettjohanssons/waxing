/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
console.log('isGithubActions', isGithubActions);

let assetPrefix = '';
let basePath = '/';

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}
const pathPrefix = process.env.NODE_ENV === 'production' ? '/waxing' : '';
const nextConfig = {
  assetPrefix: pathPrefix,
  // assetPrefix: '',
  // basePath: '/',
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
  },
  env: {
    pathPrefix,
  },
};

module.exports = nextConfig;
