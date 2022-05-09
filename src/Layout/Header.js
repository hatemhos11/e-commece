import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'
import './layout.css'

const Header = ({ToggleDarkMode}) => {

    const count = useSelector( state=> state.cart.cartProducts ).length
    return (
        <header className='header'>
            <div className='container'>
                <Link className="header-logo" to='/' >
                    E-Commerce
                </Link>
                <MdDarkMode size='25px' className='cursor-pointer' onClick={ToggleDarkMode}>dark</MdDarkMode>
                <Link className='header-cart-icon' to='cart'>
                    <FaShoppingCart size='25px' />
                    <span className='cart-count-num ' style={{ fontSize: '8px' }} >{count}</span>
                </Link>
            </div>

        </header>
    )
}

export default Header