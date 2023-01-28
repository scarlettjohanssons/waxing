import { combineReducers } from 'redux';
import homeSlice from '../bus/home/slice';
import uiSlice from '../bus/ui/slice';

export const rootReducer = combineReducers({
  home: homeSlice.reducer,
  ui: uiSlice.reducer,
});
