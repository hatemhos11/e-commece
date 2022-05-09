import React from 'react'
import { useSelector } from 'react-redux'
import CatItem from './Categories/CatItem'


const Categories = () => {

	const categoriesStore = useSelector(state => state.categories)
	const { cats, error } = categoriesStore
	return (
		<div className='cat-parent '>
			{
				error ? <div>{error}</div> : (
					<>
						<CatItem C='all' />
						{cats.map(C => <CatItem C={C} key={C}/>)}
					</>
				)
			}
		</div>
	)
}

export default Categories