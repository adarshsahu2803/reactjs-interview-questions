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
    <div className='flex flex-wrap text-center'>
      {productArray.map(product => (
        <div key={product.id} className=''>
          <img src={product.image} alt={product.name} className='w-32 h-32 m-5' />
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div >
  )
}

export default Home