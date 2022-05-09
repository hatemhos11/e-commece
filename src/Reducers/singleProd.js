import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const getProduct = createAsyncThunk('product/getProduct', async (arg, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const res = await axios.get('https://fakestoreapi.com/products/' + arg.id)
        const data = await res.data
        return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const product = createSlice({
    name: 'product',
    initialState: { product: {}, loading: false, errMSG: '' },

    extraReducers: {
        [getProduct.pending]: (state, action) => {
            state.loading = true
        },
        [getProduct.fulfilled]: (state, action) => {
            state.loading = false
            state.product = action.payload
        },
        [getProduct.rejected]: (state, action) => {
            state.loading = false
            state.errMSG = action.payload
        }
    },
})


export default product.reducer