import React, { useState } from 'react'
import Navbar from './Navbar'
import { faker } from '@faker-js/faker'
import {v4 as uuidv4} from 'uuid';

function Home() {
  const productArray = [...Array(20)].map(() => ({
    id: uuidv4(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(), 
  })) 

  return (
    <div>
      <div className="text-3xl text-center">React Context API</div>
      <Navbar />
      {productArray.map(product => (
        <div key={product.id}>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  )
}

export default Home