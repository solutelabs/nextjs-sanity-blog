/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['cdn.sanity.io'],
  },
  basePath: isProd ? '/out' : '',
  assetPrefix: isProd ? '/out/' : '',
};

module.exports = nextConfig;
