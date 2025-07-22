import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

const SectionExplores = () => {
  const t = useTranslations('landing');
  return (
    <div className="flex w-full justify-center">
      <div className="container flex flex-wrap justify-center space-x-7 p-7">
        <Link href="/bridal-collection">
          <div className="md:hidden">
            <Image
              src="https://production-mondial.stamps.id/media/thumb/collection-banner-image/2023/3/9/uxmdnrxjynpzg7aclcuayt_size_440.png"
              width={280}
              height={280}
              alt="Bridal Collection"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="https://production-mondial.stamps.id/media/thumb/collection-banner-image/2023/3/9/uxmdnrxjynpzg7aclcuayt_size_440.png"
              width={480}
              height={480}
              alt="Bridal Collection"
            />
          </div>
          <div className="my-3.5 w-full text-center md:my-6">
            <h2 className="text-sm font-bold md:text-lg">
              {t('bridalCollection')}
            </h2>
            <h3 className="my-4 font-red-hat text-xs text-gray-400 md:my-5 md:text-sm">
              {t('bridalSubtitle')}
            </h3>
            <h4 className="my-4 font-red-hat text-xs text-secondary underline md:my-5 md:text-sm">
              {t('seeCollection')}
            </h4>
          </div>
        </Link>
        <Link href="/stores">
          <div className="md:hidden">
            <Image
              src="https://production-mondial.stamps.id/media/thumb/collection-banner-image/2023/3/9/fkdaqqybsxi2f9knnudwqn_size_440.png"
              width={280}
              height={280}
              alt="Book an appointment"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="https://production-mondial.stamps.id/media/thumb/collection-banner-image/2023/3/9/fkdaqqybsxi2f9knnudwqn_size_440.png"
              width={480}
              height={480}
              alt="Book an appointment"
            />
          </div>
          <div className="my-3.5 w-full text-center md:my-6">
            <h2 className="text-sm font-bold md:text-lg">
              {t('bookAppointment')}
            </h2>
            <h3 className="my-4 font-red-hat text-xs text-gray-400 md:my-5 md:text-sm">
              {t('bookAppointmentSubtitle')}
            </h3>
            <h4 className="my-4 font-red-hat text-xs text-secondary underline md:my-5 md:text-sm">
              {t('bookNow')}
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SectionExplores;
