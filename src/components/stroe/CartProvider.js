import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItem] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (mealsList) => {
      mealsList.forEach((item, index) => {
          setTotalAmount(totalAmount + Number(item.mealPrice.replace('$','')));
        })
        setItem(mealsList)
    }

    const removeItemFromCartHandler = (id) => {
     
    }

    const cartContext = React.createContext({
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    })

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
