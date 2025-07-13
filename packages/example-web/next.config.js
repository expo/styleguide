const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    position: 'bottom-right',
  },
  transpilePackages: ['@expo/*'],
  experimental: {
    webpackBuildWorker: true,
    optimizePackageImports: ['@expo/*'],
  },
  async redirects() {
    return [
      {
        source: '/ui',
        destination: '/ui/components',
        permanent: true,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
