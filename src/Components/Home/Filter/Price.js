import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterWithPrice } from '../../../Reducers/Products'


const Price = () => {
	const dispatch = useDispatch()

	let [count, setCount] = useState(999)
	
	let productsStore = useSelector(state => state.products)


	//Sort Products Debend on price
	const sortPrice = () => {
		let prods = [...productsStore.products]
		if (prods.length > 0) {
			return prods.sort((x, y) => x.price - y.price)
		}
		else {
			return []
		}
	}

// Get Max price &&&&&& Min price
	const highPrice = () => {
		if (sortPrice().length > 0) {
			const price = sortPrice().at(-1).price
			return Math.ceil(price)
		}
	}
	const lowPrice = () => {
		if (sortPrice().length > 0) {
			const price = sortPrice().at(1).price
			return Math.ceil(price)
		}
	}


	function HandleChangePrice(e) {
		setCount(e.target.value)
	}

	function dispatchNewFilterWithPrice(){
		dispatch(FilterWithPrice(count))
	}
	return (
		<div>
			<div className='my-2'>$ {count}</div>
			<input 
					type="range"
					className='w-full'
					onChange={HandleChangePrice} 
					onMouseUp={dispatchNewFilterWithPrice}
					defaultValue={count} 
					max={highPrice()}
					min={lowPrice()}
			/>
		</div>
	)
}

export default Price