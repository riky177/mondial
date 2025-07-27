import React from 'react';

import HeaderWithBreadcrumbs from '@/components/header-with-breadcrumbs';

type ContactsLayoutProps = {
  children: React.ReactNode;
};

const ContactsLayout = ({ children }: ContactsLayoutProps) => {
  return (
    <div>
      <HeaderWithBreadcrumbs
        title="CONTACT US"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contacts', isActive: true },
        ]}
      />
      {children}
    </div>
  );
};

export default ContactsLayout;
