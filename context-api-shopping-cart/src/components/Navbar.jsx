import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="text-3xl text-center">React Context API</div>
            <nav className="bg-black text-white text-center flex justify-evenly text-xl">
                <Link to="/" className='px-4 py-2'>Home</Link>
                <Link to="cart" className='px-4 py-2'>Cart</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Navbar