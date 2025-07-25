import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

const TasselSection = () => {
  const t = useTranslations('mondialPrecious');
  return (
    <>
      <div
        id="tassel"
        className="container flex flex-wrap items-center justify-center gap-7"
      >
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/mondial-tassel.jpg"
          alt="Mondial Tassel"
          className="border-2 border-[#77B8D4] md:hidden"
          width={352}
          height={466}
        />
        <Image
          src="https://mondialjeweler.com/static/website/img/anniversary/mondial-tassel.jpg"
          alt="Mondial Tassel"
          className="hidden border-2 border-[#77B8D4] md:block"
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
            <p className="font-montserrat px-2 text-center text-sm font-light md:px-0 md:text-xl">
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
    </>
  );
};

export default TasselSection;
