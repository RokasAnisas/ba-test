import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/middleware/redux/redux.store';
import { randomInt } from '@/features/utility/randomInt';
import { storage } from '@/features/storage/storage.functions';

import { IMAGE_FEED_SETTINGS } from './imageFeed.settings';
import { GifItem, ImageGridItem } from './imageFeed.type';

interface ImageFeedState {
  gridSize: number;
  offset: number;
  activeGrid: ImageGridItem[];
  lockedCells: number[];
}

const initialState: ImageFeedState = {
  gridSize:
    Number(storage.get('app_gridSize')) ||
    IMAGE_FEED_SETTINGS.DEFAULT_GRID_SIZE,
  offset:
    Number(storage.get('app_offset')) || IMAGE_FEED_SETTINGS.DEFAULT_OFFSET,
  activeGrid: [],
  lockedCells: [],
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
      const randInt = randomInt(0, IMAGE_FEED_SETTINGS.MAX_OFFSET);
      state.offset = randInt;
      storage.set('app_offset', `${randInt}`);
    },
    updateGrid: (state, action: PayloadAction<GifItem[]>) => {
      const mappedGifs = action.payload.map(item => ({
        src: item.images.downsized.url,
        alt: item.title,
      }));
      state.activeGrid = mappedGifs;
    },
  },
});

export const { setGridSize, getNewImages, updateGrid } = imageFeed.actions;

export const selectGridSize = (state: RootState) => state.imageFeed.gridSize;
export const selectOffset = (state: RootState) => state.imageFeed.offset;
export const selectActiveGrid = (state: RootState) =>
  state.imageFeed.activeGrid;
export const selectLockedCells = (state: RootState) =>
  state.imageFeed.lockedCells;

export default imageFeed.reducer;
