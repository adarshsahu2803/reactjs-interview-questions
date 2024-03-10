import React, { useState } from 'react'
import Navbar from './Navbar'
import faker from 'faker'

function Home() {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),    
  }))

  const [product] = useState(productArray)

  return (
    <div>
      <div className="text-3xl text-center">React Context API</div>
      <Navbar />
      {product.map(prod => (
        <span>{prod.name}</span>
      ))}
    </div>
  )
}

export default Home