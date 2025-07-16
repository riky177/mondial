'use client';

import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import { MENU } from './constant';

interface MobileMenuProps {
  onItemClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onItemClick }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

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
            <span>{menu.title}</span>
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
                      {sub.title}
                    </div>
                  )}
                  {sub.detail_menu.map((detail) => (
                    <a
                      key={detail.title}
                      href={detail.href}
                      className="hover:text-primary block py-2 pl-4 text-sm text-gray-600"
                      onClick={onItemClick}
                    >
                      {detail.title}
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
