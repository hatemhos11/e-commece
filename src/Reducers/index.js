import { configureStore } from '@reduxjs/toolkit'
import products from './Products'
import singleProd from './singleProd'
import categories from './Categories'
import cart from './Cart'

const store = configureStore({
    reducer:{
        products, 
        categories,
        cart,
        singleProd
    }
})

export default store