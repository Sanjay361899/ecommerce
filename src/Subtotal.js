/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvidere'
import './Subtotal.css'
const Subtotal = () => {
  const[{basket}]=useStateValue();
  
  //second way to get total amount of add to cart items:


  // let total=0;
  //  // eslint-disable-next-line array-callback-return
  //  {  basket.map((item)=>{
  //   total=total+item.price
  // console.log(total)
  //  })}
  return (
    <div className='subtotal'><CurrencyFormat
    renderText={(value) => (
      <>
        <p>
          Subtotal ({basket?.length} items): <strong>{value}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)} 
    // value={total} second way to get total value of add to cart ... 
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
  />

  <button>Proceed to Checkout</button></div>
  )
}

export default Subtotal