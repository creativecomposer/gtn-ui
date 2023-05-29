import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { RootState } from "./store";

type GameState = {
  id: string | null;
  guessCount: number;
  status: string;
};

const initialState: GameState = { id: null, guessCount: 0, status: "" };

type GamePayload = {
  id: string;
  status: string;
};

type GuessPayload = {
  guessCount: number;
  status: string;
};

const extraReducers = function (builder) {
  builder.addMatcher(
    apiSlice.endpoints.startGame.matchFulfilled,
    function (state: GameState, { payload }: { payload: GamePayload }) {
      state.id = payload.id;
      state.status = payload.status;
      state.guessCount = 0;
    }
  );

  builder.addMatcher(
    apiSlice.endpoints.guess.matchFulfilled,
    function (state: GameState, { payload }: { payload: GuessPayload }) {
      state.guessCount = payload.guessCount;
      state.status = payload.status;
    }
  );
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers,
});

export default gameSlice.reducer;

export const selectCurrentGame = (state: RootState) => state.game;
