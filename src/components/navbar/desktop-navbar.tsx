'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { CiHeart, CiLocationOn, CiSearch } from 'react-icons/ci';

import Menu from './desktop-menu';
import LanguageSwitcher from './language-switcher';

const DesktopNavbar = () => {
  const t = useTranslations('common');
  const session = useSession();
  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="container border-b-[1px] border-solid border-b-gray-200 px-4 pt-1 text-secondary">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <CiLocationOn color="var(--color-primary)" size={15} />
          <div className="flex border-b-[1px] border-solid border-primary pt-2">
            <CiSearch color="var(--color-primary)" size={15} />
            <input
              className="w-[125px] pb-1 pl-3 pr-5 font-red-hat text-xs text-secondary placeholder:font-red-hat placeholder:text-xs focus:outline-none"
              placeholder={`${t('search')}...`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchValue.trim()) {
                  push(`/products/search?query=${searchValue}`);
                }
              }}
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {session.status === 'authenticated' ? (
            <Link
              href="/accounts/personal-information"
              className="text-xs text-secondary"
            >
              {session.data.user.name}
            </Link>
          ) : (
            <Link href="/auth/login" className="text-xs text-secondary">
              {t('signin')} / {t('signup')}
            </Link>
          )}
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
  );
};

export default DesktopNavbar;
