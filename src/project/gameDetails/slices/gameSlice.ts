import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';

import { GameItem } from 'common/models/interfaces';
import type { RootState } from 'common/store/store';
import { getGameData } from 'project/gameDetails/services/getGameData';
import { getGameScreenshots } from 'project/gameDetails/services/getGameScreenshots';
import { getGameVideos } from 'project/gameDetails/services/getGamesVideos';
import { GameScreenshots } from 'project/gameDetails/models/gameModels';
import { GameVideos } from 'project/gameDetails/models/gameModels';

export const fetchGameById = createAsyncThunk(
  'game/fetchGameById',
  async (gameId: string) => {
    const game = await getGameData(gameId);
    const screenshots = await getGameScreenshots(gameId);
    const videos = await getGameVideos(gameId);
    return { game, screenshots, videos };
  }
);

type GameState = {
  loading: boolean;
  game: GameItem | null;
  screenshots: GameScreenshots | { results: [] };
  videos: GameVideos | { results: [] };
  error: null | SerializedError;
};

const initialState: GameState = {
  loading: false,
  game: null,
  screenshots: { results: [] },
  videos: { results: [] },
  error: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameById.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchGameById.fulfilled,
        (
          state,
          action: PayloadAction<{
            game: GameItem;
            screenshots: GameScreenshots;
            videos: GameVideos;
          }>
        ) => {
          state.game = action.payload.game;
          state.screenshots = action.payload.screenshots;
          state.videos = action.payload.videos;
          state.loading = false;
        }
      )
      .addCase(fetchGameById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
