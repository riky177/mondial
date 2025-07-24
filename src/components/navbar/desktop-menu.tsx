'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import {
  getTranslatedDetailTitle,
  getTranslatedSubTitle,
  getTranslatedTitle,
  MENU,
} from './constant';

const Menu = () => {
  const [activeMenuTitle, setActiveMenuTitle] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('navbar.menu');

  const handleMouseEnter = (title: string) => {
    setActiveMenuTitle(title);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveMenuTitle(null);
    }, 300);
  };
  return (
    <div className="relative mt-6 w-full" onMouseLeave={handleMouseLeave}>
      <div className="flex w-full items-center justify-center pb-2.5">
        {MENU.map((menu) => (
          <div
            key={menu.title}
            className="underline-hover mx-7 cursor-pointer text-center font-trajan-bold text-xs text-tertiary"
            onMouseEnter={() => handleMouseEnter(menu.title)}
          >
            {getTranslatedTitle(t, menu.title)}
          </div>
        ))}
      </div>
      <div
        className={`absolute left-0 top-6 z-10 flex w-full bg-white px-[78px] pt-4 transition-opacity duration-300 ${
          activeMenuTitle && isVisible
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {activeMenuTitle &&
          MENU.find((menu) => menu.title === activeMenuTitle)?.sub_menu.map(
            (sub, key) => (
              <div key={key} className="max-w-[25%] px-2 pb-6">
                <div className="mb-4 font-trajan-bold text-[13px] text-black">
                  {getTranslatedSubTitle(t, sub.title)}
                </div>
                {sub.detail_menu.map((detail) => (
                  <a
                    key={detail.title}
                    href={detail.href}
                    className="underline-hover block w-fit px-2 py-2 font-red-hat text-xxs text-tertiary"
                  >
                    {getTranslatedDetailTitle(t, detail.title)}
                  </a>
                ))}
              </div>
            ),
          )}
      </div>
    </div>
  );
};

export default Menu;
