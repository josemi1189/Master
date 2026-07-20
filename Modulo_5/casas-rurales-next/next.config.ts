import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  sassOptions: {
    additionalData: "@use '@/assets/css/_variables.scss' as *;",
  },
  allowedDevOrigins: ["localhost"],
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        hostname: process.env.IMAGES_DOMAIN!,
      },
    ],
  },
};

export default nextConfig;
