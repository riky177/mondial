'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';
import { IoPersonOutline } from 'react-icons/io5';
import { RiMedalFill } from 'react-icons/ri';

const Profile = () => {
  const session = useSession();

  const user = session.data?.user;

  return (
    <div className="w-full px-4 py-6">
      <h2 className="mb-1.5 border-b-[1px] border-solid border-black pb-3.5 text-2xl font-bold">
        ACCOUNT
      </h2>
      <div className="py-5">
        <span className="font-red-hat text-xl font-bold">{`HI, ${user?.name?.toLocaleUpperCase()}!`}</span>
        <div className="flex items-center space-x-1 pt-3.5 font-red-hat">
          <RiMedalFill size={24} />
          <span className="text-xl">Member</span>
          <GoDotFill color="var(--color-secondary)" size={9} />
          <span className="text-tertiary text-xl">{`${user?.point ?? 0} Pts`}</span>
        </div>
      </div>
      <div className="space-y-5 border-y-[1px] border-solid border-gray-300 py-5">
        <Link
          href="/accounts/personal-information"
          className="text-tertiary flex items-center space-x-3.5"
        >
          <IoPersonOutline color="var(--color-tertiary)" size={16} />
          <span className="font-red-hat text-[14px]">PERSONAL INFORMATION</span>
        </Link>
        <Link
          href="/wishlist"
          className="text-tertiary flex items-center space-x-3.5"
        >
          <CiHeart color="var(--color-tertiary)" size={16} />
          <span className="font-red-hat text-[14px]">MY WISHLIST</span>
        </Link>
      </div>
      <div
        className="text-tertiary cursor-pointer py-5 font-red-hat text-[14px]"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        SIGN OUT
      </div>
    </div>
  );
};

export default Profile;
