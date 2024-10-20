import '@/res/css/globals.css';
import { useTranslations } from 'next-intl';
import localFont from 'next/font/local';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const font = localFont({
  src: '../../res/fonts/PretendardVariable.woff2',
  weight: '400 900',
  display: 'swap',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations();
  const messages = useMessages();
  return (
    <html lang={locale}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="author" content="" />
      <title>{t('common.title')}</title>
      <body className={`${font.variable} font-pretendard`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
