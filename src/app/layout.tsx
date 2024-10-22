import '@/res/css/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { noto_sans } from '../res/fonts/font';
import { NextLayout, NextProvider } from './providers';

// metadata는 별도의 config 파일이나 다른 방식으로 처리하는 것이 좋습니다
export const metadata = {
  title: 'Your App Title',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={noto_sans.className}>
        <NextProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <NextLayout>{children}</NextLayout>
          </NextIntlClientProvider>
        </NextProvider>
      </body>
    </html>
  );
}
