import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/middleware/redux/redux.store';
import { randomInt } from '@/features/utility/randomInt';

interface ImageFeedState {
  gridSize: number;
  offset: number;
}

const initialState: ImageFeedState = {
  gridSize: 12,
  offset: 0,
};

export const imageFeed = createSlice({
  name: 'imageFeed',
  initialState,
  reducers: {
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
    },
    getNewImages: state => {
      state.offset = randomInt(0, 100);
    },
  },
});

export const { setGridSize, getNewImages } = imageFeed.actions;

export const selectGridSize = (state: RootState) => state.imageFeed.gridSize;
export const selectOffset = (state: RootState) => state.imageFeed.offset;

export default imageFeed.reducer;
