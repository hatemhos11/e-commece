import { Link } from 'react-router-dom'
import CartEditComponent from './CartEditComponent'


const CartProductCard = ({ productData }) => {
    const { id, image, title, price, count } = productData


    return (
        <div className='product-card'>
            <Link className='product-card_img' to={`product:${id}`}>
                <img src={image} alt={title} />
            </Link>

            <div className='card-info'>
                <div className="card-info-head">
                    <div className="card-info-head_title">{title}</div>
                    <span className="price">{price}$</span>
                </div>

                <CartEditComponent 
                    id={id} 
                    count={count} 
                />
            </div>
        </div>
    )
}

export default CartProductCard