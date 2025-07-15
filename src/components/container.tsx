import React from 'react';

import Navbar from './navbar';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Container;
