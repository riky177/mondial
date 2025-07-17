import { createNavigation } from 'next-intl/navigation';

import { defaultLocale, localePrefix, locales } from './config';

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
};

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix,
  defaultLocale,
});
