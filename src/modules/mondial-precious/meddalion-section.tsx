import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

const MedallionSection = () => {
  const t = useTranslations('mondialPrecious');
  return (
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
  );
};

export default MedallionSection;
