import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/middleware/redux/redux.store';

interface ImageFeedState {
  value: number;
}

const initialState: ImageFeedState = {
  value: 0,
};

export const imageFeed = createSlice({
  name: 'imageFeed',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = imageFeed.actions;

export const selectCount = (state: RootState) => state.imageFeed.value;

export default imageFeed.reducer;
