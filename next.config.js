// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your existing config
}

module.exports = withContentlayer(nextConfig)
