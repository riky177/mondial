import React from 'react';

import { ProductFilter } from '@/modules/products/main';

type ProductWithFilterProps = {
  children: React.ReactNode;
  priceFilter?: boolean;
};

const ProductWithFilter = ({
  children,
  priceFilter,
}: ProductWithFilterProps) => {
  return (
    <div className="flex w-full gap-x-10">
      <ProductFilter hidePriceFilter={!priceFilter} />
      {children}
    </div>
  );
};

export default ProductWithFilter;
