import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'common/store/store';

const initialState = true;

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingTrue: () => true,
    setLoadingFalse: () => false,
  },
});

export const { setLoadingTrue, setLoadingFalse } =
  loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading;

export default loadingSlice.reducer;
