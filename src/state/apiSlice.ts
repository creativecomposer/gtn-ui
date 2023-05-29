import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Credentials } from "../types";
import { RootState } from "./store";

// TODO: read base url from environment variable
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3500/api/v1/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token !== null) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const loginMutation = function (credentials: Credentials) {
  return {
    url: "login",
    method: "POST",
    body: credentials,
  };
};

const startGameMutation = function () {
  return {
    url: "games",
    method: "POST",
    body: {},
  };
};

const guessMutation = function ({ id, guess }) {
  return {
    url: `games/${id}`,
    method: "PUT",
    body: {
      guess,
    },
  };
};

const endpoints = function (builder) {
  return {
    login: builder.mutation({
      query: loginMutation,
    }),
    startGame: builder.mutation({
      query: startGameMutation,
    }),
    guess: builder.mutation({
      query: guessMutation,
    }),
  };
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints,
});

export const { useLoginMutation, useStartGameMutation, useGuessMutation } =
  apiSlice;
