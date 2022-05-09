import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const getProducts = createAsyncThunk('products/getProducts', async (arg, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const res = await axios.get('https://fakestoreapi.com/products')
        const data = await res.data
        return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})

const products = createSlice({
    name: 'products',
    initialState: { products: [], productsWithFilter: [], loading: false, errMSG: '' },

    reducers: {
        FilterWithCategories: (state, action) => {
            if (action.payload === 'all') {
                state.productsWithFilter = []
            } else {
                state.productsWithFilter = state.products.filter(p => p.category === action.payload)
            }
        },
        FilterWithPrice: (state, action) => {
            if (state.productsWithFilter.length > 0) {
                state.productsWithFilter = state.products.filter(P => P.price < action.payload)
            }else{
                state.productsWithFilter = state.products.filter(P => P.price < action.payload)
            }
        }
    },

    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.loading = true
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.products = [...action.payload]
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false
            state.errMSG = action.payload
        }
    },
})


export const { FilterWithCategories, FilterWithPrice } = products.actions
export default products.reducer