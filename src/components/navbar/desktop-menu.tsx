'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { MENU } from './constant';

const Menu = () => {
  const [activeMenuTitle, setActiveMenuTitle] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('navbar.menu');

  const getTranslatedTitle = (title: string) => {
    switch (title) {
      case 'HIGH JEWELRY':
        return t('highJewelry');
      case 'JEWELRY':
        return t('jewelry');
      case 'ENGAGEMENT & BRIDAL':
        return t('engagementBridal');
      case 'GIFT IDEAS':
        return t('giftIdeas');
      case 'All About Diamonds':
        return t('allAboutDiamonds');
      case 'STORIES':
        return t('stories');

      default:
        return title;
    }
  };

  const getTranslatedSubTitle = (title: string | undefined) => {
    if (!title) return '';
    switch (title) {
      case 'Precious Stone & Fancy Diamond':
        return t('subMenu.preciousStone');
      case 'Branded Diamond & Pearl':
        return t('subMenu.brandedDiamond');
      case 'Branded Diamond & Pearldf':
        return t('subMenu.brandedDiamond');
      default:
        return title;
    }
  };

  const getTranslatedDetailTitle = (title: string) => {
    switch (title) {
      case 'PRECIOUS STONE':
        return t('subMenu.preciousStoneMenu');
      case 'FANCY DESIGN':
        return t('subMenu.fancyDesign');
      case 'FANCY SHAPE DIAMOND':
        return t('subMenu.fancyShapeDiamond');
      case 'FANCY COLOR DIAMOND':
        return t('subMenu.fancyColorDiamond');
      case 'MAC ULTIMATE':
        return t('subMenu.macUltimate');
      case 'BERLIANT ROSE':
        return t('subMenu.berliantRose');
      case 'FIREMARK':
        return t('subMenu.firemark');
      default:
        return title;
    }
  };

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
      <div className="flex w-full items-center justify-center border-b-[1px] border-solid border-b-gray-200 pb-2.5">
        {MENU.map((menu) => (
          <div
            key={menu.title}
            className="underline-hover font-trajan-bold mx-7 cursor-pointer text-xs text-tertiary"
            onMouseEnter={() => handleMouseEnter(menu.title)}
          >
            {getTranslatedTitle(menu.title)}
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
            (sub) => (
              <div key={sub.title} className="max-w-[25%] px-2 pb-6">
                <div className="font-trajan-bold mb-4 text-[13px] text-black">
                  {getTranslatedSubTitle(sub.title)}
                </div>
                {sub.detail_menu.map((detail) => (
                  <a
                    key={detail.title}
                    href={detail.href}
                    className="underline-hover text-xxs block w-fit px-2 py-2 font-red-hat text-tertiary"
                  >
                    {getTranslatedDetailTitle(detail.title)}
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
