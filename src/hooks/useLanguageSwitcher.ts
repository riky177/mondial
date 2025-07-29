import { Locale } from '@i18n/config';
import { usePathname, useRouter } from '@i18n/routing';
import { useLocale } from 'next-intl';
import { useCallback, useTransition } from 'react';

export const useLanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = useCallback(
    (newLocale: Locale) => {
      if (newLocale === currentLocale || isPending) {
        return;
      }

      startTransition(() => {
        try {
          // Use the next-intl router which handles locale switching properly
          router.push(pathname, { locale: newLocale });
        } catch (error) {
          console.error('Language switch error:', error);
          // Fallback: manual URL construction only if router fails
          const currentPath = window.location.pathname;
          const searchParams = window.location.search;
          const hash = window.location.hash;

          // Remove any existing locale from the path
          let pathWithoutLocale = currentPath;
          for (const locale of ['en', 'id']) {
            if (pathWithoutLocale.startsWith(`/${locale}/`)) {
              pathWithoutLocale = pathWithoutLocale.substring(
                `/${locale}`.length,
              );
              break;
            } else if (pathWithoutLocale === `/${locale}`) {
              pathWithoutLocale = '/';
              break;
            }
          }

          // Construct new URL with the target locale
          const newUrl = `/${newLocale}${pathWithoutLocale}${searchParams}${hash}`;
          window.location.href = newUrl;
        }
      });
    },
    [router, pathname, currentLocale, isPending],
  );

  return {
    currentLocale,
    isPending,
    switchLanguage,
  };
};
