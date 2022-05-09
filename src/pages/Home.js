import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Filter from '../Components/Home/Filter'
import ProductsParent from '../Components/Home/ProductsParent'
import { getProducts } from '../Reducers/Products'
import { getCats } from '../Reducers/Categories'

const Home = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProducts())
		dispatch(getCats())
	}, [dispatch])

	return (
		<div className='flex flex-wrap md:flex-nowrap  '>
			<Filter />
			<ProductsParent />
		</div>
	)
}

export default Home