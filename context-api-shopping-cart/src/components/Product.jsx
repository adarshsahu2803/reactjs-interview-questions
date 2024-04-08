import React from 'react'

function Product({ id, img, name, price, addToCart }) {
  const handleAddToCart = () => {
    
    addToCart(id)
  }

  return (
    <div>
      <img src={img} alt={name} className='w-32 h-32 m-6' />
      <div>{name}</div>
      <div>{price}</div>
      <button onClick={handleAddToCart} className='bg-black text-white p-2 w-30 h-15'>Add to Cart</button>
    </div >
  )
}

export default Product