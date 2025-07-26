'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

interface FaqSection {
  title: string;
  itemKey: string;
  dataLength: number;
}

const Faq = () => {
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const t = useTranslations('faq.sections');

  const faqData: FaqSection[] = [
    {
      title: t('product.title'),
      itemKey: 'product.items',
      dataLength: 5,
    },
    {
      title: t('packaging.title'),
      itemKey: 'packaging.items',
      dataLength: 2,
    },
    {
      title: t('guarantee.title'),
      itemKey: 'guarantee.items',
      dataLength: 3,
    },
    {
      title: t('returns.title'),
      itemKey: 'returns.items',
      dataLength: 1,
    },
    {
      title: t('covid.title'),
      itemKey: 'covid.items',
      dataLength: 1,
    },
  ];

  const toggleItem = (itemId: string) => {
    setActiveItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  const PlusIcon = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="plus"
    >
      <g clipPath="url(#clip0_771:5090)">
        <path
          d="M10.4231 18.75C8.10245 18.75 5.87685 17.8281 4.23591 16.1872C2.59497 14.5462 1.6731 12.3206 1.6731 10C1.6731 7.67936 2.59497 5.45376 4.23591 3.81282C5.87685 2.17187 8.10245 1.25 10.4231 1.25C12.7437 1.25 14.9693 2.17187 16.6103 3.81282C18.2512 5.45376 19.1731 7.67936 19.1731 10C19.1731 12.3206 18.2512 14.5462 16.6103 16.1872C14.9693 17.8281 12.7437 18.75 10.4231 18.75ZM10.4231 20C13.0753 20 15.6188 18.9464 17.4942 17.0711C19.3695 15.1957 20.4231 12.6522 20.4231 10C20.4231 7.34784 19.3695 4.8043 17.4942 2.92893C15.6188 1.05357 13.0753 0 10.4231 0C7.77093 0 5.22739 1.05357 3.35203 2.92893C1.47666 4.8043 0.423096 7.34784 0.423096 10C0.423096 12.6522 1.47666 15.1957 3.35203 17.0711C5.22739 18.9464 7.77093 20 10.4231 20Z"
          fill="#CBA64D"
        ></path>
        <path
          d="M10.4231 5C10.5889 5 10.7478 5.06585 10.865 5.18306C10.9822 5.30027 11.0481 5.45924 11.0481 5.625V9.375H14.7981C14.9639 9.375 15.1228 9.44085 15.24 9.55806C15.3572 9.67527 15.4231 9.83424 15.4231 10C15.4231 10.1658 15.3572 10.3247 15.24 10.4419C15.1228 10.5592 14.9639 10.625 14.7981 10.625H11.0481V14.375C11.0481 14.5408 10.9822 14.6997 10.865 14.8169C10.7478 14.9342 10.5889 15 10.4231 15C10.2573 15 10.0984 14.9342 9.98115 14.8169C9.86394 14.6997 9.7981 14.5408 9.7981 14.375V10.625H6.0481C5.88234 10.625 5.72336 10.5592 5.60615 10.4419C5.48894 10.3247 5.4231 10.1658 5.4231 10C5.4231 9.83424 5.48894 9.67527 5.60615 9.55806C5.72336 9.44085 5.88234 9.375 6.0481 9.375H9.7981V5.625C9.7981 5.45924 9.86394 5.30027 9.98115 5.18306C10.0984 5.06585 10.2573 5 10.4231 5Z"
          fill="#CBA64D"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_771:5090">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.423096)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );

  const MinusIcon = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="minus"
    >
      <g clipPath="url(#clip0_771:5080)">
        <path
          d="M10.4231 18.75C8.10245 18.75 5.87685 17.8281 4.23591 16.1872C2.59497 14.5462 1.6731 12.3206 1.6731 10C1.6731 7.67936 2.59497 5.45376 4.23591 3.81282C5.87685 2.17187 8.10245 1.25 10.4231 1.25C12.7437 1.25 14.9693 2.17187 16.6103 3.81282C18.2512 5.45376 19.1731 7.67936 19.1731 10C19.1731 12.3206 18.2512 14.5462 16.6103 16.1872C14.9693 17.8281 12.7437 18.75 10.4231 18.75ZM10.4231 20C13.0753 20 15.6188 18.9464 17.4942 17.0711C19.3695 15.1957 20.4231 12.6522 20.4231 10C20.4231 7.34784 19.3695 4.8043 17.4942 2.92893C15.6188 1.05357 13.0753 0 10.4231 0C7.77093 0 5.22739 1.05357 3.35203 2.92893C1.47666 4.8043 0.423096 7.34784 0.423096 10C0.423096 12.6522 1.47666 15.1957 3.35203 17.0711C5.22739 18.9464 7.77093 20 10.4231 20V20Z"
          fill="#CBA64D"
        ></path>
        <path
          d="M11.0481 9.375H14.7981C14.9639 9.375 15.1228 9.44085 15.24 9.55806C15.3572 9.67527 15.4231 9.83424 15.4231 10C15.4231 10.1658 15.3572 10.3247 15.24 10.4419C15.1228 10.5592 14.9639 10.625 14.7981 10.625H11.0481C11.0481 10.625 10.5889 10.625 10.4231 10.625H9.7981H6.0481C5.88234 10.625 5.72336 10.5592 5.60615 10.4419C5.48894 10.3247 5.4231 10.1658 5.4231 10C5.4231 9.83424 5.48894 9.67527 5.60615 9.55806C5.72336 9.44085 5.88234 9.375 6.0481 9.375H9.7981H11.0481Z"
          fill="#CBA64D"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_771:5080">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.423096)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div className="mx-auto max-w-[770px] px-5 pb-20 pt-5 md:px-0">
      <div className="faq">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="py-4">
            <div className="faq-section-title text-center text-xl font-bold">
              {section.title}
            </div>

            {Array.from({ length: section.dataLength }).map((_, itemIndex) => {
              const itemId = `${sectionIndex}-${itemIndex}`;
              const isActive = activeItems.includes(itemId);

              return (
                <div
                  key={itemIndex}
                  className={`list ${isActive ? 'active' : ''}`}
                >
                  <div
                    className="question flex cursor-pointer items-center justify-between py-3 font-red-hat transition-colors"
                    onClick={() => toggleItem(itemId)}
                  >
                    <span className="m pr-4 text-lg font-light text-black md:text-xl">
                      {t(`${section.itemKey}.${itemIndex}.question`)}
                    </span>
                    <div className="flex-shrink-0">
                      {isActive ? <MinusIcon /> : <PlusIcon />}
                    </div>
                  </div>

                  <div
                    className={`answer overflow-hidden font-red-hat transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'max-h-96 pb-4 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="text-sm font-light text-black md:text-base">
                      {t(`${section.itemKey}.${itemIndex}.answer`)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
