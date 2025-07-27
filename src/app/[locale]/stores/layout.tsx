import React from 'react';

import HeaderWithBreadcrumbs from '@/components/header-with-breadcrumbs';

type ContactsLayoutProps = {
  children: React.ReactNode;
};

const StoresLayout = ({ children }: ContactsLayoutProps) => {
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
