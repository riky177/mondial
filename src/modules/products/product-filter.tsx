'use client';

import React from 'react';

import {
  CollectionCheckbox,
  ExpandableSection,
  PriceInput,
} from './components';
import { COLLECTIONS } from './constants';
import { useExpandableSection, useProductFilter } from './hooks';
import type { ProductFilterProps } from './types';

const ProductFilter: React.FC<ProductFilterProps> = ({
  hidePriceFilter = false,
}) => {
  const { expandedSections, toggleSection } = useExpandableSection();
  const {
    filters,
    hasFiltersChanged,
    handleCollectionChange,
    handlePriceChange,
    applyFilters,
  } = useProductFilter();

  return (
    <div className="sticky top-4 hidden h-fit w-full max-w-[25%] font-red-hat md:block">
      <p className="border-b border-gray-300 pb-4 text-sm">FILTER</p>

      {/* Collections Section */}
      <ExpandableSection
        title="COLLECTIONS"
        isExpanded={expandedSections.collections}
        onToggle={() => toggleSection('collections')}
      >
        {COLLECTIONS.map((collection) => (
          <CollectionCheckbox
            key={collection}
            collection={collection}
            isChecked={filters.collections.includes(collection)}
            onChange={handleCollectionChange}
          />
        ))}
      </ExpandableSection>

      {/* Price Section */}
      {!hidePriceFilter && (
        <ExpandableSection
          title="PRICE"
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection('price')}
        >
          <div className="space-y-2">
            <PriceInput
              id="min-price"
              label="MIN"
              value={filters.minPrice}
              placeholder="1,000,000"
              onChange={(value) => handlePriceChange('minPrice', value)}
            />
            <PriceInput
              id="max-price"
              label="MAX"
              value={filters.maxPrice}
              placeholder="1,000,000"
              onChange={(value) => handlePriceChange('maxPrice', value)}
            />
          </div>
        </ExpandableSection>
      )}

      {/* Apply Button */}
      <button
        className={`mt-6 w-full rounded-3xl px-2.5 py-2 text-sm font-medium transition-colors ${
          hasFiltersChanged
            ? 'bg-black text-white hover:bg-gray-800'
            : 'cursor-not-allowed bg-gray-300 text-gray-500'
        }`}
        onClick={applyFilters}
        disabled={!hasFiltersChanged}
        type="button"
      >
        APPLY
      </button>
    </div>
  );
};

export default ProductFilter;
