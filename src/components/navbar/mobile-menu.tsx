'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import { MENU } from './constant';

interface MobileMenuProps {
  onItemClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onItemClick }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const t = useTranslations('navbar.menu');

  const getTranslatedTitle = (title: string) => {
    switch (title) {
      case 'HIGH JEWELRY':
        return t('highJewelry');
      case 'JEWELRY':
        return t('jewelry');
      case 'STORIES':
        return t('stories');
      default:
        return title;
    }
  };

  const getTranslatedSubTitle = (title: string) => {
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

  const toggleMenu = (menuTitle: string) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  return (
    <div className="w-full pt-4">
      {MENU.map((menu) => (
        <div key={menu.title}>
          <div
            className="flex cursor-pointer items-center justify-between pb-5"
            onClick={() => toggleMenu(menu.title)}
          >
            <span>{getTranslatedTitle(menu.title)}</span>
            {activeMenu === menu.title ? (
              <HiOutlineChevronUp color="var(--color-primary)" size={20} />
            ) : (
              <HiOutlineChevronDown color="var(--color-primary)" size={20} />
            )}
          </div>

          {activeMenu === menu.title && (
            <div className="bg-gray-50 pb-2">
              {menu.sub_menu.map((sub) => (
                <div key={sub.title} className="px-4 py-2">
                  {sub.title && (
                    <div className="mb-2 text-sm font-bold text-gray-800">
                      {getTranslatedSubTitle(sub.title)}
                    </div>
                  )}
                  {sub.detail_menu.map((detail) => (
                    <a
                      key={detail.title}
                      href={detail.href}
                      className="block py-2 pl-4 text-sm text-secondary hover:text-primary"
                      onClick={onItemClick}
                    >
                      {getTranslatedDetailTitle(detail.title)}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
