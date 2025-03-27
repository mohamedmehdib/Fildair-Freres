// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Skip ALL static, API, and image paths
  if (
    pathname.startsWith('/_next') || // Next.js internals
    pathname.startsWith('/api') ||   // API routes
    pathname.startsWith('/favicon.ico') || // Favicon
    pathname.includes('.ico') || // Other icons
    pathname.includes('.png') || // Images
    pathname.includes('.jpg') ||
    pathname.includes('.jpeg') ||
    pathname.includes('.svg') ||
    pathname.includes('.webp') ||
    pathname.includes('supabase.co') || // Supabase storage
    pathname.startsWith('/sitemap.xml') || // SEO files
    pathname.startsWith('/robots.txt')
  ) {
    return NextResponse.next(); // Skip redirection
  }

  // Redirect ALL other non-root paths (including emojis) to homepage
  if (pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Apply middleware to all paths except excluded ones
export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico|sitemap.xml|robots.txt).*)'],
};