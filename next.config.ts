import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Avoid walking up to e.g. C:\Users\<user>\package.json (BOM / wrong lockfile breaks resolve)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
