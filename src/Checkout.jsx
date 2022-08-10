import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://blogs-images.forbes.com/eladnatanson/files/2019/03/amazon2-e1553774022915.png"
        />
        <div>
          <h2 className="checkout__title"> Your shopping Basket</h2>
          {/*basket item */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout