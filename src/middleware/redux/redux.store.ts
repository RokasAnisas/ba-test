import { configureStore } from '@reduxjs/toolkit';

import themeSwitcher from '@/features/themeSwitcher/themeSwitcher.slice';
// IMPORT_NEW_SLICE

export const store = configureStore({
  reducer: {
    themeSwitcher,
    // DECLARE_NEW_SLICE
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
