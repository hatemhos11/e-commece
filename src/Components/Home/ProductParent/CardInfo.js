import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'

const CardInfo = ({price, title, addToCart}) => {
  return (
    <div className='card-info'>
        <div className="card-info-head">
            <div className="card-info-head_title">{title}</div>
            <span className="price">{price}$</span>
        </div>
        <div className='card-info_add-icon' onClick={addToCart}>
            <MdAddShoppingCart className='add-cart-icon' />
        </div>
    </div>
)
}

export default CardInfo