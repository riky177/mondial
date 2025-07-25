import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import SectionCollection from './section-collection';
import SectionExplores from './section-explores';

const Landing = () => {
  const t = useTranslations('landing');

  return (
    <div className="w-full">
      <Link href="/mondial-precious" className="w-full">
        <video
          src="https://production-mondial.stamps.id/media/videos/2024/09/30/M_Video_Landing_Page_New_Precious_v2_bDmOR1B.mp4"
          controls={false}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="mb-10 h-auto w-full object-cover md:mb-20"
        />
        <h2 className="text-center text-sm font-bold md:text-lg">
          {t('mondialPrecious')}
        </h2>
        <p className="mb-10 mt-4 text-center font-red-hat text-xs underline md:mb-20 md:text-sm">
          {t('discoverCollection')}
        </p>
      </Link>
      <Link href="/products/i-said-mondial" className="w-full">
        <Image
          src="https://production-mondial.stamps.id/media/thumb/banner-image/2025/5/9/foydzvfawzxw82bqzwjpyc_size_1280x450.png"
          width={1280}
          height={450}
          alt="I Said Mondial"
          style={{
            width: '100%',
            height: 'auto',
          }}
          className="mb-10 md:mb-20"
        />
        <h2 className="text-center text-sm font-bold md:text-lg">
          {t('iSaidMondial')}
        </h2>
        <p className="my-4 text-center font-red-hat text-xs underline md:text-sm">
          {t('seeCollection')}
        </p>
      </Link>
      <Link href="/mondial-blue-house" className="w-full">
        <video
          src="https://production-mondial.stamps.id/media/videos/2024/12/11/Web_Banner_3D_Video_Blak_1440680_Frame_1.webm"
          controls={false}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="mb-10 h-auto w-full object-cover md:mb-20"
        />
      </Link>
      <SectionExplores />
      <SectionCollection />
    </div>
  );
};

export default Landing;
