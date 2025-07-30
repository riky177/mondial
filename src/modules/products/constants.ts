/**
 * Constants for product filter functionality
 */

export const COLLECTIONS = [
  'AZURE',
  'FANTASY',
  'GALA COLLECTION',
  'I SAID MONDIAL',
  'MONDIAL DREAMS',
] as const;

export const INITIAL_EXPANSION_STATE = {
  collections: true,
  price: false,
} as const;

export const INITIAL_FILTER_STATE = {
  collections: [] as string[],
  minPrice: '',
  maxPrice: '',
} as const;
