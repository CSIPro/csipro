/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.csipro.isi.unison.mx",
        port: "",
        pathname: "/api/media/**",
      },
      {
        protocol: "https",
        hostname: "admin.csipro.isi.unison.mx",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
