import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/middleware/redux/redux.store';

interface ImageFeedState {
  gridSize: number;
}

const initialState: ImageFeedState = {
  gridSize: 12,
};

export const imageFeed = createSlice({
  name: 'imageFeed',
  initialState,
  reducers: {
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
    },
  },
});

export const { setGridSize } = imageFeed.actions;

export const selectGridSize = (state: RootState) => state.imageFeed.gridSize;

export default imageFeed.reducer;
