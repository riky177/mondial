import { useTranslations } from 'next-intl';
import React from 'react';

import { DATA } from './constant';
import FuturedArticles from './futured-articles';
import MedallionSection from './meddalion-section';
import MemberFormSection from './member-form-section';
import TasselSection from './tassel-section';
import VariantSection from './variant-section';

const MondialPrecious = () => {
  const t = useTranslations('mondialPrecious');
  return (
    <div className="flex w-full flex-col gap-10 bg-[#0D0F20] text-white md:gap-20">
      <video
        src="https://production-mondial.stamps.id/media/videos/2024/09/30/M_Video_Landing_Page_New_Precious_v2_bDmOR1B.mp4"
        controls={true}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        className="h-auto w-full object-cover"
      />
      <TasselSection />
      <MedallionSection />
      <MemberFormSection />
      <div className="relative aspect-video w-full">
        <iframe
          src="https://www.youtube.com/embed/b4b12HXuqoQ?start=5"
          title={t('youtubeVideoTitle')}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {DATA.map((item, index) => (
        <VariantSection key={index} {...item} index={index} />
      ))}
      <FuturedArticles />

      <div className="font-montserrat w-full bg-white p-2.5 text-center text-xs font-light text-black md:text-base">
        {t('copyright')}
      </div>
    </div>
  );
};

export default MondialPrecious;
