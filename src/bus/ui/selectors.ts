import { RootState } from '@/setup/typedefs';
import { createSelector } from 'reselect';

const uiSelector = (state: RootState) => state.ui;

export const getIsSidebarOpen = createSelector([uiSelector], (result) => {
  return result.isSidebarOpen;
});
