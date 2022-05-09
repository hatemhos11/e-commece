import React from 'react'
import { useDispatch } from 'react-redux'
import { FilterWithCategories } from '../../../../Reducers/Products'

const CatItem = ({ C }) => {
    const dispatch = useDispatch()

    const renderItem = () => {
        return (
            <div
                className='cat-item'
                onClick={() => dispatch(FilterWithCategories(C))}>{C}
            </div>
        )
    }

    return (
        renderItem()
    )
}

export default CatItem