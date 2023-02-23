import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./reducers/post/postSlice";
import userSlice from "./reducers/user/userSlice";

const rootReducer = combineReducers({
  post: postSlice,
  user:userSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
