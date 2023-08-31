// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"], // Add the hostname here
  },
  swcMinify: true,
  output: "export",
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  productionBrowserSourceMaps: true,
};
