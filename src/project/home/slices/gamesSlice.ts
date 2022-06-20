import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GamesData } from 'common/models/interfaces';
import type { RootState } from 'common/store/store';

type GamesState = GamesData | null;
const initialState = null as GamesState;

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (
      state: GamesState,
      action: PayloadAction<GamesData>
    ) => {
      return action.payload;
    },
    resetGames: () => {
      return null;
    },
  },
});

export const { setGames, resetGames } = gamesSlice.actions;

export const selectGames = (state: RootState) => state.games;

export default gamesSlice.reducer;
