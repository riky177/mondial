'use client';

import { useLanguageSwitcher } from '@hooks/useLanguageSwitcher';

export default function LanguageSwitcher() {
  const { currentLocale, isPending, switchLanguage } = useLanguageSwitcher();

  return (
    <div className="font-trajan-bold flex items-center">
      <button
        onClick={() => switchLanguage('id')}
        disabled={isPending}
        className={`cursor-pointer text-xs font-bold transition-colors ${
          currentLocale === 'id' ? 'text-primary' : ''
        } ${isPending ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        ID
      </button>
      <div className="mx-2 h-4 w-px bg-gray-300"></div>
      <button
        onClick={() => switchLanguage('en')}
        disabled={isPending}
        className={`cursor-pointer text-xs font-bold transition-colors ${
          currentLocale === 'en' ? 'text-primary' : ''
        } ${isPending ? 'cursor-not-allowed opacity-50' : ''}`}
      >
        EN
      </button>
    </div>
  );
}
