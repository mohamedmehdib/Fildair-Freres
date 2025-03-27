// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || 'bilelabassi.com';

  // Skip redirects for static files and API routes
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  // Redirect HTTP → HTTPS (if not already)
  if (url.protocol === 'http:') {
    return NextResponse.redirect(
      new URL(`https://${hostname}${url.pathname}`, request.url),
    );
  }

  // Redirect `www` → bare domain (only if host is www)
  if (hostname.startsWith('www.')) {
    return NextResponse.redirect(
      new URL(`https://${hostname.replace('www.', '')}${url.pathname}`, request.url),
    );
  }

  // Redirect all non-root paths to homepage (except excluded ones)
  if (url.pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}