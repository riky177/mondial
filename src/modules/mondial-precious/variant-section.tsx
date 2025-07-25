import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { DataType } from './constant';

type VariantSectionProps = {
  index: number;
} & DataType;

const VariantSection = ({
  mainImage,
  titleKey,
  descriptionKeys,
  items,
  secondImage,
  index,
}: VariantSectionProps) => {
  const t = useTranslations('mondialPrecious');
  const title = t(titleKey);

  return (
    <div className="flex w-full flex-col gap-10 md:gap-20">
      <div
        id="arc"
        className="container flex flex-wrap items-center justify-center gap-7"
      >
        <Image
          src={mainImage}
          alt={`Mondial ${title}`}
          className="border-2 border-[#77B8D4] md:hidden"
          width={352}
          height={466}
        />
        <Image
          src={mainImage}
          alt={`Mondial ${title}`}
          className="hidden border-2 border-[#77B8D4] md:block"
          width={540}
          height={716}
        />
        <div
          className={`flex w-full flex-col items-center justify-center md:w-[50%] ${index % 2 !== 0 ? 'order-none md:order-[-1]' : ''}`}
        >
          <Image
            src={secondImage}
            alt={`Mondial ${title}`}
            className="md:hidden"
            width={352}
            height={215}
          />
          <Image
            src={secondImage}
            alt={`Mondial ${title}`}
            className="hidden md:block"
            width={540}
            height={330}
          />
          <div className="flex flex-col items-center justify-center gap-5 px-2 md:px-0">
            <h2 className="text-center font-trajan-bold text-[32px] md:text-[40px]">
              {title}
            </h2>

            {descriptionKeys.map((descKey, idx) => (
              <p
                key={idx}
                className="font-montserrat px-2 text-center text-sm font-light md:px-0 md:text-xl"
              >
                {t(descKey)}
              </p>
            ))}
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
        id={`${title.toLowerCase()}-images`}
        className="container hidden items-center justify-center gap-5 md:flex"
      >
        {items.map((subItem, subIndex) => (
          <div
            className={`flex max-w-[${90 / items.length}%] w-full flex-col items-center justify-center`}
            key={subIndex}
          >
            <Image
              src={subItem.image}
              alt={`Mondial ${title} ${subItem.descriptionKey ? t(subItem.descriptionKey) : ''}`}
              width={331}
              height={412}
            />
            <p className="text-center text-[22px] uppercase">
              {subItem.descriptionKey ? t(subItem.descriptionKey) : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariantSection;
