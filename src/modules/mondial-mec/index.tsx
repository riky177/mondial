import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import ProductGrid from './product-grid';

const MondialMec = () => {
  const t = useTranslations('mondialMec');
  return (
    <div>
      <div className="container-lg">
        <div className="overflow-hidden px-4 md:px-6">
          <div className="z-10 mx-auto max-w-[440px] px-4 py-16 md:px-0">
            <div className="mx-auto mb-8 text-center">
              <h1 className="mb-4 font-trajan-bold text-2xl text-[#001C7F] md:text-[48px]">
                {t('hero.title')}
              </h1>
              <p className="font-red-hat text-sm font-light md:text-base">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="mb-8 flex flex-col justify-center gap-2 sm:flex-row md:gap-6">
              <Link
                href="products/mec-ultimate"
                className="flex-1 bg-[#001C7F] px-6 py-3 text-center align-middle font-red-hat text-sm font-light text-white md:text-base"
              >
                {t('hero.seeOurCatalog')}
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=Zl19Ssm2smk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-[1px] border-[#001C7F] px-6 py-3 text-center align-middle font-red-hat text-sm font-light text-[#001C7F] md:text-base"
              >
                {t('hero.watchVideo')}
              </Link>
            </div>
          </div>

          {/* Desktop Video */}
          <video
            className="h-[560px] w-full object-cover md:h-full"
            preload="auto"
            autoPlay
            playsInline
            loop
            muted
          >
            <source
              src="https://mondialjeweler.com/static/website/img/mondial-mec.webm"
              type="video/webm"
            />
            <Image
              src="https://mondialjeweler.com/static/website/img/mec-hero.webp"
              className="h-full w-full object-cover"
              alt="MEC Hero"
              fill
              priority
            />
          </video>
        </div>
        {/* Feature Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            {/* First Feature */}
            <div className="mb-24 flex flex-col items-center md:flex-row">
              <div className="mb-8 md:mb-0 md:w-1/2 md:pr-12">
                <div className="mb-4">
                  <p className="w-full text-center font-trajan-bold text-sm uppercase tracking-wide text-gray-500 md:text-base">
                    {t('features.first.badge')}
                  </p>
                  <h2 className="mt-2 text-center text-2xl font-bold text-[#001C7F] md:text-4xl">
                    {t('features.first.title')}
                  </h2>
                </div>
                <div className="mx-auto max-w-[400px] space-y-4 text-center font-red-hat text-sm font-light text-gray-800 md:text-base">
                  <p>{t('features.first.description1')}</p>
                  <p>{t('features.first.description2')}</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://mondialjeweler.com/static/website/img/mec-feature.webp"
                  alt="MEC Feature"
                  className="h-auto w-full rounded-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            {/* Second Feature */}
            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="mb-8 md:mb-0 md:w-1/2 md:pl-12">
                <div className="mb-4">
                  <p className="w-full text-center font-trajan-bold text-sm uppercase tracking-wide text-gray-500 md:text-base">
                    {t('features.second.badge')}
                  </p>
                  <h2 className="mt-2 text-center text-2xl font-bold text-[#001C7F] md:text-4xl">
                    {t('features.second.title')}
                  </h2>
                </div>
                <div className="mx-auto max-w-[400px] space-y-4 text-center font-red-hat text-sm font-light text-gray-800 md:text-base">
                  <p>{t('features.second.description1')}</p>
                  <p>{t('features.second.description2')}</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://mondialjeweler.com/static/website/img/mec-diamond-v2.webp"
                  alt="MEC Diamond"
                  className="h-auto w-full rounded-lg"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Product Section */}
        <div className="py-16">
          <div className="mx-auto mb-12 max-w-[990px] px-4 text-center">
            <h2 className="mb-10 font-trajan-bold text-2xl text-[#001C7F] md:text-4xl">
              {t('products.title')}
            </h2>
            <div className="bg-gray-50 pb-[200px] pt-10 md:pt-[60px]">
              <p className="mb-6 font-red-hat text-sm font-light text-[#001C7F] md:text-base">
                {t('products.subtitle')}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="products/mec-ultimate"
                  className="bg-[#001C7F] px-6 py-3 text-center align-middle font-red-hat text-sm font-light text-white md:text-base"
                >
                  {t('products.seeOurCatalog')}
                </Link>
                <Link
                  href="/contacts"
                  rel="noopener noreferrer"
                  className="border-[1px] border-[#001C7F] px-6 py-3 text-center align-middle font-red-hat text-sm font-light text-[#001C7F] md:text-base"
                >
                  {t('products.bookSchedule')}
                </Link>
              </div>
            </div>
          </div>

          <ProductGrid />
        </div>
        <div className="px-4">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <span className="font-trajan-bold text-sm uppercase tracking-wide text-gray-400 md:text-base">
              {t('certification.badge')}
            </span>
            <h2 className="mb-4 mt-2 font-trajan-bold text-2xl text-[#001C7F] md:text-4xl">
              {t('certification.title')}
            </h2>
            <p className="max-w-3xl font-red-hat font-light">
              {t('certification.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 pb-14 md:grid-cols-3">
            <div className="md:max-w-[336px]">
              <Image
                src="https://mondialjeweler.com/static/website/img/arine-logo.webp"
                alt="Sarine Logo"
                className="mx-auto mb-5"
                width={109}
                height={48}
              />
              <p className="text-center font-red-hat font-light">
                {t('certification.sarine')}
              </p>
            </div>

            <div className="text-center md:max-w-[336px]">
              <Image
                src="https://mondialjeweler.com/static/website/img/gia-logo.webp"
                alt="GIA Logo"
                className="mx-auto mb-5"
                width={154}
                height={48}
              />
              <p className="text-center font-red-hat font-light">
                {t('certification.gia')}
              </p>
            </div>

            <div className="text-center md:max-w-[336px]">
              <Image
                src="https://mondialjeweler.com/static/website/img/verification-report.webp"
                alt="Verification Report"
                className="mx-auto mb-5"
                width={55}
                height={48}
              />
              <p className="text-center font-red-hat font-light">
                {t('certification.verification')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Excellence Section */}
      <div className="bg-[#001C7F] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-trajan-bold text-2xl md:text-4xl">
              {t('excellence.title')}
            </h2>
            <p className="text-center font-red-hat font-light">
              {t('excellence.subtitle')}
            </p>
          </div>

          <div className="mb-12 flex flex-col gap-8 md:flex-row">
            <div className="flex flex-1 gap-5 md:flex-col md:text-center">
              <div>
                <Image
                  src="https://mondialjeweler.com/static/website/img/mec-diamond-outline.webp"
                  alt="Cut and Shape"
                  className="md:mx-auto"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <h3 className="font-red-hat text-sm font-bold">
                  {t('excellence.cutAndShape.title')}
                </h3>
                <div className="font-red-hat text-sm text-gray-300">
                  <div>{t('excellence.cutAndShape.excellentCut')}</div>
                  <div>{t('excellence.cutAndShape.excellentSymmetry')}</div>
                  <div>{t('excellence.cutAndShape.excellentPolish')}</div>
                </div>
                <div className="font-red-hat text-sm text-gray-300">
                  {t('excellence.cutAndShape.noCulet')}
                </div>
              </div>
            </div>

            <div className="flex flex-1 gap-5 md:flex-col md:text-center">
              <div>
                <Image
                  src="https://mondialjeweler.com/static/website/img/mec-inclusion.webp"
                  alt="Inclusion"
                  className="md:mx-auto"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <h3 className="font-red-hat text-sm font-bold">
                  {t('excellence.inclusion.title')}
                </h3>
                <div className="font-red-hat text-sm text-gray-300">
                  {t('excellence.inclusion.description')}
                </div>
              </div>
            </div>

            <div className="flex flex-1 gap-5 md:flex-col md:text-center">
              <div>
                <Image
                  src="https://mondialjeweler.com/static/website/img/mec-blemish.webp"
                  alt="Blemish"
                  className="md:mx-auto"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <h3 className="font-red-hat text-sm font-bold">
                  {t('excellence.blemish.title')}
                </h3>
                <div className="font-red-hat text-sm text-gray-300">
                  {t('excellence.blemish.description')}
                </div>
              </div>
            </div>

            <div className="flex flex-1 gap-5 md:flex-col md:text-center">
              <div>
                <Image
                  src="https://mondialjeweler.com/static/website/img/mec-certified.webp"
                  alt="Certificate Period"
                  className="md:mx-auto"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <h3 className="font-red-hat text-sm font-bold">
                  {t('excellence.certificate.title')}
                </h3>
                <div className="font-red-hat text-sm text-gray-300">
                  {t('excellence.certificate.description')}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/products/mec-ultimate"
              className="bg-white px-8 py-3 font-red-hat text-sm font-light text-black md:text-base"
            >
              {t('excellence.seeOurCatalog')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MondialMec;
