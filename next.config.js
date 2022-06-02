/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['jp'],
    defaultLocale: 'jp',
  },
  images: {
    domains: ['gh-card.dev', 'gh-card.dev/repos'],
  },
};

module.exports = nextConfig;
