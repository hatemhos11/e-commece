import React from 'react'
import CartDetails from './CartParentComponents/CartDetails'
import CartProducts from './CartParentComponents/CartProducts'
import './cart.css'

const CartParent = () => {
  return (
    <div className='container'>
      <CartProducts />
      <CartDetails />
    </div>
  )
}

export default CartParent