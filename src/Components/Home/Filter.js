import React, { useState } from 'react'
import Categories from './Filter/Categories'
import Search from './Filter/Search'
import Price from './Filter/Price'
import './FIlter.css'
import {FcFilledFilter} from 'react-icons/fc'

const Filter = () => {

    const [expand , setExpand ] = useState(false)

    function Toggle(){
        setExpand(!expand)
    }

    return (
        <div className={`filterParent md:h-auto
                                    ${expand ? 'h-auto' : 'h-[79px]'} :
                                    ${expand ? 'border' : 'border-0'}`}
        >
            <FcFilledFilter  size={35} className='md:hidden my-4 mx-auto cursor-pointer ' onClick={Toggle} />
            
            <Search />

            <h2 className='mt-5 font-bold '>Categories</h2>
            <Categories />

            <h2 className='mt-5 font-bold'>Price</h2>
            <Price />
        </div>
    )
}

export default Filter