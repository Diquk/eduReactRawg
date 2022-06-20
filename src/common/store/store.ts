import { configureStore } from '@reduxjs/toolkit';

import loadingReducer from 'common/slices/loadingSlice';
import gamesReducer from 'project/home/slices/gamesSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
