'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';

import LanguageSwitcher from './language-switcher';
import MobileMenu from './mobile-menu';

const MobileNavbar = () => {
  const session = useSession();
  const t = useTranslations('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-[1px] border-solid border-b-gray-200 text-secondary">
      <div className="flex w-full items-center justify-between p-4">
        <button
          onClick={toggleMenu}
          className="flex cursor-pointer items-center justify-center"
          aria-label="Toggle menu"
        >
          <HiOutlineMenu size={24} color="black" />
        </button>

        <div className="flex w-full flex-col items-center justify-center">
          <Link href="/">
            <Image
              src="/global/logo.png"
              width={127}
              height={30}
              alt="Logo Mondial"
            />
          </Link>
        </div>
        <CiSearch color="var(--color-primary)" size={20} />
      </div>
      <div>
        {isMenuOpen && (
          <div className="fixed inset-0 top-0 z-50 bg-white py-5">
            <div className="flex w-full flex-col px-5">
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="mb-4 cursor-pointer"
              >
                <HiOutlineX size={24} />
              </button>
              <div className="overflow-y-auto px-2">
                <MobileMenu onItemClick={() => setIsMenuOpen(false)} />
              </div>
            </div>
            <div className="flex items-center border-y-[1px] border-gray-200 px-8 py-5">
              <IoPersonOutline size={18} />
              <span className="ml-4" onClick={toggleMenu}>
                {session.status === 'authenticated' ? (
                  <Link href="/accounts/profile">
                    <span>MY ACCOUNT</span>
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    {t('signin')} / {t('signup')}
                  </Link>
                )}
              </span>
            </div>
            <div className="px-8 py-8">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
