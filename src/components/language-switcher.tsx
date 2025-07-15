'use client';

import { Locale } from '@i18n/config';
import { usePathname, useRouter } from '@i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`cursor-pointer rounded px-3 py-1 text-sm transition-colors ${
          locale === 'en'
            ? 'bg-yellow-500 text-black'
            : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('id')}
        className={`cursor-pointer rounded px-3 py-1 text-sm transition-colors ${
          locale === 'id'
            ? 'bg-yellow-500 text-black'
            : 'bg-gray-700 text-white hover:bg-gray-600'
        }`}
      >
        ID
      </button>
    </div>
  );
}
