import Loading from '../../Layout/Loading'
import { useSelector } from 'react-redux'
import './Products.css'
import MapToRenderProducts from './ProductParent/MapToRenderProducts'


const ProductsParent = () => {

    const data = useSelector(state => state.products)


    return (
        <>
            <div className="container">
                <div className='products-container '>

                    {data.loading ? <Loading /> : <MapToRenderProducts data={data} />}
                </div>
            </div>
        </>

    )
}

export default ProductsParent