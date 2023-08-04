/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
};

module.exports = nextConfig;
