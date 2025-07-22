import { getRequestConfig } from 'next-intl/server';

import { Locale } from './config';
import { routing } from './routing';

type MessageObject = Record<string, unknown>;

async function loadMessages(locale: string): Promise<MessageObject> {
  const messages: MessageObject = {};

  // Import all message files statically to work in serverless environments
  const messageModules = {
    common: () => import(`../messages/common/${locale}.json`),
    landing: () => import(`../messages/landing/${locale}.json`),
    navbar: () => import(`../messages/navbar/${locale}.json`),
    auth: () => import(`../messages/auth/${locale}.json`),
    accounts: () => import(`../messages/accounts/${locale}.json`),
  };

  // Load all message modules
  for (const [namespace, moduleLoader] of Object.entries(messageModules)) {
    try {
      const messageModule = await moduleLoader();
      messages[namespace] = messageModule.default || messageModule;
    } catch (error) {
      console.warn(
        `Failed to load messages for ${namespace}/${locale}:`,
        error,
      );
      // Continue loading other modules even if one fails
    }
  }

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const resolvedLocale: string = locale as string;

  const messages = await loadMessages(resolvedLocale);

  return {
    locale: resolvedLocale,
    messages,
  };
});
