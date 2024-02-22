import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'

function Navbar() {
    return (
        <nav className='bg-black text-white text-center flex justify-evenly text-xl'>
            <Link to={Home} className='px-4 py-2'>Home</Link>
            <Link to={Cart} className='px-4 py-2'>Cart</Link>
        </nav>
    )
}

export default Navbar