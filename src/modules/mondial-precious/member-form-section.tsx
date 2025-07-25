import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

const MemberFormSection = () => {
  const t = useTranslations('mondialPrecious');
  return (
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
  );
};

export default MemberFormSection;
