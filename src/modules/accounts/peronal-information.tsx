'use client';

import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import React from 'react';

import Input from '@/components/field/input';
import InputDate from '@/components/field/input-date';
import InputRadio from '@/components/field/input-radio';
import TextArea from '@/components/field/text-area';
import SideProfile from '@/components/side-profile';

const PersonalInformation = () => {
  const session = useSession();
  const user = session.data?.user;
  const t = useTranslations('accounts.personalInformation');
  return (
    <div className="container flex gap-x-8 px-4 py-4 md:py-12">
      <SideProfile />
      <div className="w-full">
        <h2 className="mb-7 w-full border-b-[1px] border-solid border-black pb-2.5 font-trajan-bold text-lg font-bold md:text-2xl">
          {t('title')}
        </h2>
        <form className="flex flex-col gap-y-4">
          <Input
            label={t('name')}
            value={user?.name || ''}
            onChange={() => {}}
          />
          <Input
            label={t('emailAddress')}
            value={user?.email || ''}
            onChange={() => {}}
          />
          <Input label={t('mobileNumber')} value={user?.phone || ''} disabled />
          <InputDate
            label={t('birthday')}
            selected={user?.birthdate ? new Date(user.birthdate) : null}
          />
          <TextArea
            label={t('address')}
            value={user?.address || ''}
            onChange={() => {}}
          />
          <Input
            label={t('district')}
            value={user?.district || ''}
            disabled
            className="w-fit"
          />
          <InputRadio
            name="gender"
            label={t('gender')}
            options={[
              { value: 'male', label: t('genderOptions.male') },
              { value: 'female', label: t('genderOptions.female') },
            ]}
            orientation="horizontal"
            value={user?.gender || ''}
          />
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
