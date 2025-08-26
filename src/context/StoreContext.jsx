import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});  //cartItem stores the quantity of each item in the cart

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({...prev, [itemId]:1}));
    } else {
      setCartItem((prev) => ({...prev, [itemId]:prev[itemId] + 1}));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]:prev[itemId] - 1}));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product.id === item);
        totalAmount = totalAmount + itemInfo.price * cartItem[item]
      }
    }
    return totalAmount;
  }

  // useEffect(() => {
  //   console.log(cartItem);
  // }, [cartItem]);

  const contextValue = {
    food_list, cartItem, setCartItem, addToCart, removeFromCart, getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;