import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchProductDetail, fetchProductsResume} from "./productsAPI";

const initialState = {
  value: '',
  detail:'',
  status: 'idle',
};

export const getProductsActionAsync = createAsyncThunk(
  'products/fetchCount',
  async (keyWord) => {
    const response = await fetchProductsResume(keyWord);
    return response.data;
  }
);

export const getProductDetailActionAsync = createAsyncThunk(
  'productDetail/fetchCount',
  async (item) => {
    const response = await fetchProductDetail(item);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    cleanState: (state) => {
      state.value = '';
      state.detail = '';
    },
    replaceState: (state,action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsActionAsync.pending, (state) => {
        console.log('entraaaaa')
        state.status = 'loading';
      })
      .addCase(getProductsActionAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      }).addCase(getProductDetailActionAsync.pending, (state) => {
      state.status = 'loading';
      })
      .addCase(getProductDetailActionAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detail = action.payload;
      });
  },
});

export const { cleanState, replaceState } = productsSlice.actions;



export default productsSlice.reducer;
