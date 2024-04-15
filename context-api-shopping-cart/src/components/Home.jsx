import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';

function Home() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      const newProducts = [...Array(20)].map(() => ({
        id: uuidv4(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
      }))
      setProducts(newProducts)
      localStorage.setItem('product', JSON.stringify(newProducts))
    }
  }, [])


  const addToCart = (itemId) => {
    let item = products.filter(product => {
      return itemId === product.id
    })
    let items = [...cartItems, item]
    setCartItems(items)
    console.log(items);
  }

  return (

    <div className='flex flex-wrap text-center'>
      {products.map(product => (
        <div key={product.id}>
          <Product id={product.id} img={product.image} name={product.name} price={product.price} addToCart={addToCart} />
        </div>
      ))}
      {products.map(product => product.name)}
    </div >
  )
}

export default Home