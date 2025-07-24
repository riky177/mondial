import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    domains: [
      'production-mondial.stamps.id',
      'media-order.cmkclub.com',
      'mondialjeweler.com',
    ],
  },
};

export default withNextIntl(nextConfig);
