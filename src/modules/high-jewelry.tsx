import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

const HighJewelry = () => {
  const t = useTranslations('highJewelry');

  return (
    <div className="my-10 w-full md:my-20">
      <div className="mx-auto mb-[60px] flex max-w-[920px] flex-col gap-5 px-4 md:mb-[100px] md:px-0">
        <h1 className="text-center font-trajan-bold text-2xl uppercase text-[#001C7F] md:text-[48px]">
          {t('title')}
        </h1>
        <p className="text-center font-red-hat font-light">{t('subtitle')}</p>
      </div>
      <div className="mb-5 flex flex-col items-center justify-center gap-y-5 md:mb-10 md:flex-row">
        <div className="order-1 flex flex-1 items-center justify-center px-4 md:order-none">
          <div className="gap- flex max-w-[400px] flex-col gap-y-5 md:gap-y-6">
            <h2 className="text-center font-trajan-bold text-4xl">
              {t('mecUltimate.title')}
            </h2>
            <p className="text-center font-red-hat text-sm font-light md:text-base">
              {t('mecUltimate.description')}
            </p>
            <Link
              href="/mondial-mec"
              className="text-center font-red-hat text-sm font-light underline md:text-base"
            >
              {t('mecUltimate.discoverMore')}
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            src="https://mondialjeweler.com/static/website/img/high_jewelry/1.webp"
            alt="High Jewelry 1"
            width={581}
            height={0}
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="mb-5 flex flex-col items-center justify-center gap-y-5 md:mb-10 md:flex-row">
        <div className="w-full md:w-[50%]">
          <Image
            src="https://mondialjeweler.com/static/website/img/high_jewelry/2.webp"
            alt="High Jewelry 2"
            width={581}
            height={0}
            className="h-auto w-full"
          />
        </div>
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="gap- flex max-w-[400px] flex-col gap-y-5 md:gap-y-6">
            <h2 className="text-center font-trajan-bold text-4xl">
              {t('brilliantRose.title')}
            </h2>
            <p className="text-center font-red-hat text-sm font-light md:text-base">
              {t('brilliantRose.description')}
            </p>
            <Link
              href="/products/brilliant-rose-2"
              className="text-center font-red-hat text-sm font-light underline md:text-base"
            >
              {t('brilliantRose.seeCollection')}
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-12 flex flex-col items-center justify-center gap-y-5 md:mb-[100px] md:flex-row">
        <div className="order-1 flex flex-1 items-center justify-center px-4 md:order-none">
          <div className="gap- flex max-w-[400px] flex-col gap-y-5 md:gap-y-6">
            <h2 className="text-center font-trajan-bold text-4xl">
              {t('firemark.title')}
            </h2>
            <p className="text-center font-red-hat text-sm font-light md:text-base">
              {t('firemark.description')}
            </p>
            <Link
              href="https://mondialjeweler.com/en/products/firemark-2"
              className="text-center font-red-hat text-sm font-light underline md:text-base"
            >
              {t('firemark.discoverMore')}
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            src="https://mondialjeweler.com/static/website/img/high_jewelry/3.webp"
            alt="High Jewelry 1"
            width={581}
            height={0}
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-5 px-4 md:px-0">
        <h2 className="text-center font-trajan-bold text-2xl uppercase md:text-4xl">
          {t('preciousStoneSection.title')}
        </h2>
        <p className="max-w-[800px] text-center font-red-hat font-light">
          {t('preciousStoneSection.description')}
        </p>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-[1100px] flex-col gap-10 md:mt-20">
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="flex-1">
            <Image
              src="https://mondialjeweler.com/static/website/img/high_jewelry/c1.webp"
              width={540}
              height={540}
              alt="High Jewelry 1"
              className="h-auto w-full"
            />
            <div className="mt-5 flex flex-col gap-2 px-4">
              <h3 className="text-center font-trajan-bold text-xl">
                {t('categories.preciousStone.title')}
              </h3>
              <Link
                href="/products/precious-stone-2"
                className="text-center font-red-hat text-sm font-light underline"
              >
                {t('categories.preciousStone.discoverMore')}
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://mondialjeweler.com/static/website/img/high_jewelry/c2.webp"
              width={540}
              height={540}
              alt="High Jewelry 1"
              className="h-auto w-full"
            />
            <div className="mt-5 flex flex-col gap-2 px-4">
              <h3 className="text-center font-trajan-bold text-xl">
                {t('categories.fancyDesign.title')}
              </h3>
              <Link
                href="/products/fancy-design"
                className="text-center font-red-hat text-sm font-light underline"
              >
                {t('categories.fancyDesign.discoverMore')}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="flex-1">
            <Image
              src="https://mondialjeweler.com/static/website/img/high_jewelry/c3.webp"
              width={540}
              height={540}
              alt="High Jewelry 1"
              className="h-auto w-full"
            />
            <div className="mt-5 flex flex-col gap-2 px-4">
              <h3 className="text-center font-trajan-bold text-xl">
                {t('categories.fancyShapeDiamond.title')}
              </h3>
              <Link
                href="/products/fancy-shape-diamond"
                className="text-center font-red-hat text-sm font-light underline"
              >
                {t('categories.fancyShapeDiamond.discoverMore')}
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="https://mondialjeweler.com/static/website/img/high_jewelry/c4.webp"
              width={540}
              height={540}
              alt="High Jewelry 1"
              className="h-auto w-full"
            />
            <div className="mt-5 flex flex-col gap-2 px-4">
              <h3 className="text-center font-trajan-bold text-xl">
                {t('categories.fancyColorDiamond.title')}
              </h3>
              <Link
                href="/products/fancy-color-diamond"
                className="text-center font-red-hat text-sm font-light underline"
              >
                {t('categories.fancyColorDiamond.discoverMore')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[800px] flex-col items-center justify-center gap-5 px-4 md:mt-[100px] md:px-0">
        <h2 className="text-center font-trajan-bold text-2xl uppercase md:text-4xl">
          {t('expertSection.title')}
        </h2>
        <p className="text-center font-red-hat font-light">
          {t('expertSection.description')}
        </p>
        <Link
          href="/contacts"
          className="rounded-3xl bg-black px-6 py-3 text-center font-red-hat font-light text-white"
        >
          {t('expertSection.contactUs')}
        </Link>
      </div>
    </div>
  );
};

export default HighJewelry;
