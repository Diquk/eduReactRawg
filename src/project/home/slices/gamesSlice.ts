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
import { baseFetch } from 'common/services/baseFetch';
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

export const fetchGamesByScrolling = createAsyncThunk(
  'games/fetchGamesByScrolling',
  async (url: string) => {
    const gamesData = await baseFetch<GamesData>(url);
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
    next: null as null | string,
    previous: null as null | string,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesBySearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesBySearch.fulfilled, (state, action) => {
        state.loading = false;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        gamesAdapter.setAll(state, action.payload.results);
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
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        gamesAdapter.setAll(state, action.payload.results);
      })
      .addCase(fetchInitialGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(fetchGamesByScrolling.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGamesByScrolling.fulfilled, (state, action) => {
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        gamesAdapter.addMany(state, action.payload.results);
        state.loading = false;
      })
      .addCase(fetchGamesByScrolling.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const gamesSelector = gamesAdapter.getSelectors<RootState>(
  (state) => state.games
);

export default gamesSlice.reducer;
