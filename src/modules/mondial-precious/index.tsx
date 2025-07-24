import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

const MondialPrecious = () => {
  const t = useTranslations('mondialPrecious');
  return (
    <div className="flex w-full flex-col gap-10 bg-[#0D0F20] text-white md:gap-20">
      <div id="video">
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
      </div>
      <div
        id="tassel"
        className="container flex flex-wrap items-center justify-center gap-7"
      >
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/mondial-tassel.jpg"
          alt="Mondial Tassel"
          className="md:hidden"
          width={352}
          height={466}
        />
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/mondial-tassel.jpg"
          alt="Mondial Tassel"
          className="hidden md:block"
          width={540}
          height={716}
        />
        <div className="flex w-full flex-col items-center justify-center md:w-[50%]">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/mondial-tassel-product.png"
            alt="Mondial Tassel"
            className="md:hidden"
            width={352}
            height={215}
          />
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/mondial-tassel-product.png"
            alt="Mondial Tassel"
            className="hidden md:block"
            width={540}
            height={330}
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-5">
            <h2 className="text-center font-trajan-bold text-[32px] md:text-[40px]">
              {t('tasselTitle')}
            </h2>
            <p className="font-montserrat text-center text-sm font-light md:text-xl">
              {t('tasselDescription')}
            </p>
            <Link
              href="/products/mondial-precious"
              className="font-montserrat mt-5 bg-primary px-[60px] py-1 text-2xl font-light italic text-black"
            >
              {t('discover')}
            </Link>
          </div>
        </div>
      </div>
      <div
        id="tassel-images"
        className="container hidden items-center justify-center gap-5 md:flex"
      >
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/tassel-1.jpg"
          alt="tassel"
          width={331}
          height={412}
        />
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/tassel-2.jpg"
          alt="tassel"
          width={331}
          height={412}
        />
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/tassel-3.jpg"
          alt="tassel"
          width={331}
          height={412}
        />
      </div>
      <div
        id="medallion"
        className="container flex flex-col items-center gap-5 md:flex-row"
      >
        <div className="order-1 flex w-full max-w-full flex-col items-center justify-center md:order-none md:max-w-[50%]">
          <h2 className="text-center font-trajan-bold text-[32px] md:text-[40px]">
            {t('medallionTitle')}
          </h2>
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/second-product-image.svg"
            className="md:hidden"
            alt="The Medallion Brooch"
            width={315}
            height={315}
          />
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/second-product-image.svg"
            className="hidden md:block"
            alt="The Medallion Brooch"
            width={516}
            height={516}
          />
          <Link
            href="/products/mondial-precious"
            className="font-montserrat mt-5 bg-primary px-[60px] py-1 text-2xl font-light italic text-black"
          >
            {t('discover')}
          </Link>
        </div>
        <div className="flex max-w-full flex-col items-center justify-center md:max-w-[50%]">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/second-image.jpg"
            alt="The Medallion Brooch"
            className="md:hidden"
            width={315}
            height={237}
          />
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/second-image.jpg"
            alt="The Medallion Brooch"
            className="hidden md:block"
            width={559}
            height={420}
          />
          <p className="font-montserrat mt-5 px-5 text-center text-sm font-light md:p-0 md:text-left md:text-xl">
            {t('medallionDescription1')}
          </p>
          <p className="font-montserrat mt-5 px-5 text-center text-sm font-light md:p-0 md:text-left md:text-xl">
            {t('medallionDescription2')}
          </p>
        </div>
      </div>
      <div
        id="member-form"
        className="m-auto flex max-w-[580px] flex-col items-center justify-center gap-10 p-5"
      >
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/member-form.svg"
          alt="Member Form"
          width={390}
          height={139}
          className="hidden md:block"
        />
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/member-form.svg"
          alt="Member Form"
          width={315}
          height={112}
          className="md:hidden"
        />
        <p className="text-center text-2xl font-light uppercase">
          {t('memberFormTitle')}
        </p>
        <div className="w-full">
          <label className="font-montserrat">{t('phoneLabel')}</label>
          <div className="flex w-full gap-1 bg-white px-2 py-2">
            <div className="font-montserrat border-r-[1px] border-r-gray-200 px-2 text-tertiary">
              +62
            </div>
            <input
              type="number"
              placeholder={t('phonePlaceholder')}
              className="font-montserrat w-full text-black outline-none"
            />
          </div>
        </div>
        <button className="font-montserrat w-full bg-primary px-[60px] py-1 text-2xl font-light italic text-black">
          {t('discover')}
        </button>
      </div>
      <div id="video-youtube" className="w-full">
        <div className="relative aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/b4b12HXuqoQ?start=5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
      <div
        id="arc"
        className="container flex flex-wrap items-center justify-center gap-7"
      >
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/mondial-arc.jpg"
          alt="Mondial Arc"
          className="md:hidden"
          width={352}
          height={466}
        />
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/mondial-arc.jpg"
          alt="Mondial Arc"
          className="hidden md:block"
          width={540}
          height={716}
        />
        <div className="flex w-full flex-col items-center justify-center md:w-[50%]">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/mondial-arc-product.png"
            alt="Mondial Arc"
            className="md:hidden"
            width={352}
            height={215}
          />
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/mondial-arc-product.png"
            alt="Mondial Arc"
            className="hidden md:block"
            width={540}
            height={330}
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-5">
            <h2 className="text-center font-trajan-bold text-[32px] md:text-[40px]">
              {t('arcTitle')}
            </h2>
            <p className="font-montserrat text-center text-sm font-light md:text-xl">
              {t('arcDescription')}
            </p>
            <Link
              href="/products/mondial-precious"
              className="font-montserrat mt-5 bg-primary px-[60px] py-1 text-2xl font-light italic text-black"
            >
              {t('discover')}
            </Link>
          </div>
        </div>
      </div>
      <div
        id="tassel-images"
        className="container hidden items-center justify-center gap-5 md:flex"
      >
        <div className="flex max-w-[30%] flex-col items-center justify-center">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/arc-1.png"
            alt="tassel"
            width={331}
            height={412}
          />
          <p className="text-center text-[22px] uppercase">
            {t('arcLadiesRing')}
          </p>
        </div>
        <div className="flex max-w-[30%] flex-col items-center justify-center">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/arc-2.png"
            alt="tassel"
            width={331}
            height={412}
          />
          <p className="text-center text-[22px] uppercase">
            {t('arcPendantChain')}
          </p>
        </div>
        <div className="flex max-w-[30%] flex-col items-center justify-center">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/arc-3.png"
            alt="tassel"
            width={331}
            height={412}
          />
          <p className="text-center text-[22px] uppercase">
            {t('arcTwistLadiesRing')}
          </p>
        </div>
      </div>
      <div
        id="Trevale"
        className="container flex flex-wrap items-center justify-center gap-7"
      >
        <div className="order-1 flex w-full flex-col items-center justify-center md:order-none md:w-[50%]">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/mondial-trevale-product.png"
            alt="Mondial Trevale"
            className="md:hidden"
            width={352}
            height={215}
          />
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/mondial-trevale-product.png"
            alt="Mondial Trevale"
            className="hidden md:block"
            width={540}
            height={330}
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-5">
            <h2 className="text-center font-trajan-bold text-[32px] md:text-[40px]">
              {t('trevaleTitle')}
            </h2>
            <p className="font-montserrat px-4 text-center text-sm font-light md:px-0 md:text-xl">
              {t('trevaleDescription')}
            </p>
            <Link
              href="/products/mondial-precious"
              className="font-montserrat mt-5 bg-primary px-[60px] py-1 text-2xl font-light italic text-black"
            >
              {t('discover')}
            </Link>
          </div>
        </div>
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/mondial-trevale.jpg"
          alt="Mondial Arc"
          className="md:hidden"
          width={352}
          height={466}
        />
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/mondial-trevale.jpg"
          alt="Mondial Arc"
          className="hidden md:block"
          width={540}
          height={716}
        />
      </div>
      <div
        id="tassel-images"
        className="container hidden items-center justify-center gap-5 md:flex"
      >
        <div className="flex max-w-[30%] flex-col items-center justify-center">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/trevale-1.png"
            alt="tassel"
            width={331}
            height={412}
          />
          <p className="text-center text-[22px] uppercase">
            {t('trevaleEarrings')}
          </p>
        </div>
        <div className="flex max-w-[30%] flex-col items-center justify-center">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/trevale-2.png"
            alt="tassel"
            width={331}
            height={412}
          />
          <p className="text-center text-[22px] uppercase">
            {t('trevaleNecklace')}
          </p>
        </div>
        <div className="flex max-w-[30%] flex-col items-center justify-center">
          <Image
            src="https://mondialjeweler.com/static/website/img/anniversary/trevale-3.png"
            alt="tassel"
            width={331}
            height={412}
          />
          <p className="text-center text-[22px] uppercase">
            {t('trevaleLadiesRing')}
          </p>
        </div>
      </div>
      <div className="font-montserrat w-full bg-white p-2.5 text-center text-xs font-light text-black md:text-base">
        {t('copyright')}
      </div>
    </div>
  );
};

export default MondialPrecious;
