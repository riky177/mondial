import React from 'react';

import Footer from './footer';
import Navbar from './navbar';
import WhySection from './why-section';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <WhySection />
      <Footer />
    </div>
  );
};

export default Container;
