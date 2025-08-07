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
  const upperCaseTitle = title.toLocaleUpperCase();

  const hasNegativeMargin = ['GRADIORE', 'FIERTE', 'LUNE'].includes(
    upperCaseTitle,
  );
  const isOpulence = upperCaseTitle === 'OPULENCE';
  const isAlinate = upperCaseTitle === 'ALINATE';

  // Compute conditional classes
  const contentContainerClasses = [
    'flex w-full flex-col items-center md:w-[50%]',
    isAlinate && 'mt-20',
    isOpulence && 'mt-[-80px]',
    index % 2 !== 0 && 'order-none md:order-[-1]',
  ]
    .filter(Boolean)
    .join(' ');

  const textContainerClasses = [
    'flex flex-col items-center justify-center gap-5 px-2 md:px-0',
    hasNegativeMargin && 'mt-[-140px]',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex w-full flex-col gap-10 md:gap-20">
      <div id="arc" className="container flex flex-wrap justify-center gap-7">
        <div>
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
        </div>
        <div className={contentContainerClasses}>
          <Image
            src={secondImage}
            alt={`Mondial ${title}`}
            className="pb-10 md:hidden"
            width={352}
            height={215}
          />
          <Image
            src={secondImage}
            alt={`Mondial ${title}`}
            className="hidden pb-10 md:block"
            width={540}
            height={330}
          />
          <div className={textContainerClasses}>
            <h2 className="text-center font-trajan-bold text-4xl md:text-[40px]">
              {title}
            </h2>

            {descriptionKeys.map((descKey, idx) => (
              <p
                key={idx}
                className="px-2 text-center font-montserrat text-sm font-light md:px-0 md:text-xl"
              >
                {t(descKey)}
              </p>
            ))}
            <Link
              href="/products/mondial-precious"
              className="mt-5 bg-primary px-[60px] py-1 font-montserrat text-base font-light italic text-black md:text-2xl"
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
        {items.map((subItem, subIndex) => {
          const maxWidthPercentage = 90 / items.length;
          return (
            <div
              className="flex w-full flex-col items-center justify-center"
              style={{ maxWidth: `${maxWidthPercentage}%` }}
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
          );
        })}
      </div>
    </div>
  );
};

export default VariantSection;
