import React from 'react'
import Product from './Product'

function Cart({ cartItems }) {
  return (
    <>
      <div>Cart</div>
      <div className='flex flex-wrap text-center'>
        {cartItems.map(item => {
          <div key={item.id}>
            <Product id={item.id} img={item.img} name={item.name} price={item.price} />
          </div>
        })}

      </div>
    </>

  )
}

export default Cart