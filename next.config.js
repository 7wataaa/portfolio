/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['jp'],
    defaultLocale: 'jp',
  },
  images: {
    domains: ['gh-card.dev'],
  },
};

module.exports = nextConfig;
