import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Diamond Jewellery, Accessories and Gifts - Mondial',
  description:
    'MONDIAL is a luxury diamond jewellery brand in Indonesia, with bold designs that give you a distinctive character and identity to stand out from the rest.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">{children}</body>
    </html>
  );
}
