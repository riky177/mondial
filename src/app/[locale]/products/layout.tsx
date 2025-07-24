import React from 'react';

import ProductFilter from '@/modules/products/product-filter';

type ProductLayoutProps = {
  children: React.ReactNode;
};

const ProductLayout = ({ children }: ProductLayoutProps) => {
  return (
    <div className="container flex space-x-4 py-12">
      <ProductFilter />
      <div className="px-4">{children}</div>
    </div>
  );
};

export default ProductLayout;
