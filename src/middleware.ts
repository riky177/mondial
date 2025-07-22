import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  // Handle internationalization first
  const response = intlMiddleware(request);

  // If intl middleware returns a response (redirect), return it immediately
  if (response) {
    return response;
  }

  // Check if the request is for an auth page or accounts page
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname.includes('/auth/');
  const isAccountsPage = pathname.includes('/accounts/');

  // Get user token for authentication checks
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (isAuthPage) {
    // If user has a session and is trying to access auth pages, redirect to home
    if (token) {
      const url = request.nextUrl.clone();
      // Extract locale from the current path
      const locale = pathname.split('/')[1];
      // Redirect to the localized home page
      url.pathname = ['id', 'en'].includes(locale) ? `/${locale}` : '/';
      return NextResponse.redirect(url);
    }
  }

  if (isAccountsPage) {
    // If user doesn't have a session and is trying to access accounts pages, redirect to login
    if (!token) {
      const url = request.nextUrl.clone();
      // Extract locale from the current path
      const locale = pathname.split('/')[1];
      // Redirect to the localized login page
      url.pathname = ['id', 'en'].includes(locale)
        ? `/${locale}/auth/login`
        : '/auth/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(id|en)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|global|fonts).*)',
  ],
};
