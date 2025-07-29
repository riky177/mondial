import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

const AllAboutDiamond = () => {
  const t = useTranslations('allAboutDiamond');

  return (
    <div className="mx-auto w-full max-w-[880px] px-4 py-10 pt-5 md:px-0">
      <h2 className="my-2.5 w-full text-center text-[28px] md:text-left md:text-[32pxx]">
        {t('color.title')}
      </h2>
      <Image
        src="https://mondialjeweler.com/static/website/img/about-diamond-color_v4.png"
        alt="diamond color"
        width={880}
        height={0}
        className="mb-6 h-auto w-full md:my-2.5"
      />
      <p className="mb-5 font-red-hat font-light text-[#333333]">
        {t('color.description1')}
      </p>
      <p className="mb-5 font-red-hat font-light text-[#333333]">
        {t('color.description2')}
      </p>
      <p className="mb-10 font-red-hat font-light text-[#333333]">
        {t('color.description3')}
      </p>
      <h2 className="mb-2.5 w-full text-center text-[28px] md:text-left md:text-[32pxx]">
        {t('clarity.title')}
      </h2>
      <p className="mb-5 font-red-hat font-light text-[#333333]">
        {t('clarity.description1')}
      </p>
      <p className="mb-5 font-red-hat font-light text-[#333333]">
        {t('clarity.description2')}
      </p>
      <Image
        src="https://mondialjeweler.com/static/website/img/about-diamond-clarity_v2.png"
        alt="diamond color"
        width={880}
        height={0}
        className="mb-10 h-auto w-full"
      />
      <div className="mb-5 flex flex-col justify-center md:flex-row">
        <div className="flex max-w-full flex-col md:max-w-[50%]">
          <h2 className="mb-2.5 w-full text-center text-[28px] md:text-left md:text-[32pxx]">
            {t('cut.title')}
          </h2>
          <p className="mb-5 font-red-hat font-light text-[#333333]">
            {t('cut.description1')}
          </p>
          <p className="mb-5 font-red-hat font-light text-[#333333]">
            {t('cut.description2')}
          </p>
        </div>
        <Image
          src="https://mondialjeweler.com/static/website/img/about-diamond-cut_v2.png"
          alt="diamond cut"
          width={451}
          height={0}
          className="h-auto w-full md:max-w-[50%]"
        />
      </div>
      <h2 className="mb-2.5 w-full text-center text-[28px] md:text-left md:text-[32pxx]">
        {t('caratWeight.title')}
      </h2>
      <p className="mb-5 font-red-hat font-light text-[#333333]">
        {t('caratWeight.description1')}
      </p>
      <p className="mb-10 font-red-hat font-light text-[#333333]">
        {t('caratWeight.description2')}
      </p>
    </div>
  );
};

export default AllAboutDiamond;
