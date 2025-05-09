import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['urtgrgjrezgaoeuiinqd.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'urtgrgjrezgaoeuiinqd.supabase.co',
        pathname: '/storage/v1/object/public/project-images/**',
      },
    ],
  },
};

export default nextConfig;
