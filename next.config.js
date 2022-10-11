const { withLayer0 } = require("@layer0/next/config");

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = withLayer0({
  ...nextConfig,
  layer0SourceMaps: false,
  disableLayer0DevTools: true,
});
