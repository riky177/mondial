'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider, { Settings } from 'react-slick';

import { PREVIEW_PRODUCT } from './constant';

const settings: Settings = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
};

const ProductGrid = () => {
  return (
    <div className="mt-[-150px]">
      <div className="hidden grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid md:grid-cols-4">
        {PREVIEW_PRODUCT.map((product) => (
          <Link
            href={product.href}
            key={product.name}
            className="group overflow-hidden border-[1px] border-gray-300 bg-white"
          >
            <div className="p-5">
              <Image
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={256}
              />
            </div>
            <div className="p-4">
              <h3 className="mb-4 text-center font-trajan-bold text-sm text-gray-900">
                {product.name}
              </h3>
              <p className="text-center font-red-hat font-light text-primary">
                {product.type}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="block px-4 md:hidden">
        <Slider
          {...settings}
          className="relative mt-4 overflow-hidden md:mt-12 [&_.slick-list]:overflow-visible"
        >
          {PREVIEW_PRODUCT.map((product) => (
            <div key={product.name} className="h-fit px-2">
              <div className="min-h-[320px] w-full border-[1px] border-gray-300 bg-white">
                <Link href={product.href} className="group w-full bg-white">
                  <div className="py-5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-4 text-center font-trajan-bold text-xs text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-center font-red-hat text-sm font-light text-primary">
                      {product.type}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductGrid;
