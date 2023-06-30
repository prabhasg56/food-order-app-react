import React from "react";
import MyModal from "./Modal";

const Cart = (props) => {
  return (
    <>
      {/* <button onClick={() => openModal(true)}> Open </button> */}
      {props.open && <MyModal openModal={props.setCart}/>}
    </>
  );
};

export default Cart;
