/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['cdn.sanity.io'],
  },
  basePath: isProd ? '/nextjs-sanity-blog' : '',
  assetPrefix: isProd ? '/nextjs-sanity-blog/' : '',
};

module.exports = nextConfig;
