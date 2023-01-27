import uiSlice from './slice';

const actions = {
  ...uiSlice.actions,
};

export const uiActions: typeof actions = actions;
