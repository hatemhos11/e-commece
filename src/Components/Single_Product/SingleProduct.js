import {useEffect} from 'react'
import { getProduct } from '../../Reducers/singleProd';
import { useSelector,useDispatch } from 'react-redux';
import {  useParams } from "react-router";
import Loading from '../../Layout/Loading'
import styles from './singleProduct.module.css'
import RatingComp from './SingleProduct/RatingComp';
import ProductIMG from './SingleProduct/ProductIMG';
const SingleProduct = () => {

    const dispatch = useDispatch()
    const id = useParams().id.slice(1)

    useEffect(()=>{
        dispatch(getProduct({id}))
    },[dispatch])

    const state = useSelector(state=> state.singleProd )
    
    const {image,title , price, rating , description} = state.product

    return (
        !title ? <Loading /> : 
        <>
        <div className='container grid grid-cols-1 sm:grid-cols-2 gap-14 dark:text-zinc-300'>
            <ProductIMG image={image}/>
            
            <div className='flex flex-col justify-evenly'>
                <h4 className="title text-3xl mb-4">{title}</h4>

                <div className="price font-bold">${price}</div>

                <div className="description mb-4">
                    <p className='text-gray-600 italic'>{description}</p>
                </div>

                <RatingComp rating={rating}/>

                <button className={styles.addBtn}>Add To Cart</button>
            </div>
        </div>
        </>
    )
}

export default SingleProduct