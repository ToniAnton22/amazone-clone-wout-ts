import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id,title, image, price, rating }) {
  const [{basket},dispatch] = useStateValue()

  const addTobBasket = () =>{
    //dispatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id,
        title,
        image,
        price,
        rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p> {title}</p>
        <p className="product__price">
          <small> $ </small>
          <strong> {price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick ={addTobBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
