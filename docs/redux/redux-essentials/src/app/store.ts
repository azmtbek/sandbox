import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import usersReducer from "../features/users/usersSlice"

import postsReducer from "../features/posts/postsSlice"

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    counter: counterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
