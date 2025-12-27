import type { NextConfig } from "next";
import { REDIRECTS } from "@/data/redirects";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,

  async redirects() {
    return Object.entries(REDIRECTS).map(([slug, url]) => ({
      source: `/r/${slug}`,
      destination: url,
      permanent: true,
    }));
  },
};

export default nextConfig;
