import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Regex to detect emojis or other unwanted URL-encoded characters
const EMOJI_REGEX = /%[0-9A-F]{2}/i; // Catches URL-encoded chars like %F0%9F%93%A7 (📧)

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Skip ALL static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|css|js)$/) // Static files
  ) {
    return NextResponse.next();
  }

  // Redirect ONLY if path contains URL-encoded emoji sequences (like %F0%9F%93%A7)
  if (EMOJI_REGEX.test(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Allow all other paths (/account, /admin, dynamic routes, etc.)
  return NextResponse.next();
}

// Apply middleware to all paths except excluded ones
export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico|sitemap.xml|robots.txt).*)'],
};