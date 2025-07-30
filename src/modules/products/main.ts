/**
 * Main barrel export file for products module
 */

// Main Components
export { default as ProductFilter } from './product-filter';
export { default as Products } from './index';
export { default as Search } from './search';

// Re-export types for external use
export type {
  ProductFilterProps,
  FilterState,
  ExpansionState,
  PriceField,
} from './types';

// Re-export constants for external use
export { COLLECTIONS } from './constants';

// Re-export utility functions for external use
export {
  parseCollectionsFromUrl,
  createFilterStateFromSearchParams,
  updateUrlParams,
} from './utils';
