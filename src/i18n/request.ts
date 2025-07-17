import fs from 'fs';
import { getRequestConfig } from 'next-intl/server';
import path from 'path';

import { Locale } from './config';
import { routing } from './routing';

type MessageObject = Record<string, unknown>;

async function loadMessages(locale: string): Promise<MessageObject> {
  const rootDir = path.join(process.cwd(), 'src', 'messages');
  const messages: MessageObject = {};

  const mergeMessages = (
    target: MessageObject,
    keys: string[],
    value: MessageObject,
  ) => {
    let current = target;
    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = value;
      } else {
        current[key] = current[key] || {};
        current = current[key] as MessageObject;
      }
    });
  };

  const readDirRecursive = (dir: string, namespace: string[] = []) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        readDirRecursive(fullPath, [...namespace, entry.name]);
      } else if (entry.isFile() && entry.name === `${locale}.json`) {
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const json = JSON.parse(fileContent);
        if (namespace.length > 0) {
          mergeMessages(messages, namespace, json);
        } else {
          Object.assign(messages, json);
        }
      }
    }
  };

  readDirRecursive(rootDir);
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
