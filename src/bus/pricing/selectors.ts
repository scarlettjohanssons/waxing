import { RootState } from '@/setup/typedefs';
import { createSelector } from 'reselect';

const homeSelector = (state: RootState) => state.pricing;

export const getPricing = createSelector([homeSelector], (result) => {
  return result.pricing;
});

export const getPartOfPrice = createSelector([homeSelector], (result) => {
  return result.partOfPrice;
});
