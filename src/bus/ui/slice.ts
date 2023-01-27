import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiState } from './typedefs';

const initialState: UiState = {
  isSidebarOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSidebarOpen(state, action: PayloadAction<boolean>) {
      state.isSidebarOpen = action.payload;
    },
  },
});

export default uiSlice;
