import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-datepicker/dist/react-datepicker.css';

import type { Metadata } from 'next';

import Providers from '@/components/providers';
import { defaultLocale } from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Luxury Diamond Jewellery, Accessories and Gifts - Mondial',
  description:
    'MONDIAL is a luxury diamond jewellery brand in Indonesia, with bold designs that give you a distinctive character and identity to stand out from the rest.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
