'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import Footer from './footer';
import Navbar from './navbar';
import SectionWhy from './section-why';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const pathname = usePathname();
  const isMondialPreciousPage = pathname.includes('/mondial-precious');

  return (
    <div>
      <Navbar />
      {children}
      {!isMondialPreciousPage && <SectionWhy />}
      {!isMondialPreciousPage && <Footer />}
    </div>
  );
};

export default Container;
