import Link from 'next/link';
import React from 'react';
import { GiDiamondRing } from 'react-icons/gi';
import { IoDiamondOutline } from 'react-icons/io5';
import { LiaStoreAltSolid } from 'react-icons/lia';
import { TbBox } from 'react-icons/tb';

const WhySection = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[#f4f3f0] px-4 py-10 md:mt-22">
      <div className="container w-full overflow-hidden">
        <h2 className="relative w-full text-center before:absolute before:top-2.5 before:left-[-50%] before:h-[1px] before:w-[200%] before:bg-[#dfe0d7] before:content-['']">
          <span className="relative bg-[#f4f3f0] px-2 text-2xl font-bold">
            BEYOND MONDIAL
          </span>
        </h2>
        <div className="mt-10 flex flex-col items-center justify-between md:flex-row">
          <Link
            href="/contacts"
            className="flex w-fit flex-col items-center justify-center space-y-4 p-3"
          >
            <LiaStoreAltSolid color="var(--color-primary)" size={44} />
            <span className="text-secondary text-center text-xl">
              BOOK APPOINTMENT
            </span>
          </Link>
          <Link
            href="/contacts"
            className="flex w-fit flex-col items-center justify-center space-y-4 p-3"
          >
            <IoDiamondOutline color="var(--color-primary)" size={44} />
            <span className="text-secondary text-center text-xl">
              DIAMOND CONSULTATION
            </span>
          </Link>
          <Link
            href="/faq"
            className="flex w-fit flex-col items-center justify-center space-y-4 p-3"
          >
            <TbBox color="var(--color-primary)" size={44} />
            <span className="text-secondary text-center text-xl">
              SHIPPING RETURN POLICY
            </span>
          </Link>
          <Link
            href="/faq"
            className="flex w-fit flex-col items-center justify-center space-y-4 p-3"
          >
            <GiDiamondRing color="var(--color-primary)" size={44} />
            <span className="text-secondary text-center text-xl">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
