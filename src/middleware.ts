import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const EMOJI_REGEX = /%[0-9A-F]{2}/i;

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|css|js)$/)
  ) {
    return NextResponse.next();
  }

  if (EMOJI_REGEX.test(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico|sitemap.xml|robots.txt).*)'],
};