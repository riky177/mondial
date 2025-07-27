import React from 'react';

import HeaderWithBreadcrumbs from '@/components/header-with-breadcrumbs';

type StoriesLayoutProps = {
  children: React.ReactNode;
};

const StoriesLayout = ({ children }: StoriesLayoutProps) => {
  return (
    <div>
      <HeaderWithBreadcrumbs
        title="News & Stories"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'News & Stories', href: '/stories/all', isActive: true },
        ]}
      />
      {children}
    </div>
  );
};

export default StoriesLayout;
