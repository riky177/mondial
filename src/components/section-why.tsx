import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import { GiDiamondRing } from 'react-icons/gi';
import { IoDiamondOutline } from 'react-icons/io5';
import { LiaStoreAltSolid } from 'react-icons/lia';
import { TbBox } from 'react-icons/tb';

const WhySection = () => {
  const t = useTranslations('common');

  return (
    <div className="md:mt-22 flex w-full items-center justify-center bg-[#f4f3f0] px-4 py-10">
      <div className="container overflow-hidden">
        <h2 className="relative w-full text-center before:absolute before:left-[-50%] before:top-2.5 before:h-[1px] before:w-[200%] before:bg-[#dfe0d7] before:content-['']">
          <span className="relative bg-[#f4f3f0] px-2 text-2xl font-bold">
            {t('whySection.title')}
          </span>
        </h2>
        <div className="mt-10 flex flex-col items-center justify-between md:flex-row">
          <Link
            href="/contacts"
            className="flex w-fit flex-1 flex-col items-center justify-center space-y-4 p-3"
          >
            <LiaStoreAltSolid color="var(--color-primary)" size={44} />
            <span className="text-center text-xl text-secondary">
              {t('whySection.bookAppointment')}
            </span>
          </Link>
          <Link
            href="/contacts"
            className="flex w-fit flex-1 flex-col items-center justify-center space-y-4 p-3"
          >
            <IoDiamondOutline color="var(--color-primary)" size={44} />
            <span className="text-center text-xl text-secondary">
              {t('whySection.diamondConsultation')}
            </span>
          </Link>
          <Link
            href="/faq"
            className="flex w-fit flex-1 flex-col items-center justify-center space-y-4 p-3"
          >
            <TbBox color="var(--color-primary)" size={44} />
            <span className="text-center text-xl text-secondary">
              {t('whySection.shippingReturnPolicy')}
            </span>
          </Link>
          <Link
            href="/faq"
            className="flex w-fit flex-1 flex-col items-center justify-center space-y-4 p-3"
          >
            <GiDiamondRing color="var(--color-primary)" size={44} />
            <span className="text-center text-xl text-secondary">
              {t('whySection.faq')}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
