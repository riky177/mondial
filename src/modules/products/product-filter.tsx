'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type ExpansionState = {
  collections: boolean;
  price: boolean;
};

type FilterState = {
  collections: string[];
  minPrice: string;
  maxPrice: string;
};

const COLLECTIONS = [
  'AZURE',
  'FANTASY',
  'GALA COLLECTION',
  'I SAID MONDIAL',
  'MONDIAL DREAMS',
];

const ProductFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [expandedSections, setExpandedSections] = useState<ExpansionState>({
    collections: true,
    price: false,
  });

  const [filters, setFilters] = useState<FilterState>({
    collections: [],
    minPrice: '',
    maxPrice: '',
  });

  // Initialize filters from search params
  useEffect(() => {
    const collections = searchParams.get('collections');
    const minPrice = searchParams.get('minPrice') || '';
    const maxPrice = searchParams.get('maxPrice') || '';

    setFilters({
      collections: collections ? collections.split(',') : [],
      minPrice,
      maxPrice,
    });
  }, [searchParams]);

  const toggleSection = (section: keyof ExpansionState) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCollectionChange = (collection: string) => {
    setFilters((prev) => ({
      ...prev,
      collections: prev.collections.includes(collection)
        ? prev.collections.filter((c) => c !== collection)
        : [...prev.collections, collection],
    }));
  };

  const handlePriceChange = (field: 'minPrice' | 'maxPrice', value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Set collections parameter
    if (filters.collections.length > 0) {
      params.set('collections', filters.collections.join(','));
    } else {
      params.delete('collections');
    }

    // Set price parameters
    if (filters.minPrice) {
      params.set('minPrice', filters.minPrice);
    } else {
      params.delete('minPrice');
    }

    if (filters.maxPrice) {
      params.set('maxPrice', filters.maxPrice);
    } else {
      params.delete('maxPrice');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="sticky top-4 hidden h-fit w-full max-w-[25%] font-red-hat md:block">
      <p className="border-b-[1px] border-gray-300 pb-4">FILTER</p>

      <div>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 py-4 font-medium text-gray-900 hover:text-gray-700"
          onClick={() => toggleSection('collections')}
        >
          <span className="text-sm">COLLECTIONS</span>
          <svg
            className={`h-3 w-3 shrink-0 transition-transform ${expandedSections.collections ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        {expandedSections.collections && (
          <div className="pb-4">
            {COLLECTIONS.map((collection) => (
              <label
                key={collection}
                className="flex items-center space-x-3 py-2"
              >
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={filters.collections.includes(collection)}
                  onChange={() => handleCollectionChange(collection)}
                />
                <span className="text-sm text-gray-600">{collection}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 py-4 font-medium text-gray-900 hover:text-gray-700"
          onClick={() => toggleSection('price')}
        >
          <span className="text-sm">PRICE</span>
          <svg
            className={`h-3 w-3 shrink-0 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        {expandedSections.price && (
          <div className="pace-x-2 space-y-2">
            <div>
              <label
                htmlFor="min-price"
                className="mb-1 font-trajan-bold text-xxs text-tertiary"
              >
                MIN
              </label>
              <div className="flex w-full border-b border-gray-300 py-1">
                <span className="font-sm mr-2">Rp</span>
                <input
                  type="number"
                  id="min-price"
                  placeholder="1,000,000"
                  className="w-full text-sm outline-none"
                  value={filters.minPrice}
                  onChange={(e) =>
                    handlePriceChange('minPrice', e.target.value)
                  }
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="max-price"
                className="mb-1 font-trajan-bold text-xxs text-tertiary"
              >
                MAX
              </label>
              <div className="flex w-full border-b border-gray-300 py-1">
                <span className="font-sm mr-2">Rp</span>
                <input
                  type="number"
                  id="max-price"
                  placeholder="1,000,000"
                  className="w-full text-sm outline-none"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    handlePriceChange('maxPrice', e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        className="font-sm mt-6 w-full rounded-3xl bg-black px-2.5 py-2 text-sm text-white"
        onClick={applyFilters}
      >
        APPLY
      </button>
    </div>
  );
};

export default ProductFilter;
