/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.BUILD_DIR || ".next",
  images: {
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.130db.lv",
      },
    ],
  },
};

module.exports = nextConfig;
