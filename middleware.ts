// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || 'bilelabassi.com';

  // Remove `www.` (redirect to bare domain)
  if (hostname.startsWith('www.')) {
    return NextResponse.redirect(
      new URL(`https://${hostname.replace('www.', '')}${url.pathname}`, request.url),
    );
  }

  // Force HTTPS (if not already)
  if (url.protocol === 'http:') {
    return NextResponse.redirect(
      new URL(`https://${hostname}${url.pathname}`, request.url),
    );
  }

  // Strip all paths (e.g., /%F0%9F%93%A7 → /)
  if (url.pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Optional: Remove all query parameters (e.g., ?fbclid=...)
  if (url.search) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Apply middleware to all paths except static files
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};