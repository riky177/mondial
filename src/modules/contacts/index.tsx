'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { LuMailOpen } from 'react-icons/lu';
import { TbMessages } from 'react-icons/tb';

import { STORE_LOCATIONS } from './constant';
import QuestionForm from './quetion-form';

const Contacts = () => {
  const [activeCity, setActiveCity] = useState(STORE_LOCATIONS[0].city);
  const [activeStore, setActiveStore] = useState('');
  const t = useTranslations('contacts.contactInfo');

  useEffect(() => {
    setActiveStore(
      STORE_LOCATIONS.find((location) => location.city === activeCity)?.store[0]
        .name || '',
    );
  }, [activeCity]);

  return (
    <div className="container px-[14px] py-32 pt-4 md:px-0 md:pt-12">
      <div className="full flex space-x-5 md:space-x-7">
        <select
          className="w-full bg-[#f2f2f2] p-2.5 font-red-hat text-sm font-light md:p-[14px] md:text-base"
          onChange={(e) => setActiveCity(e.target.value)}
        >
          {STORE_LOCATIONS.map((location, index) => (
            <option key={index} value={location.city}>
              {location.city}
            </option>
          ))}
        </select>
        <select
          className="w-full bg-[#f2f2f2] p-2.5 font-red-hat text-sm font-light md:p-[14px] md:text-base"
          onChange={(e) => setActiveStore(e.target.value)}
        >
          {STORE_LOCATIONS.find(
            (location) => location.city === activeCity,
          )?.store.map((store, index) => (
            <option key={index} value={store.name}>
              {store.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-5 py-10 md:py-20">
        <Link
          href="https://wa.me/6281119901043"
          target="_blank"
          className="flex w-full flex-col items-center justify-center md:w-[30%]"
        >
          <TbMessages color="var(--color-primary)" size={98} className="mb-5" />
          <h6 className="mb-2.5 font-red-hat text-lg font-light text-primary">
            {t('talkWithUs')}
          </h6>
          <p className="text-center font-red-hat font-light">6281119901043</p>
        </Link>
        {STORE_LOCATIONS.find(
          (location) => location.city === activeCity,
        )?.store.find((store) => store.name === activeStore)?.email && (
          <Link
            href={`mailto:${
              STORE_LOCATIONS.find(
                (location) => location.city === activeCity,
              )?.store.find((store) => store.name === activeStore)?.email
            }`}
            target="_blank"
            className="flex w-full flex-col items-center justify-center border-t-[1px] border-gray-300 pt-5 md:w-[30%] md:border-none md:pt-0"
          >
            <LuMailOpen
              color="var(--color-primary)"
              size={98}
              className="mb-5"
            />
            <h6 className="mb-2.5 font-red-hat text-lg font-light text-primary">
              {t('sendEmailNow')}
            </h6>
            <p className="text-center font-red-hat font-light uppercase">
              {
                STORE_LOCATIONS.find(
                  (location) => location.city === activeCity,
                )?.store.find((store) => store.name === activeStore)?.email
              }
            </p>
          </Link>
        )}
      </div>
      <QuestionForm />
    </div>
  );
};

export default Contacts;
