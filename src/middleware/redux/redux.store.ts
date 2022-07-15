import { configureStore } from '@reduxjs/toolkit';

import themeSwitcher from '@/features/themeSwitcher/themeSwitcher.slice';
import imageFeed from '@/features/imageFeed/imageFeed.slice';
import { imageFeedQuery } from '@/features/imageFeed/imageFeed.query';
// IMPORT_NEW_SLICE

export const store = configureStore({
  reducer: {
    themeSwitcher,
    imageFeed,
    imageFeedQuery: imageFeedQuery.reducer,
    // DECLARE_NEW_SLICE
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([imageFeedQuery.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
