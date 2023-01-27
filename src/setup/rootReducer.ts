import { combineReducers } from 'redux';
import uiSlice from '../bus/ui/slice';

export const rootReducer = combineReducers({
  ui: uiSlice.reducer,
});
