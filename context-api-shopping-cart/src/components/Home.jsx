import React, { useState } from 'react'
import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid';
import Product from './Product';

function Home() {
  const productArray = [...Array(20)].map(() => ({
    id: uuidv4(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }))

  return (
    <div>
      <Product />
      {/* {productArray.map(product => (
        <div key={product.id}>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <img src={product.image} alt={product.name} />
        </div>
      ))} */}
    </div >
  )
}

export default Home