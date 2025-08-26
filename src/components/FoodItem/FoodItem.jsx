import React, { useState } from 'react'
import "./FoodItem.css";
import { assets } from '../../assets/frontend_assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {

  const [itemCount, setItemCount] = useState(0);
  const {cartItem, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='foodItem'>
      <div className='foodItem-image-container'>
        <img src={image} alt='' className='foodItem-image' />
        {
          !cartItem[id]
          ? <img className='add' src={assets.add_icon_white} onClick={() => addToCart(id)} />
          : <div className='food-item-counter'>
            <img src={assets.remove_icon_red} alt='' onClick={() => removeFromCart(id)} />
            <p>{cartItem[id]}</p>
            <img src={assets.add_icon_green} alt='' onClick={() => addToCart(id)} />
          </div>
        }
      </div>
      <div className='foodItem-info'>
        <div className='foodItem-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
        <p className='foodItem-description'>{description}</p>
        <p className='foodItem-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
