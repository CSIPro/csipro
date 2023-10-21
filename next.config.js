const { withPayload } = require("@payloadcms/next-payload");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPayload(nextConfig, {
  configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),
  cssPath: path.resolve(__dirname, "./src/styles/payload.css"),
  payloadPath: path.resolve(process.cwd(), "./src/payload/payloadClient.ts"),
  adminRoute: "/admin",
});
