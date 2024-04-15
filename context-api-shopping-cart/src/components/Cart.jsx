import React from 'react'
import Product from './Product'

function Cart({ cartItems }) {
  return (
    <>
      <div>Cart</div>
      <div className='flex flex-wrap text-center bg-yellow-200'>
        {cartItems.map(item => {
          <div key={item.id}>
            <Product item={item} />
          </div>
        })}
        {console.log(cartItems)}
      </div>
    </>

  )
}

export default Cart