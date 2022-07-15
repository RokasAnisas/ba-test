import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/middleware/redux/redux.store';
import { randomInt } from '@/features/utility/randomInt';
import { storage } from '@/features/storage/storage.functions';

interface ImageFeedState {
  gridSize: number;
  offset: number;
}

const initialState: ImageFeedState = {
  gridSize: Number(storage.get('app_gridSize')) || 12,
  offset: Number(storage.get('app_offset')) || 0,
};

export const imageFeed = createSlice({
  name: 'imageFeed',
  initialState,
  reducers: {
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
      storage.set('app_gridSize', `${action.payload}`);
    },
    getNewImages: state => {
      const randInt = randomInt(0, 1000);
      state.offset = randInt;
      storage.set('app_offset', `${randInt}`);
    },
  },
});

export const { setGridSize, getNewImages } = imageFeed.actions;

export const selectGridSize = (state: RootState) => state.imageFeed.gridSize;
export const selectOffset = (state: RootState) => state.imageFeed.offset;

export default imageFeed.reducer;
