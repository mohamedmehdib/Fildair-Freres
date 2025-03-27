import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization (existing config)
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

  // Redirects (new config)
  async redirects() {
    return [
      // Remove `www.` and enforce HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.bilelabassi.com',
          },
        ],
        permanent: true,
        destination: 'https://bilelabassi.com/:path*',
      },
      // Force HTTPS (if not already handled by hosting)
      {
        source: '/:path*',
        missing: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'https',
          },
        ],
        permanent: true,
        destination: 'https://bilelabassi.com/:path*',
      },
      // Strip all paths (e.g., /%F0%9F%93%A7 → /)
      {
        source: '/:path((?!$|api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).+)',
        permanent: true,
        destination: 'https://bilelabassi.com',
      },
    ];
  },

  // Optional: Rewrites (if needed for proxies/APIs)

};

export default nextConfig;