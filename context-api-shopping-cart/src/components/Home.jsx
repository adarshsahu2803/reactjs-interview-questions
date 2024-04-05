import React, { useState } from 'react'
import Navbar from './Navbar'
import { faker } from '@faker-js/faker'

function Home() {
  const productArray = [...Array(20)].map(() => ({
    // id: faker.datatype.,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    // image: faker.image.a,    
  })) 

  // const [product] = useState(productArray)

  return (
    <div>
      <div className="text-3xl text-center">React Context API</div>
      <Navbar />
      {productArray.map(prod => (
        <span>{prod.name}</span>
      ))}
    </div>
  )
}

export default Home