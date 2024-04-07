import React from 'react'

function Product(props) {
  const handleAddToCart = () => {


    addToCart(props.id)
  }

  return (
    <div>
      <img src={props.img} alt={props.name} className='w-32 h-32 m-6' />
      <div>{props.name}</div>
      <div>{props.price}</div>
      <button onClick={handleAddToCart} className='bg-black text-white p-2 w-30 h-15'>Add to Cart</button>
    </div >
  )
}

export default Product