import React from 'react'

const ProductIMG = ({image}) => {
    return (
        <div className=' flex justify-center rounded-md p-2 bg-white'>
            <img className='object-contain ' src={image} alt="product img" />
        </div>
    )
}

export default ProductIMG