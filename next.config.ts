import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fix mobile image loading issues - disable all optimization temporarily
    unoptimized: true,
    // Enable dangerouslyAllowSVG for icon support
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
  },
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
