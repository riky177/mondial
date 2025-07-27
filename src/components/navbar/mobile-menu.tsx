'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import {
  getTranslatedDetailTitle,
  getTranslatedSubTitle,
  getTranslatedTitle,
  MENU,
} from './constant';

interface MobileMenuProps {
  onItemClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onItemClick }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const t = useTranslations('common.menu');

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
            <span className="font-red-hat text-sm text-tertiary">
              {getTranslatedTitle(t, menu.title)}
            </span>
            {activeMenu === menu.title ? (
              <HiOutlineChevronUp color="var(--color-primary)" size={20} />
            ) : (
              <HiOutlineChevronDown color="var(--color-primary)" size={20} />
            )}
          </div>

          {activeMenu === menu.title && (
            <div className="bg-gray-50 pb-2">
              {menu.sub_menu.map((sub, key) => (
                <div key={key} className="px-4 py-2">
                  {sub.title && (
                    <div className="mb-2 text-sm font-bold text-gray-800">
                      {getTranslatedSubTitle(t, sub.title)}
                    </div>
                  )}
                  {sub.detail_menu.map((detail) => (
                    <Link
                      key={detail.title}
                      href={detail.href}
                      className="block py-2 pl-4 text-sm text-secondary hover:text-primary"
                      onClick={onItemClick}
                    >
                      {getTranslatedDetailTitle(t, detail.title)}
                    </Link>
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
