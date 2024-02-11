/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
