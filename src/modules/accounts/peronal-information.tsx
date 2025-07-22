'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

import Input from '@/components/field/input';
import InputDate from '@/components/field/input-date';
import InputRadio from '@/components/field/input-radio';
import TextArea from '@/components/field/text-area';
import SideProfile from '@/components/side-profile';

const PersonalInformation = () => {
  const session = useSession();
  const user = session.data?.user;
  return (
    <div className="container flex gap-x-8 px-4 py-4 md:py-12">
      <SideProfile />
      <div className="w-full">
        <h2 className="font-trajan-bold mb-7 w-full border-b-[1px] border-solid border-black pb-2.5 text-lg font-bold md:text-2xl">
          Personal Information
        </h2>
        <form className="flex flex-col gap-y-4">
          <Input label="Name" value={user?.name || ''} onChange={(e) => {}} />
          <Input
            label="Email Address"
            value={user?.email || ''}
            onChange={(e) => {}}
          />
          <Input label="Mobile Number" value={user?.phone || ''} disabled />
          <InputDate
            label="Birthday"
            selected={user?.birthdate ? new Date(user.birthdate) : null}
          />
          <TextArea
            label="Address"
            value={user?.address || ''}
            onChange={(e) => {}}
          />
          <Input
            label="District"
            value={user?.district || ''}
            disabled
            className="w-fit"
          />
          <InputRadio
            name="gender"
            label="Gender"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
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
