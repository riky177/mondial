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
          // Method 1: Try client-side router first
          router.push(pathname, { locale: newLocale });

          // Method 2: Fallback to window.location after a short delay
          setTimeout(() => {
            if (window.location.pathname.includes(`/${currentLocale}`)) {
              const currentPath = window.location.pathname;
              const searchParams = window.location.search;
              const hash = window.location.hash;

              // Replace current locale with new locale in the path
              const newPath = currentPath.replace(
                `/${currentLocale}`,
                `/${newLocale}`,
              );
              const finalPath = newPath.startsWith(`/${newLocale}`)
                ? newPath
                : `/${newLocale}${currentPath.replace(`/${currentLocale}`, '')}`;

              window.location.href = finalPath + searchParams + hash;
            }
          }, 100);
        } catch (error) {
          console.error('Language switch error:', error);
          // Fallback: force reload with new locale
          const newUrl = window.location.href.replace(
            `/${currentLocale}/`,
            `/${newLocale}/`,
          );
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
