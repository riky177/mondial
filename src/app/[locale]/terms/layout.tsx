import React from 'react';

import HeaderWithBreadcrumbs from '@/components/header-with-breadcrumbs';

type ContactsLayoutProps = {
  children: React.ReactNode;
};

const ContactsLayout = ({ children }: ContactsLayoutProps) => {
  return (
    <div>
      <HeaderWithBreadcrumbs
        title="Terms and Conditions
"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms and Conditions', href: '/terms', isActive: true },
        ]}
      />
      {children}
    </div>
  );
};

export default ContactsLayout;
