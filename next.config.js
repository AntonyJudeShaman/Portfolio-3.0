const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
};

module.exports = withContentlayer(nextConfig);
