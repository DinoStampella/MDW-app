import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/products";
import api from "../config/axios";

interface ProductsState {
    list: Product[],
    loading: boolean,
    error: string | undefined
}

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const response = await api.get('/products');
        return response.data.data;
    }
)

const initialState: ProductsState = {
    list: [],
    loading: false,
    error: undefined
}

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
                state.error = initialState.error
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = initialState.loading
                state.list = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = initialState.loading
                state.list = initialState.list
                state.error = action.error.message
            })
    }
})

export const reducer = slice.reducer;

export default reducer;