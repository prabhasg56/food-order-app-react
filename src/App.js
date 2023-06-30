import Header from "./components/Layout/Header";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";

function App() {
  const [open, setOpen] = useState(true);

  const openModal = (show) => {
    setOpen(show);
  };

  return (
    <>
      {ReactDOM.createPortal(<Cart open = {open} setCart = {openModal} />, document.getElementById("cart-modal"))}
      <Header openModal={openModal} />
      <AvailableMeals />
    </>
  );
}

export default App;
