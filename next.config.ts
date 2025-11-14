import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'c.animaapp.com',
        port: '',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
