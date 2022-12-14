import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvidere";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
          {basket.map((item)=>(
            <CheckoutProduct id={item.id} price={item.price} image={item.image} title={item.title} rating={item.rating}/> 
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <h2><Subtotal/></h2>
      </div>
    </div>
  );
};

export default Checkout;
