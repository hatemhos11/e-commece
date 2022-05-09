import React from 'react'
import ProductCard from './ProductCard'
import { toast } from 'react-toastify'

const MapToRenderProducts = ({ data }) => {

    const ErrorComp = () => {
        return (
            <>
                <div></div>
                <button 
                        className='btn p-2  rounded-sm dark:bg-red-300' 
                        onClick={() => { window.location.reload() }} 
                >
                    Reload
                </button>
            </>
        )
    }


    const WhatWillRender = () => {

        if (data.errMSG !== '') {
            toast.error(data.errMSG)
            return <ErrorComp />
        }

        if ( data.productsWithFilter.length === 0 ) {
            return data.products.map((p) => (
                <ProductCard product={p} key={p.id} />
            ))
        } else {
            return data.productsWithFilter.map((p) => (
                <ProductCard product={p} key={p.id} />
            ))
        }
    }



    return (
        <>
            <WhatWillRender />
        </>
    )
}

export default MapToRenderProducts