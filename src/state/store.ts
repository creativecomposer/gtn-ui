import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import gameReducer from "./gameSlice";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    game: gameReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
