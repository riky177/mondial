import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathSegments = pathname.split('/').filter(Boolean);
  const locale = pathSegments[0];
  const cleanPath = pathSegments.slice(1).join('/');

  const isAuthPage =
    cleanPath.startsWith('auth/') || pathname.includes('/auth/');
  const isAccountsPage =
    cleanPath.startsWith('accounts/') || pathname.includes('/accounts/');
  const isWishlistPage =
    cleanPath === 'wishlist' || pathname.includes('/wishlist');

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (isAuthPage) {
    if (token) {
      const url = request.nextUrl.clone();
      url.pathname = ['id', 'en'].includes(locale) ? `/${locale}` : '/en';
      return NextResponse.redirect(url);
    }
  }

  if (isAccountsPage || isWishlistPage) {
    if (!token) {
      const url = request.nextUrl.clone();
      url.pathname = ['id', 'en'].includes(locale)
        ? `/${locale}/auth/login`
        : '/en/auth/login';
      return NextResponse.redirect(url);
    }
  }

  const intlResponse = intlMiddleware(request);

  if (intlResponse) {
    return intlResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|global|fonts).*)'],
};
