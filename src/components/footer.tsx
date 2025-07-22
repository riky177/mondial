import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { PiTiktokLogo, PiYoutubeLogo } from 'react-icons/pi';

type FooterMenuItem = {
  title: string;
  href: string;
};

const Footer = () => {
  const t = useTranslations('common');

  const CSMENU: FooterMenuItem[] = [
    { title: t('footer.contactUs'), href: '/contacts' },
    { title: t('footer.faq'), href: '/faq' },
    { title: t('footer.termsConditions'), href: '/terms' },
  ];

  const INFOMENU: FooterMenuItem[] = [
    { title: t('footer.storeLocation'), href: '/stores' },
    { title: t('footer.stories'), href: '/stories/all' },
    {
      title: t('footer.shippingReturnPolicy'),
      href: 'https://www.linkedin.com/company/centralmegakencana/',
    },
  ];
  return (
    <footer className="flex w-full flex-col items-center md:pt-10">
      <div className="container flex flex-col justify-between p-7 md:flex-row md:px-12 md:pt-0">
        <div className="w-full md:max-w-[42%]">
          <h5 className="mb-3 text-[13px] font-bold md:mb-8 md:text-base">
            {t('footer.loyaltyProgram')}
          </h5>

          <Image
            src="/global/cmk-club-logo.png"
            width={210}
            height={41}
            alt="CMK Club Logo"
          />
          <div className="mt-5 flex space-x-7 md:hidden">
            <Image
              src="/global/playstore-logo.png"
              width={155}
              height={46}
              alt="Play Store Logo"
            />
            <Image
              src="/global/appstore-logo.png"
              width={155}
              height={46}
              alt="App Store Logo"
            />
          </div>
          <div className="mt-12 hidden space-x-7 md:flex">
            <Image
              src="/global/playstore-logo.png"
              width={100}
              height={30}
              alt="Play Store Logo"
            />
            <Image
              src="/global/appstore-logo.png"
              width={100}
              height={30}
              alt="App Store Logo"
            />
          </div>
        </div>
        <div className="mt-4 flex-1 md:mt-0">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="pb-3 text-left align-top text-[13px] font-bold md:pb-8 md:text-base">
                  {t('footer.customerService')}
                </th>
                <th className="pb-3 text-left align-top text-[13px] font-bold md:pb-8 md:text-base">
                  {t('footer.information')}
                </th>
                <th className="pb-3 text-left align-top text-[13px] font-bold md:pb-8 md:text-base">
                  {t('footer.followUs')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                <td className="pr-4 align-top">
                  {CSMENU.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block w-fit pb-5 font-red-hat text-xs text-gray-400 md:max-w-[210px] md:text-[13px]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </td>
                <td className="pr-4 align-top">
                  {INFOMENU.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block w-fit pb-5 font-red-hat text-xs text-gray-400 md:max-w-[210px] md:text-[13px]"
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                    >
                      {item.title}
                    </Link>
                  ))}
                </td>
                <td className="align-top">
                  <div className="flex gap-4 md:flex md:gap-0 md:space-x-4">
                    <Link
                      href="https://www.instagram.com/centralmegakencana/"
                      target="_blank"
                      className="flex justify-center md:justify-start"
                    >
                      <div className="md:hidden">
                        <FaInstagram color="var(--color-primary)" size={17} />
                      </div>
                      <div className="hidden md:block">
                        <FaInstagram color="var(--color-primary)" size={24} />
                      </div>
                    </Link>
                    <Link
                      href="https://www.facebook.com/Mondial"
                      target="_blank"
                      className="flex justify-center md:justify-start"
                    >
                      <div className="md:hidden">
                        <AiOutlineFacebook
                          color="var(--color-primary)"
                          size={17}
                        />
                      </div>
                      <div className="hidden md:block">
                        <AiOutlineFacebook
                          color="var(--color-primary)"
                          size={24}
                        />
                      </div>
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@mondialjeweler?_t=8mUrKzaspia&_r=1"
                      target="_blank"
                      className="flex justify-center md:justify-start"
                    >
                      <div className="md:hidden">
                        <PiTiktokLogo color="var(--color-primary)" size={17} />
                      </div>
                      <div className="hidden md:block">
                        <PiTiktokLogo color="var(--color-primary)" size={24} />
                      </div>
                    </Link>
                    <Link
                      href="https://youtube.com/@mondial_?si=0cnm50UZYwDTHjgQ"
                      target="_blank"
                      className="flex justify-center md:justify-start"
                    >
                      <div className="md:hidden">
                        <PiYoutubeLogo color="var(--color-primary)" size={17} />
                      </div>
                      <div className="hidden md:block">
                        <PiYoutubeLogo color="var(--color-primary)" size={24} />
                      </div>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-solid border-primary p-5 text-center md:px-12">
        <p className="text-primary">{`© ${new Date().getFullYear()} Mondial`}</p>
      </div>
    </footer>
  );
};

export default Footer;
