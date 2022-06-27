import { configureStore } from '@reduxjs/toolkit';

import gamesReducer from 'project/home/slices/gamesSlice';
import gameReducer from 'project/gameDetails/slices/gameSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
