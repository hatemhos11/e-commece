import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const getCats = createAsyncThunk('categories/getCats', async (arg, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const res = await axios.get('https://fakestoreapi.com/products/categories')
        const data = await res.data
        return data
    } catch (err) {
        return rejectWithValue(err.message)
    }
})


const categories = createSlice({
    name: 'categories',
    initialState: { cats: [], loading: false, error: '' },
    extraReducers: {
        [getCats.pending]: (state, action) => {
            state.loading =  true
        },
        [getCats.fulfilled]: (state, action) => {
            state.loading = false
            state.cats = action.payload
        },
        [getCats.rejected]: (state, action) =>{
            state.loading = false
            state.error = action.payload.error
        }
    },

})

export default categories.reducer