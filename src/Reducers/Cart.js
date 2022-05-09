import { createSlice } from '@reduxjs/toolkit'


const cart = createSlice({
    name: 'cart',
    initialState: { cartProducts: [], loading: false, errMSG: '' },
    reducers: {
        addProduct: {
            reducer: (state, action) => {
                let isFound = state.cartProducts.findIndex(x => x.id === action.payload.id);
                if (isFound === -1) {
                    state.cartProducts.push(action.payload)
                }
            },
            prepare: (productObj) => {
                return { payload: { ...productObj, count: 1 } }
            },
        },
        ChangeCount: {
            reducer: (state, action) => {
                let IncreaseIndex = state.cartProducts.findIndex(p => p.id === action.payload.id)
                state.cartProducts[IncreaseIndex].count = action.payload.count
            },
            prepare: (value) => {
                if (value.count <= 0) {
                    return { payload: { id: value.id, count: 1 } }
                } else {
                    return { payload: { id: value.id, count: value.count } }
                }
            }
        },
        removeProduct: (state, action) => {
            state.cartProducts = state.cartProducts.filter(p => p.id !== action.payload.id)
        },
        removeAllProducts: (state, action) => {
            state.cartProducts = []
        },
    },

})

export const { addProduct, removeProduct, removeAllProducts, ChangeCount } = cart.actions
export default cart.reducer