'use client';

import React, { useState } from 'react';

import { MENU } from './constant';

const Menu = () => {
  const [activeMenuTitle, setActiveMenuTitle] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="relative mt-8 w-full" onMouseLeave={handleMouseLeave}>
      <div className="flex w-full items-center justify-center border-b-1 border-solid border-b-gray-200 pb-2.5">
        {MENU.map((menu) => (
          <div
            key={menu.title}
            className="underline-hover mx-9 cursor-pointer font-semibold"
            onMouseEnter={() => handleMouseEnter(menu.title)}
          >
            {menu.title}
          </div>
        ))}
      </div>
      <div
        className={`absolute top-8 left-0 z-10 flex w-full bg-white px-[60px] pt-4 transition-opacity duration-300 ${
          activeMenuTitle && isVisible
            ? 'opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {activeMenuTitle &&
          MENU.find((menu) => menu.title === activeMenuTitle)?.sub_menu.map(
            (sub) => (
              <div key={sub.title} className="max-w-[265px] px-2 py-2">
                <div className="mb-4 text-xl font-bold text-black">
                  {sub.title}
                </div>
                {sub.detail_menu.map((detail) => (
                  <a
                    key={detail.title}
                    href={detail.href}
                    className="underline-hover fitc text-secondary block w-fit px-2 py-2 text-xs"
                  >
                    {detail.title}
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
