'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { LuPhone } from 'react-icons/lu';
import { TbMail } from 'react-icons/tb';

import {
  ALL_STORES_KEY,
  getStoresByCity,
  StoreItemType,
  STORES,
} from './constant';

// Store Card Component
const StoreCard = ({ store }: { store: StoreItemType }) => (
  <div className="w-full max-w-[27%]">
    <p className="mb-[14px] font-trajan-bold">{store.name}</p>
    <p className="border-b-[1px] border-gray-200 pb-[15px] font-red-hat text-xs font-light text-[#676767]">
      {store.address}
    </p>
    <div className="flex items-center gap-2 pb-1 pt-4">
      <LuPhone size={14} color="var(--color-primary)" />
      <Link
        href={`https://wa.me/${store.phone}`}
        target="_blank"
        className="font-red-hat text-xs font-light hover:text-primary"
      >
        {store.phone}
      </Link>
    </div>
    <div className="flex items-center gap-2 pb-1">
      <TbMail size={14} color="var(--color-primary)" />
      <Link
        href={`mailto:${store.email}`}
        target="_blank"
        className="font-red-hat text-xs font-light hover:text-primary"
      >
        {store.email}
      </Link>
    </div>
  </div>
);

// City Filter Component
const CityFilter = ({
  activeCity,
  onCityChange,
  allStoresLabel,
}: {
  activeCity: string;
  onCityChange: (city: string) => void;
  allStoresLabel: string;
}) => (
  <div className="w-full max-w-[17%] font-light">
    <div
      className={`uppercase ${
        activeCity === ALL_STORES_KEY
          ? 'font-medium text-primary'
          : 'text-black'
      } mb-[15px] cursor-pointer border-b-[1px] border-b-gray-100 pb-[15px]`}
      onClick={() => onCityChange(ALL_STORES_KEY)}
    >
      {allStoresLabel}
    </div>
    {STORES.map((store) => (
      <div
        key={store.city}
        className={`uppercase ${
          activeCity === store.city ? 'font-medium text-primary' : 'text-black'
        } mb-[15px] cursor-pointer border-b-[1px] border-b-gray-100 pb-[15px]`}
        onClick={() => onCityChange(store.city)}
      >
        {store.city}
      </div>
    ))}
  </div>
);

const StoresDesktop = () => {
  const t = useTranslations('stores');
  const [activeCity, setActiveCity] = useState(ALL_STORES_KEY);

  const ACTIVE_STORE = getStoresByCity(activeCity);

  return (
    <div className="container hidden space-x-7 pb-40 pt-[50px] font-red-hat md:flex">
      <CityFilter
        activeCity={activeCity}
        onCityChange={setActiveCity}
        allStoresLabel={t('allStores')}
      />
      <div className="flex flex-1 flex-wrap gap-9">
        {ACTIVE_STORE.map((store, key) => (
          <StoreCard key={key} store={store} />
        ))}
      </div>
    </div>
  );
};

export default StoresDesktop;
