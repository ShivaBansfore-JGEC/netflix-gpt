import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "./slices/movieSlices";
import gptReducer from "./slices/gptSlice";

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        gpt: gptReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch