import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItem] = useState([]);

    const addItemToCartHandler = (item) => {
        setItem([...items, item]);
    }

    const removeItemFromCartHandler = (id) => {}

    const cartContext = React.createContext({
        items: items,
        totalAmount: 0,
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
