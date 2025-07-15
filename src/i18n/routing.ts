import { createNavigation } from 'next-intl/navigation';

import { defaultLocale, localePrefix, locales } from './config';

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
};

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix,
  defaultLocale,
});
