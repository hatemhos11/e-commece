import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {removeAllProducts} from '../../../Reducers/Cart'
const CartDetails = () => {
	const dispatch = useDispatch()
	const cartProducts = useSelector(state => state.cart.cartProducts)

	function AccountTotal() {
		let value = cartProducts.reduce((acc, currValue) => {
			return acc + (currValue.count * currValue.price)
		}, 0)
		return value.toFixed(2)
	}

	function removeProds(){
		dispatch(removeAllProducts())
	}

	return (

		<div className='flex items-center justify-between container mt-10 bg-slate-700 text-white rounded-xl p-5 shadow-2xl drop-shadow-xl '>
			<div>
				Subtotal: {AccountTotal()}$
			</div>
			<div>
				<a className='btn bg-red-500 ' onClick={removeProds}><button>Empty Cart</button></a>
				<Link className='btn' to='/checkout'><button>Checkout</button></Link>
			</div>
		</div>
	)
}

export default CartDetails