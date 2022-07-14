import { configureStore } from '@reduxjs/toolkit';

import exampleSlice from '@/features/example/example.slice';
import themeSwitcherSlice from '@/features/themeSwitcher/themeSwitcher.slice';

export const store = configureStore({
  reducer: {
    example: exampleSlice,
    themeSwitcher: themeSwitcherSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
