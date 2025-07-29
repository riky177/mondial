import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

const MondialBlueHouse = () => {
  const t = useTranslations('mondialBlueHouse');

  return (
    <div className="py-20 text-[#1D1E21]">
      <div className="mx-auto mb-3 w-full max-w-[560px] px-4">
        <Image
          src="https://mondialjeweler.com/static/website/img/blue_house/blue_house_1.webp"
          alt="Blue House 1"
          width={560}
          height={0}
          className="h-auto w-full"
        />
      </div>
      <p className="mx-auto mb-10 max-w-[800px] px-4 text-center font-red-hat font-light">
        {t('welcome')}
      </p>
      <video
        src="https://mondialjeweler.com/static/website/video/blue_house_video_2_desktop.mp4"
        controls
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        className="w-[calc(100vw - 140px)] mx-auto mb-20 h-auto object-cover md:mb-[120px]"
      />
      <div className="mb-5 flex flex-col items-center justify-center gap-y-5 md:mb-10 md:flex-row">
        <div className="order-1 flex flex-1 items-center justify-center px-4 md:order-none">
          <div className="gap- flex max-w-[400px] flex-col gap-y-5 md:gap-y-6">
            <h2 className="text-center font-trajan-bold text-[32px]">
              {t('timelessCollection.title')}
            </h2>
            <p className="text-center font-red-hat text-sm font-light md:text-base">
              {t('timelessCollection.description')}
            </p>
            <Link
              href="/products/timeless-3"
              className="text-center font-red-hat text-sm font-light underline md:text-base"
            >
              {t('timelessCollection.seeCollection')}
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="https://mondialjeweler.com/static/website/img/blue_house/blue_house_2.webp"
            alt="Blue House 2"
            width={581}
            height={0}
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="mb:20 flex flex-col items-center justify-center gap-y-5 md:mb-[120px] md:flex-row">
        <div className="flex-1">
          <Image
            src="https://mondialjeweler.com/static/website/img/blue_house/blue_house_3.webp"
            alt="Blue House 3"
            width={581}
            height={0}
            className="h-auto w-full"
          />
        </div>
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="gap- flex max-w-[400px] flex-col gap-y-5 md:gap-y-6">
            <h2 className="text-center font-trajan-bold text-[32px]">
              {t('mensJewelry.title')}
            </h2>
            <p className="text-center font-red-hat text-sm font-light md:text-base">
              {t('mensJewelry.description')}
            </p>
            <Link
              href="/products/mens-jewelry"
              className="text-center font-red-hat text-sm font-light underline md:text-base"
            >
              {t('mensJewelry.seeCollection')}
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-20 flex flex-col gap-5 md:mx-20 md:mb-[120px] md:gap-10">
        <Image
          src="https://mondialjeweler.com/static/website/img/blue_house/blue_house_4.webp"
          alt="Blue House 4"
          width={1280}
          height={0}
          className="h-auto w-full"
        />
        <div className="mx-auto flex w-full max-w-[800px] flex-col justify-center px-4 md:px-0">
          <h2 className="text-center font-trajan-bold text-[32px]">
            {t('fantasyCollection.title')}
          </h2>
          <p className="text-center font-red-hat text-sm font-light md:text-base">
            {t('fantasyCollection.description')}
          </p>
          <Link
            href="/products/fantasy"
            className="text-center font-red-hat text-sm font-light underline md:text-base"
          >
            {t('fantasyCollection.seeCollection')}
          </Link>
        </div>
      </div>
      <div className="mb-5 flex flex-col items-center justify-center gap-y-5 md:mb-10 md:flex-row">
        <div className="order-1 flex flex-1 items-center justify-center px-4 md:order-none">
          <div className="gap- flex max-w-[400px] flex-col gap-y-5 md:gap-y-6">
            <h2 className="text-center font-trajan-bold text-[32px]">
              {t('galaCollection.title')}
            </h2>
            <p className="text-center font-red-hat text-sm font-light md:text-base">
              {t('galaCollection.description')}
            </p>
            <Link
              href="/products/gala-collection"
              className="text-center font-red-hat text-sm font-light underline md:text-base"
            >
              {t('galaCollection.seeCollection')}
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="https://mondialjeweler.com/static/website/img/blue_house/blue_house_5.webp"
            alt="Blue House 3"
            width={581}
            height={0}
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5 md:flex-row">
        <div className="flex-1">
          <Image
            src="https://mondialjeweler.com/static/website/img/blue_house/blue_house_6.webp"
            alt="Blue House 2"
            width={581}
            height={0}
            className="h-auto w-full"
          />
        </div>
        <div className="order-1 flex flex-1 items-center justify-center px-4 md:order-none">
          <div className="gap- flex max-w-[400px] flex-col gap-y-5 md:gap-y-6">
            <h2 className="text-center font-trajan-bold text-[32px]">
              {t('preciousStone.title')}
            </h2>
            <p className="text-center font-red-hat text-sm font-light md:text-base">
              {t('preciousStone.description')}
            </p>
            <Link
              href="/products/precious-stone-2"
              className="text-center font-red-hat text-sm font-light underline md:text-base"
            >
              {t('preciousStone.seeCollection')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MondialBlueHouse;
