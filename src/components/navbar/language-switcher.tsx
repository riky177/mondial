'use client';

import { Locale } from '@i18n/config';
import { usePathname, useRouter } from '@i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (newLocale: Locale) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => handleLanguageChange('id')}
        className={`cursor-pointer font-bold transition-colors ${
          currentLocale === 'id' ? 'text-primary' : ''
        }`}
      >
        ID
      </button>
      <div className="mx-3 h-4 w-px bg-gray-300"></div>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`cursor-pointer font-bold transition-colors ${
          currentLocale === 'en' ? 'text-primary' : ''
        }`}
      >
        EN
      </button>
    </div>
  );
}
