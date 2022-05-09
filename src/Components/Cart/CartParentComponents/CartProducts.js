import React from 'react'
import CartProductCard from './CartProductCard'
import { useSelector } from 'react-redux'
import Loading from '../../../Layout/Loading'

const CartProducts = () => {

	const cartData = useSelector(state => state.cart)
	const { cartProducts , loading } = cartData

	const MapToReturnProds = ()=>{
		return (
			cartProducts.length > 0 ? (
				cartProducts.map(P => (
					<CartProductCard productData={P} /> 
				))
			)	:  	<p className='my-5 text-2lg text-red-400'>There Is No Products</p>
		)
	}

	const Products = () => {
			return (
				<>
				{loading ? <Loading/> : (
					<MapToReturnProds/>
				)}
			</>
		)
	}
		
	return (
		<>
			<h1 className='font-bold mb-6 text-black dark:text-zinc-300' style={{ fontSize: '30px' }}>Your Shopping Cart</h1>
			<div className="products-container">
				<Products/>
			</div>
		</>
	)
}

export default CartProducts