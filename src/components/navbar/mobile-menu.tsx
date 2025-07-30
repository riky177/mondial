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
  const [activeSubMenus, setActiveSubMenus] = useState<{
    [key: string]: number[];
  }>({});
  const t = useTranslations('common.menu');

  const toggleMenu = (menuTitle: string) => {
    const newActiveMenu = activeMenu === menuTitle ? null : menuTitle;
    setActiveMenu(newActiveMenu);

    if (newActiveMenu && !activeSubMenus[newActiveMenu]) {
      setActiveSubMenus((prev) => ({
        ...prev,
        [newActiveMenu]: [0],
      }));
    }
  };

  const toggleSubMenu = (menuTitle: string, subMenuIndex: number) => {
    setActiveSubMenus((prev) => {
      const currentActiveSubMenus = prev[menuTitle] || [];
      const isActive = currentActiveSubMenus.includes(subMenuIndex);

      if (isActive) {
        return {
          ...prev,
          [menuTitle]: currentActiveSubMenus.filter(
            (index) => index !== subMenuIndex,
          ),
        };
      } else {
        return {
          ...prev,
          [menuTitle]: [subMenuIndex],
        };
      }
    });
  };

  return (
    <div className="w-full">
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
            <div className="overflow-auto bg-gray-50 pb-2">
              {menu.sub_menu.map((sub, subIndex) => (
                <div key={subIndex} className="px-4 py-2">
                  {sub.title && (
                    <div
                      className="mb-2 flex cursor-pointer items-center justify-between text-sm font-bold text-gray-800"
                      onClick={() => toggleSubMenu(menu.title, subIndex)}
                    >
                      <span>{getTranslatedSubTitle(t, sub.title)}</span>
                      {(activeSubMenus[menu.title] || []).includes(subIndex) ? (
                        <HiOutlineChevronUp
                          color="var(--color-primary)"
                          size={16}
                        />
                      ) : (
                        <HiOutlineChevronDown
                          color="var(--color-primary)"
                          size={16}
                        />
                      )}
                    </div>
                  )}
                  {((activeSubMenus[menu.title] || []).includes(subIndex) ||
                    !sub.title) && (
                    <div className={sub.title ? 'pl-4' : ''}>
                      {sub.detail_menu.map((detail) => (
                        <Link
                          key={detail.title}
                          href={detail.href}
                          className="block py-2 text-sm text-secondary hover:text-primary"
                          onClick={onItemClick}
                        >
                          {getTranslatedDetailTitle(t, detail.title)}
                        </Link>
                      ))}
                    </div>
                  )}
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
