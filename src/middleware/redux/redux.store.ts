import { configureStore } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';

import themeSwitcher from '@/features/themeSwitcher/themeSwitcher.slice';
import imageFeed from '@/features/imageFeed/imageFeed.slice';
// IMPORT_NEW_SLICE

export const store = configureStore({
  reducer: {
    themeSwitcher,
    imageFeed,
    // DECLARE_NEW_SLICE
  },
  middleware: [save()],
  preloadedState: load(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
