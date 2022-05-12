/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
