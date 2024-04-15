import './App.css'
import Cart from './components/Cart'
import Product from './components/Product'
import Home from './components/Home'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState, useEffect, useCallback } from 'react';
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      const newProducts = generateProducts()
      setProducts(newProducts)
      localStorage.setItem('product', JSON.stringify(newProducts))
    }
  }, [])

  const generateProducts = () => {
    return [...Array(20)].map(() => ({
      id: uuidv4(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.url(),
    }))
  }

  const addedItems = useCallback((elements) => {
    setCartItems(elements)
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home addedItems={addedItems} products={products} />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
