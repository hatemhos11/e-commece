import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ChangeCount, removeProduct } from '../../../Reducers/Cart'
import { toast } from 'react-toastify'

const CartEditComponent = ({ id, count }) => {
    const dispatch = useDispatch()
    const countProd = useRef()

// Logic for Change Value Count && Remove Item 
    function changeItem() {
        let value = parseInt(countProd.current.value);
        value >= 0 && dispatch(ChangeCount({ id, count: value }))
    }

    function notify(){
		toast.warn("Item is deleted", {
            position: toast.POSITION.right
        });
    }

    function IncItem() {
        dispatch(ChangeCount({ id, count: count + 1 }))
    }
    function DecItem() {
        dispatch(ChangeCount({ id, count: count - 1 }))
    }
    function removeItme() {
        notify()
        
        dispatch(removeProduct({ id }))
    }

    return (
        <div className='edit-item'>
            <div className='flex items-center'>
                <div className='cursor-pointer' onClick={IncItem}>+</div>
                <input type='number' value={count} ref={countProd} onChange={changeItem} />
                <div className='cursor-pointer' onClick={DecItem}>-</div>
            </div>

            <button className='remove-btn' onClick={removeItme}>Remove</button>
        </div>
    )
}

export default CartEditComponent