import Header from "./components/Layout/Header";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/stroe/CartProvider";

function App() {
  const [open, setOpen] = useState(true);

  const openModal = (show) => {
    setOpen(show);
  };

  return (
    <CartProvider>
      {ReactDOM.createPortal(<Cart open = {open} setCart = {openModal} />, document.getElementById("cart-modal"))}
      <Header openModal={openModal} />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
