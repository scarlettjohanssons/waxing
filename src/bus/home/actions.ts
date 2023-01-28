import homeSlice from './slice';

const actions = {
  ...homeSlice.actions,
};

export const homeActions: typeof actions = actions;
