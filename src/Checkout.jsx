import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://blogs-images.forbes.com/eladnatanson/files/2019/03/amazon2-e1553774022915.png"
        />
        <div>
          <h2 className="checkout__title"> Your shopping Basket</h2>
          {basket.map(item =>(
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}/>
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout