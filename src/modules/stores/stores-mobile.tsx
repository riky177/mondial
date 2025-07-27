'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import { LuPhone } from 'react-icons/lu';
import { TbMail } from 'react-icons/tb';

import Modal from '@/components/modal';
import useModal from '@/hooks/useModal';

import {
  ALL_STORES_KEY,
  getStoresByCity,
  StoreItemType,
  STORES,
} from './constant';

// Store Item Component
const StoreItem = ({
  store,
  isExpanded,
  onToggle,
}: {
  store: StoreItemType;
  isExpanded: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b-[1px] border-gray-200 py-4">
    <div className="flex items-center justify-between" onClick={onToggle}>
      <span className="font-trajan-bold text-sm uppercase">{store.name}</span>
      {isExpanded ? (
        <GoChevronDown color="var(--color-primary)" size={12} />
      ) : (
        <GoChevronRight color="var(--color-primary)" size={24} />
      )}
    </div>
    {isExpanded && (
      <div className="mt-1">
        <p className="pb-[15px] font-red-hat text-xs font-light text-[#676767]">
          {store.address}
        </p>
        <div className="flex items-center gap-2 pb-1">
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
    )}
  </div>
);

// City Selection Modal Component
const CityModal = ({
  isOpen,
  onClose,
  activeCity,
  onCityChange,
  allStoresLabel,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeCity: string;
  onCityChange: (city: string) => void;
  allStoresLabel: string;
}) => (
  <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false}>
    <ul className="mt-2">
      <li
        className={`cursor-pointer p-4 font-red-hat uppercase ${
          activeCity === allStoresLabel.toLowerCase()
            ? 'font-medium text-primary'
            : 'font-light text-black'
        } border-b-[1px] border-gray-200`}
        onClick={() => onCityChange(allStoresLabel.toLowerCase())}
      >
        {allStoresLabel}
      </li>
      {STORES.map((store) => (
        <li
          key={store.city}
          className={`cursor-pointer p-4 font-red-hat uppercase ${
            store.city === activeCity
              ? 'font-medium text-primary'
              : 'font-light text-black'
          } border-b-[1px] border-gray-200`}
          onClick={() => onCityChange(store.city)}
        >
          {store.city}
        </li>
      ))}
    </ul>
  </Modal>
);

const StoresMobile = () => {
  const t = useTranslations('stores');
  const [activeCity, setActiveCity] = useState(t('allStores').toLowerCase());
  const [activeStore, setActiveStore] = useState<string[]>([]);

  const cityModal = useModal();

  const STORE_LIST = getStoresByCity(
    activeCity === t('allStores').toLowerCase() ? ALL_STORES_KEY : activeCity,
  );

  const toggleStore = (storeName: string) => {
    setActiveStore((prev) =>
      prev.includes(storeName)
        ? prev.filter((name) => name !== storeName)
        : [...prev, storeName],
    );
  };

  const handleCityChange = (newCity: string) => {
    setActiveCity(newCity);
    setActiveStore([]);
    cityModal.close();
  };

  return (
    <>
      <div className="px-4 font-red-hat md:hidden">
        <div
          className="flex items-center justify-between border-b-[1px] border-gray-200 pb-4 pt-2"
          onClick={cityModal.open}
        >
          <span className="uppercase text-primary">{activeCity}</span>
          <GoChevronDown color="var(--color-primary)" size={24} />
        </div>
        {STORE_LIST.map((store, index) => (
          <StoreItem
            key={index}
            store={store}
            isExpanded={activeStore.includes(store.name)}
            onToggle={() => toggleStore(store.name)}
          />
        ))}
      </div>
      <CityModal
        isOpen={cityModal.isOpen}
        onClose={cityModal.close}
        activeCity={activeCity}
        onCityChange={handleCityChange}
        allStoresLabel={t('allStores')}
      />
    </>
  );
};

export default StoresMobile;
