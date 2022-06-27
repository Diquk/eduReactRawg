import {
  createAsyncThunk,
  createSlice,
  SerializedError,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import {
  GamesData,
  GetGamesListArgs,
  GameItem,
} from 'common/models/interfaces';
import { getGamesList } from 'common/services/getGamesList';
import { getInitialGamesList } from 'common/services/getInitialGamesList';
import type { RootState } from 'common/store/store';

export const fetchGamesBySearch = createAsyncThunk(
  'games/fetchGamesBySearch',
  async ({
    searchText,
    orderingText,
    setSearchParams,
    setText,
    setNewURL,
  }: GetGamesListArgs): Promise<GamesData> => {
    const gamesData = await getGamesList({
      searchText,
      orderingText,
      setSearchParams,
      setText,
      setNewURL,
    });
    return gamesData;
  }
);

export const fetchInitialGames = createAsyncThunk(
  'games/fetchInitialGames',
  async () => {
    const gamesData = await getInitialGamesList();
    return gamesData;
  }
);

const gamesAdapter = createEntityAdapter<GameItem>({
  selectId: (game) => game.id.toString(),
});

const gamesSlice = createSlice({
  name: 'games',
  initialState: gamesAdapter.getInitialState({
    loading: false,
    error: null as null | SerializedError,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesBySearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesBySearch.fulfilled, (state, action) => {
        state.loading = false;
        gamesAdapter.setAll(state, action.payload.results);
        //state.games = action.payload.results;
      })
      .addCase(fetchGamesBySearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(fetchInitialGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInitialGames.fulfilled, (state, action) => {
        state.loading = false;
        gamesAdapter.setAll(state, action.payload.results);
        //state.games = action.payload.results;
      })
      .addCase(fetchInitialGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const gamesSelector = gamesAdapter.getSelectors<RootState>(
  (state) => state.games
);

export default gamesSlice.reducer;
