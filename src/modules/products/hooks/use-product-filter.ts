import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { INITIAL_FILTER_STATE } from '../constants';
import type { FilterState, PriceField } from '../types';
import { createFilterStateFromSearchParams, updateUrlParams } from '../utils';

export const useProductFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTER_STATE);
  const [initialFilters, setInitialFilters] =
    useState<FilterState>(INITIAL_FILTER_STATE);

  // Initialize filters from search params
  useEffect(() => {
    const filterState = createFilterStateFromSearchParams(searchParams);
    setFilters(filterState);
    setInitialFilters(filterState);
  }, [searchParams]);

  // Check if filters have changed from initial state
  const hasFiltersChanged = useMemo(() => {
    const collectionsChanged =
      JSON.stringify([...filters.collections].sort()) !==
      JSON.stringify([...initialFilters.collections].sort());
    const priceChanged =
      filters.minPrice !== initialFilters.minPrice ||
      filters.maxPrice !== initialFilters.maxPrice;

    return collectionsChanged || priceChanged;
  }, [filters, initialFilters]);

  // Event handlers
  const handleCollectionChange = useCallback((collection: string) => {
    setFilters((prev) => ({
      ...prev,
      collections: prev.collections.includes(collection)
        ? prev.collections.filter((c) => c !== collection)
        : [...prev.collections, collection],
    }));
  }, []);

  const handlePriceChange = useCallback((field: PriceField, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const applyFilters = useCallback(() => {
    const params = updateUrlParams(searchParams, filters);
    router.push(`?${params.toString()}`);
  }, [router, searchParams, filters]);

  return {
    filters,
    hasFiltersChanged,
    handleCollectionChange,
    handlePriceChange,
    applyFilters,
  };
};
