import React, { useState } from 'react'
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';

function Home() {
  const [cartItemIds, setCartItemIds] = useState([])

  const productArray = [...Array(20)].map(() => ({
    id: uuidv4(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }))

  const addToCart = (itemId) => {
    const updatedCartList = [...cartItemIds, itemId]
    setCartItemIds(updatedCartList)
    console.log(cartItemIds.map(product => product.name))
  }

  return (

    <div className='flex flex-wrap text-center'>
      {productArray.map(product => (
        <div key={product.id}>
          <Product id={product.id} img={product.image} name={product.name} price={product.price} addToCart={addToCart} />
        </div>
      ))}
    </div >
  )
}

export default Home