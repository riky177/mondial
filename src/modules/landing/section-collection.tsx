'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Slider, { Settings } from 'react-slick';

const IMAGE = [
  {
    image:
      'https://production-mondial.stamps.id/media/thumb/slider-banner-image/2024/5/17/27ybhpkfyf9g8vuqrr9jga_size_320.png',
    link: 'https://www.instagram.com/p/C5aG29CLAT5/',
  },
  {
    image:
      'https://production-mondial.stamps.id/media/thumb/slider-banner-image/2024/5/17/fb2tpcqq9ng7otqpwiwjvr_size_320.png',
    link: 'https://www.instagram.com/p/C55er3au60c/',
  },
  {
    image:
      'https://production-mondial.stamps.id/media/thumb/slider-banner-image/2024/5/17/9vtmgdzasqxdu7tkxagkn4_size_320.png',
    link: 'https://www.instagram.com/p/C6LWkqtplUF/',
  },
  {
    image:
      'https://production-mondial.stamps.id/media/thumb/slider-banner-image/2024/5/17/jj3f6bjwtnlkduchrv3itp_size_320.png',
    link: 'https://www.instagram.com/p/C6GNjB0tvXE/',
  },
  {
    image:
      'https://production-mondial.stamps.id/media/thumb/slider-banner-image/2024/5/17/jfq6nancg5dsvby6qzntwg_size_320.png',
    link: 'https://www.instagram.com/p/C5sIbL4iFCS/',
  },
];

const SectionCollection = () => {
  const t = useTranslations('landing');
  const sliderRef = useRef<Slider>(null);

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-[-4px] top-1/2 z-20 hidden -translate-y-1/2 md:block"
        style={{ display: 'block' }}
      >
        <GoArrowLeft color="var(--color-primary)" size={32} />
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-[-4px] top-1/2 z-20 hidden -translate-y-1/2 md:block"
        style={{ display: 'block' }}
      >
        <GoArrowRight color="var(--color-primary)" size={32} />
      </button>
    );
  };

  const settings: Settings = {
    infinite: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    centerMode: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="relative flex w-full items-center justify-center pt-12">
      <div className="absolute z-10 hidden w-full max-w-[1300px] justify-between md:flex">
        <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
      <div className="container overflow-hidden">
        <h2 className="mb-5 text-center text-sm font-bold md:text-lg">
          {t('collectionTitle')}
        </h2>
        <Link
          href="https://www.instagram.com/mondial"
          className="block text-center font-red-hat text-xs text-gray-400 md:text-sm"
        >
          {t('collectionSubtitle')}
        </Link>
        <Slider
          {...settings}
          ref={sliderRef}
          className="relative mb-28 mt-4 md:mt-12 [&_.slick-list]:overflow-visible"
        >
          {IMAGE.map((image, index) => (
            <div className="px-4" key={index}>
              <Link
                href={image.link}
                className="flex flex-col items-center justify-center"
                target="_blank"
              >
                <div className="mx-auto h-[176px] w-[176px] md:h-[320px] md:w-[320px]">
                  <Image
                    src={image.image}
                    width={320}
                    height={320}
                    alt={`Collection ${index + 1}`}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionCollection;
