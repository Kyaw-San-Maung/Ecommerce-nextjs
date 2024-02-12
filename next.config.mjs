/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "https://unsplash.com" }],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
