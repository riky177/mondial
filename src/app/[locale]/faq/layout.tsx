import React from 'react';

import HeaderWithBreadcrumbs from '@/components/header-with-breadcrumbs';

type ContactsLayoutProps = {
  children: React.ReactNode;
};

const ContactsLayout = ({ children }: ContactsLayoutProps) => {
  return (
    <div>
      <HeaderWithBreadcrumbs
        title="Question & Answer"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq', isActive: true },
        ]}
      />
      {children}
    </div>
  );
};

export default ContactsLayout;
