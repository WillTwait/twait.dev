/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tab-maker-deluxe.twait.dev",
      },
      {
        protocol: "https",
        hostname: "desolation-rows.twait.dev",
      },
    ],
  },
};

module.exports = nextConfig;
