// next.config.js
module.exports = {
  images: {
    domains: ["lh3.googleusercontent.com"], // Add the hostname here
  },
  swcMinify: true,
  output: "export",
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  eslint: { ignoreDuringBuilds: true },
  i18n: {
    locales: ["en", "es", "de"],
    defaultLocale: "en",
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
};
