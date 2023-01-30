import pricingSlice from './slice';

const actions = {
  ...pricingSlice.actions,
};

export const pricingActions: typeof actions = actions;
