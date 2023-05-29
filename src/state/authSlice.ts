import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";
import { RootState } from "./store";
import { apiSlice } from "./apiSlice";

type AuthState = {
  user: User | null;
  token: string | null;
};

const isAuthState = function (x: unknown): x is AuthState {
  return typeof x === "object" && "user" in x && "token" in x;
};

const initialState: AuthState = { user: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: function (builder) {
    builder.addMatcher(
      apiSlice.endpoints.login.matchFulfilled,
      function (state, { payload }) {
        if (isAuthState(payload)) {
          state.token = payload.token;
          state.user = payload.user;
        } else {
          throw new Error(`${payload.toString()} is incorrect`);
        }
      }
    );
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;

export const selectCurrentUser = function (state: RootState) {
  return state.auth.user;
};
