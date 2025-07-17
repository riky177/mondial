import React from 'react';

import Footer from './footer';
import Navbar from './navbar';
import SectionWhy from './section-why';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <SectionWhy />
      <Footer />
    </div>
  );
};

export default Container;
