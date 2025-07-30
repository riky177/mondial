/**
 * Type definitions for product filter functionality
 */

export type ExpansionState = {
  collections: boolean;
  price: boolean;
};

export type FilterState = {
  collections: string[];
  minPrice: string;
  maxPrice: string;
};

export type ProductFilterProps = {
  hidePriceFilter?: boolean;
};

export type PriceField = 'minPrice' | 'maxPrice';
