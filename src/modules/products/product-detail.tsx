'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react';
import { CiHeart, CiZoomIn } from 'react-icons/ci';

import { formatRupiah } from '@/utils';

const DATA = {
  image: [
    {
      small:
        'https://media-order.cmkclub.com/thumb/product_photo/2025/2/4/ckvdbfpghhcxrckrk8qdok_size_240.webp',
      big: 'https://media-order.cmkclub.com/thumb/product_photo/2025/2/4/ckvdbfpghhcxrckrk8qdok_size_800.webp',
    },
    {
      small:
        'https://media-order.cmkclub.com/thumb/product_photo/2025/2/4/xdtxfkqk2fbmwrbzft4qqn_size_240.webp',
      big: 'https://media-order.cmkclub.com/thumb/product_photo/2025/2/4/xdtxfkqk2fbmwrbzft4qqn_size_800.webp',
    },
  ],
  title: 'Phoenix Trail Earrings',
  subtitle: '18k White Gold',
  description:
    'The Phoenix Trail Earrings bring the timeless story of the phoenix to life with a dynamic cascade of orange and yellow sapphires alongside diamonds. This spiculed design embodies the relentless passion and courage of rising anew from the ashes. A striking tribute to transformation, these earrings inspire confidence and celebrate the beauty of new beginnings.',
  detail: [
    'Single MEC Ultimate diamond',
    '39 round diamonds',
    '40 round orange sapphires',
    '45 round yellow sapphires',
    'Total weight 2.660 ct',
    'Total gold 9.681 gr',
  ],
  price: '133840000',

  information: {
    Carat: '2.66',
    Size: 'All Size',
    Clarity: 'VVS',
    Color: 'F',
  },
};
const ProductDetail = () => {
  const t = useTranslations('products');
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-5 px-4 py-20 pt-10 md:flex-row">
      <div
        className="flex w-full flex-1 justify-center gap-5"
        id="product-imagel"
      >
        <div className="hidden flex-col gap-2 md:flex">
          {DATA.image.map((item, index) => (
            <Image
              className={`cursor-pointer ${activeImage === index ? 'border-[1px] border-gray-200' : ''} hover:border-[1px] hover:border-gray-200`}
              src={item.small}
              width={75}
              height={75}
              alt="Product Image"
              key={index}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
        <div
          ref={imageRef}
          className="relative h-[200px] w-full max-w-[200px] cursor-zoom-in overflow-hidden md:h-96 md:max-w-[83%]"
          id="big-image"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={DATA.image[activeImage].big}
            fill
            alt="Product Big Image"
            className={`peer object-cover transition-transform duration-200 ease-out ${
              isHovered ? 'scale-[2.5]' : 'scale-100'
            }`}
            style={
              isHovered
                ? {
                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                  }
                : {}
            }
          />
          <CiZoomIn
            className="absolute bottom-[3%] right-[3%] hidden peer-hover:hidden md:block"
            size={28}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-4 w-full border-b-[1px] border-b-gray-200 md:mb-5">
          <h3 className="text-center font-trajan-bold text-xl uppercase md:text-left md:text-lg">
            {DATA.title}
          </h3>
          <p className="mb-4 text-center font-red-hat font-light text-primary md:mb-5 md:text-left">
            {DATA.subtitle}
          </p>
          <p className="mb-5 text-center font-red-hat font-light text-[#676767] md:max-w-[80%] md:text-left">
            {DATA.description}
          </p>
          <ul className="mb-4 md:max-w-[80%]">
            {DATA.detail.map((item, index) => (
              <li
                key={index}
                className="text-center font-red-hat font-light text-[#676767] md:text-left"
              >
                - {item}
              </li>
            ))}
          </ul>

          <p className="mb-4 text-center font-red-hat font-light md:mb-5 md:text-left md:text-lg">
            {`${t('startingFrom')} ${formatRupiah(Number(DATA.price))}*`}
          </p>
        </div>
        <p className="mb-5 text-center font-red-hat font-light text-primary md:text-left">
          {t('productInformation')}
        </p>
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-4 md:gap-y-2">
          {Object.entries(DATA.information).map(([key, value]) => (
            <div
              key={key}
              className="flex w-full overflow-hidden rounded-3xl border-[1px] border-gray-200 md:max-w-[47%]"
            >
              <div className="w-[30%] bg-[#F4F3F0] p-3 text-center font-red-hat text-sm font-light">
                {key}
              </div>
              <div className="w-[70%] p-3 text-center font-red-hat text-sm font-light">
                {value}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-x-4 gap-y-4 md:flex-row">
          <Link
            href="/stores"
            className="flex-1 rounded-3xl bg-black bg-opacity-75 px-5 py-3 text-center font-red-hat text-sm leading-6 text-white"
          >
            {t('inquiry')}
          </Link>
          <button className="flex flex-1 items-center justify-center px-5 py-3 font-red-hat">
            <CiHeart className="mr-2" size={25} />
            <span className="font-light">{t('addToWishlist')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
