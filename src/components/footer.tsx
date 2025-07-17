import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import { PiTiktokLogo, PiYoutubeLogoLight } from 'react-icons/pi';

type FooterMenuItem = {
  title: string;
  href: string;
};

const CSMENU: FooterMenuItem[] = [
  { title: 'CONTACT US', href: '/contacts' },
  { title: 'FREQUENTLY ASKED', href: '/faq' },
  { title: 'TERMS AND CONDITIONS', href: '/terms' },
];

const INFOMENU: FooterMenuItem[] = [
  { title: 'STORE LOCATION', href: '/stores' },
  { title: 'STORIES', href: '/stories/all' },
  {
    title: 'SHIPPING RETURN POLICY',
    href: 'https://www.linkedin.com/company/centralmegakencana/',
  },
];

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center md:pt-10">
      <div className="container flex flex-col justify-between space-y-10 space-x-4 p-7 md:flex-row md:px-12">
        <div className="w-full md:max-w-[42%]">
          <h5 className="mb-3 text-xl font-bold md:mb-8">
            JOIN OUR LUXURY LOYALTY PROGRAM
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
        <div className="flex flex-1 justify-between space-x-4">
          <div>
            <h5 className="mb-3 text-xl font-bold md:mb-8">CUSTOMER SERVICE</h5>
            {CSMENU.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-secondary text-md block w-fit py-3 md:text-[13px]"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <h5 className="mb-3 text-xl font-bold md:mb-8">INFORMATION</h5>
            {INFOMENU.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="fitc text-secondary text-md block w-fit py-3 md:text-[13px]"
                target={item.href.startsWith('http') ? '_blank' : undefined}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <h5 className="mb-3 text-xl font-bold md:mb-8">FOLLOW US</h5>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/centralmegakencana/"
                target="_blank"
              >
                <div className="md:hidden">
                  <FaInstagram color="var(--color-primary)" size={17} />
                </div>
                <div className="hidden md:block">
                  <FaInstagram color="var(--color-primary)" size={24} />
                </div>
              </Link>
              <Link href="https://www.facebook.com/Mondial" target="_blank">
                <div className="md:hidden">
                  <AiOutlineFacebook color="var(--color-primary)" size={17} />
                </div>
                <div className="hidden md:block">
                  <AiOutlineFacebook color="var(--color-primary)" size={24} />
                </div>
              </Link>
              <Link
                href="https://www.tiktok.com/@mondialjeweler?_t=8mUrKzaspia&_r=1"
                target="_blank"
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
              >
                <div className="md:hidden">
                  <PiYoutubeLogoLight color="var(--color-primary)" size={17} />
                </div>
                <div className="hidden md:block">
                  <PiTiktokLogo color="var(--color-primary)" size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-primary w-full border-t-1 border-solid p-7 text-center md:px-12">
        <p className="text-primary text-xl">
          © {new Date().getFullYear()} Mondial
        </p>
      </div>
    </footer>
  );
};

export default Footer;
