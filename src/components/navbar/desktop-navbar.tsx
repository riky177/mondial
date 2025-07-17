import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { CiHeart, CiLocationOn, CiSearch } from 'react-icons/ci';

import Menu from './desktop-menu';
import LanguageSwitcher from './language-switcher';

const DesktopNavbar = () => {
  const t = useTranslations('common');
  return (
    <div className="flex w-full flex-col items-center">
      <div className="text-secondary container w-full px-[15px] pt-1">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <CiLocationOn color="var(--color-primary)" size={16} />
            <div className="border-primary flex border-b-1 border-solid pt-3.5">
              <CiSearch color="var(--color-primary)" size={16} />
              <input
                className="text-secondary w-[125px] pr-5 pb-2 pl-3 focus:outline-none"
                placeholder={`${t('search')}...`}
              ></input>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              {t('signin')} / {t('signup')}
            </div>
            <CiHeart color="var(--color-primary)" size={16} />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center pt-3">
          <Link href="/">
            <Image
              src="/global/logo.png"
              width={272}
              height={60}
              alt="Logo Mondial"
            />
          </Link>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
