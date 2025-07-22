'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';
import { IoPersonOutline } from 'react-icons/io5';
import { RiMedalFill } from 'react-icons/ri';

type SideProfileProps = {
  isMobile?: boolean;
};

const SideProfile = ({ isMobile }: SideProfileProps) => {
  const session = useSession();
  const t = useTranslations('accounts.sideProfile');

  const user = session.data?.user;

  return (
    <div
      className={`${isMobile ? 'block max-w-full' : 'hidden h-fit w-full max-w-[260px] bg-[#F4F3F0] px-5'} md:block`}
    >
      <div className="py-5">
        <span className="md:font-lg font-red-hat font-bold">{`${t('hi')}, ${user?.name?.toLocaleUpperCase()}!`}</span>
        <div className="flex items-center space-x-1 pt-3.5 font-red-hat">
          <RiMedalFill size={24} />
          <span className="md:text-lg">{t('member')}</span>
          <GoDotFill color="var(--color-secondary)" size={9} />
          <span className="text-tertiary md:text-lg">{`${user?.point ?? 0} ${t('pts')}`}</span>
        </div>
      </div>
      <div className="space-y-5 border-y-[1px] border-solid border-gray-300 py-5 md:space-y-4">
        <Link
          href="/accounts/personal-information"
          className="flex items-center space-x-3.5 text-tertiary"
        >
          <IoPersonOutline color="black" size={18} />
          <span className="font-red-hat text-[14px]">
            {t('personalInformation')}
          </span>
        </Link>
        <Link
          href="/wishlist"
          className="flex items-center space-x-3.5 text-tertiary"
        >
          <CiHeart color="black" size={18} />
          <span className="font-red-hat text-[14px]">{t('myWishlist')}</span>
        </Link>
      </div>
      <div
        className="cursor-pointer py-5 font-red-hat text-[14px] text-tertiary"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        {t('signOut')}
      </div>
    </div>
  );
};

export default SideProfile;
