import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  sassOptions: {
    additionalData: "@use '@/assets/css/_variables.scss' as *;",
  },
  allowedDevOrigins: ["localhost", "192.168.10.105"],
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        hostname: "192.168.10.105",
      },
    ],
  },
};

export default nextConfig;
