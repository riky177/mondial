/**
 * Utility functions for product filter functionality
 */
import type { FilterState, PriceField } from './types';

export const parseCollectionsFromUrl = (
  collectionsParam: string | null,
): string[] => {
  return collectionsParam ? collectionsParam.split(',') : [];
};

export const createFilterStateFromSearchParams = (
  searchParams: URLSearchParams,
): FilterState => {
  const collections = parseCollectionsFromUrl(searchParams.get('collections'));
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  return { collections, minPrice, maxPrice };
};

export const updateUrlParams = (
  searchParams: URLSearchParams,
  filters: FilterState,
): URLSearchParams => {
  const params = new URLSearchParams(searchParams.toString());

  // Handle collections parameter
  if (filters.collections.length > 0) {
    params.set('collections', filters.collections.join(','));
  } else {
    params.delete('collections');
  }

  // Handle price parameters
  const priceFields: Array<{ key: PriceField; value: string }> = [
    { key: 'minPrice', value: filters.minPrice },
    { key: 'maxPrice', value: filters.maxPrice },
  ];

  priceFields.forEach(({ key, value }) => {
    if (value.trim()) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
  });

  return params;
};
