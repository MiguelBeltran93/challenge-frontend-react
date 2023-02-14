import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchCount} from "./productsAPI";

const initialState = {
  value: '',
  status: 'idle',
};

export const getProductsActionAsync = createAsyncThunk(
  'products/fetchCount',
  async (keyWord) => {
    const response = await fetchCount(keyWord);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    cleanState: (state) => {
      state.value = '';
    },
    replaceState: (state,action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsActionAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductsActionAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const { cleanState, replaceState } = productsSlice.actions;



export default productsSlice.reducer;
