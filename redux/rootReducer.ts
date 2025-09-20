import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

import authSlice from "./slice/authSlice";
// Combine all reducers
export const rootReducer = combineReducers({
  auth: authSlice,

  [baseApi.reducerPath]: baseApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
