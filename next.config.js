/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
  framework: {
    name: 'shopify_local',
  },
  i18n: {
    locales: ['en-US', 'ko'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
});
