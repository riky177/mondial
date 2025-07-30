import React from 'react';

import Breadcrumbs, { BreadcrumbItem } from './breadcrumbs';

type HeaderWithBreadcrumbsProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
};

const HeaderWithBreadcrumbs = ({
  title,
  breadcrumbs,
}: HeaderWithBreadcrumbsProps) => {
  return (
    <div className="mb-5 flex w-full flex-col items-center justify-center space-y-[22px] border-b-[1px] border-b-gray-300 px-4 py-[30px] md:space-y-10 md:py-[45px]">
      <Breadcrumbs
        items={breadcrumbs}
        className="scrollbar-hide w-full overflow-auto"
      />
      <h2 className="font-trajan-bold text-lg uppercase">{title}</h2>
    </div>
  );
};

export default HeaderWithBreadcrumbs;
