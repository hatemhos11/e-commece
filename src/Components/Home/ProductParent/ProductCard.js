import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../Reducers/Cart'
import { toast } from 'react-toastify';
import CardInfo from './CardInfo'

const ProductCard = ({ product }) => {

	const dispatch = useDispatch()

	const { id, title, image, price } = product

	const toastId = React.useRef(null);

	const notify = () => {
		if (!toast.isActive(toastId.current)) {
			toastId.current = toast.success("Add Item To Cart !");
		}
	}

	function addToCart() {
		dispatch(addProduct(product))
		notify()
	}

	return (
		<div className='product-card'>
			<Link className='product-card_img' to={`product:${id}`}>
				<img loading='lazy' src={image} alt={title} />
			</Link>

			<CardInfo
				title={title}
				price={price}
				addToCart={addToCart}

			/>

		</div>
	)
}

export default ProductCard