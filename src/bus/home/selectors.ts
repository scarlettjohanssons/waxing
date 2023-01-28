import { RootState } from '@/setup/typedefs';
import { createSelector } from 'reselect';

const homeSelector = (state: RootState) => state.home;

export const getAdvices = createSelector([homeSelector], (result) => {
  return result.advices;
});

export const getCurrentAdvice = createSelector([homeSelector], (result) => {
  return result.currentAdvice;
});
