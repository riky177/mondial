'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
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
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="flex w-full items-center justify-center overflow-hidden pt-20">
      <div className="container overflow-hidden">
        <h2 className="mb-5 text-center text-2xl font-bold">
          Step into the world of MONDIAL
        </h2>
        <Link
          href="https://www.instagram.com/mondial"
          className="block text-center font-red-hat text-[14px] text-gray-400"
        >
          Follow @mondial for the latest updates
        </Link>
        <Slider
          {...settings}
          className="relative my-28 [&_.slick-list]:overflow-visible"
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
