import React, { useState } from 'react'
import Product from './Product';

function Home({ addedItems, products }) {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (itemId) => {
    let productToAdd = products.find(product => itemId === product.id)

    let updatedCartItems = [...cartItems, productToAdd]

    setCartItems(updatedCartItems)

    console.log(updatedCartItems);

    addedItems(updatedCartItems)
  }

  return (

    <div className='flex flex-wrap text-center'>
      {products.map(product => (
        <div key={product.id}>
          <Product product={product} />
          <button onClick={() => handleAddToCart(product.id)} className='bg-black text-white p-2 w-30 h-15'>Add to Cart</button>
        </div>
      ))}
    </div >
  )
}

export default Home