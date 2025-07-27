import React from 'react';

import HeaderWithBreadcrumbs from '@/components/header-with-breadcrumbs';

type StoresLayoutProps = {
  children: React.ReactNode;
};

const StoresLayout = ({ children }: StoresLayoutProps) => {
  return (
    <div>
      <HeaderWithBreadcrumbs
        title="Store Locations"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Store Locations', href: '/stores', isActive: true },
        ]}
      />
      {children}
    </div>
  );
};

export default StoresLayout;
