export const locales = ['en', 'id'] as const;
export const defaultLocale = 'en' as const;

export const localePrefix = 'always' as const;

export type Locale = (typeof locales)[number];
