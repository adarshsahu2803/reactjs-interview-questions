import './App.css'
import Cart from './components/Cart'
import Product from './components/Product'
import Home from './components/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        </Route> adlf
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
