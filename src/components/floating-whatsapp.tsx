import Link from 'next/link';
import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

const FloatingWatsapp = () => {
  return (
    <Link
      href="https://wa.me/+6281119901133"
      target="_blank"
      className="fixed bottom-[5%] right-[5%] flex cursor-pointer items-center justify-center rounded-3xl bg-white px-6 py-3 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.4)] hover:underline"
    >
      <div className="md:hidden">
        <RiWhatsappFill color="green" size={24} />
      </div>
      <div className="hidden md:block">
        <RiWhatsappFill color="green" size={32} />
      </div>
      <span className="ml-2.5 font-red-hat font-light">TALK TO US!</span>
    </Link>
  );
};

export default FloatingWatsapp;
