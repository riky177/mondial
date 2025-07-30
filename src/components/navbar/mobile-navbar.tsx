'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';

import LanguageSwitcher from './language-switcher';
import MobileMenu from './mobile-menu';

const MobileNavbar = () => {
  const session = useSession();
  const t = useTranslations('common');
  const { push } = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen && inputSearchRef.current?.value) {
      push(`/products/search?query=${inputSearchRef.current.value}`);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="border-b-[1px] border-solid border-b-gray-200 text-secondary">
      <div className="relative flex w-full items-center justify-between p-4">
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
        <CiSearch
          color="var(--color-primary)"
          className="cursor-pointer"
          size={20}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        {isSearchOpen && (
          <div
            className="absolute bottom-[-68px] left-0 z-10 flex w-full bg-white px-5 py-4"
            ref={searchRef}
          >
            <input
              className="mr-2 w-full rounded-md border-[1px] border-tertiary px-2.5 py-2 font-red-hat text-sm outline-none placeholder:font-red-hat placeholder:text-tertiary"
              placeholder="Search Products"
              ref={inputSearchRef}
            />
            <button
              className="rounded-3xl bg-[#3D3E40] px-7 py-2 font-red-hat text-white"
              onClick={handleSearchToggle}
            >
              Search
            </button>
          </div>
        )}
      </div>
      <div>
        {isMenuOpen && (
          <div className="fixed inset-0 top-0 z-50 flex flex-col bg-white">
            <div className="flex w-full shrink-0 flex-col px-5 py-5">
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="mb-4 cursor-pointer"
              >
                <HiOutlineX size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5">
              <MobileMenu onItemClick={() => setIsMenuOpen(false)} />
            </div>
            <div className="flex shrink-0 items-center border-y-[1px] border-gray-200 px-5 py-4">
              <IoPersonOutline size={18} />
              <span className="ml-4" onClick={toggleMenu}>
                {session.status === 'authenticated' ? (
                  <Link href="/accounts/profile">
                    <span className="text-sm">MY ACCOUNT</span>
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    {t('signin')} / {t('signup')}
                  </Link>
                )}
              </span>
            </div>
            <div className="shrink-0 p-5 pt-7">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
