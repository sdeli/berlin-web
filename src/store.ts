import { configureStore } from '@reduxjs/toolkit';
import { wordSlice, WordState } from './wordSlice';
// ...

interface AppState {
  words: WordState;
}

const store = configureStore<AppState>({
  reducer: {
    words: wordSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
