import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // TEMP: don’t fail production builds on ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
