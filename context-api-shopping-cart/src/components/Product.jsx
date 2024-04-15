import React from 'react'

function Product({ product }) {

  return (
    <div>
      <img src={product.img} alt={product.name} className='w-32 h-32 m-6' />
      <div>{product.name}</div>
      <div>{product.price}</div>
    </div >
  )
}

export default Product