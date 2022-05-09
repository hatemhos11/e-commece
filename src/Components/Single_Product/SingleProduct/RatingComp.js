import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'

const RatingComp = ({rating}) => {
    return (
        <div className="rating mb-4 text-gray-600">
            <div className='flex'>
                <BsFillStarFill className='mr-3' color='#f5c518' size={20} />
                <p><span className='font-bold'>{rating.rate}</span>/5</p>
            </div>
            <p>(  {rating.count} of rates   )</p>
        </div>)
}

export default RatingComp