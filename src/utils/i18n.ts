import { createTranslator } from 'next-intl';
import en from '@/res/messages/en.json';
import ko from '@/res/messages/ko.json';
import { SupportedLocale } from '@/types/config';

export function createMessagesFor(locale: SupportedLocale) {
  const messages = locale === 'en' ? en : ko;
  return createTranslator({ messages, locale });
}
