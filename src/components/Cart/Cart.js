import React, { useEffect, useState } from "react";
import MyModal from "./Modal";

const Cart = () => {
  const [open, setOpen] = useState(true);

  const openModal = (show) => {
    setOpen(show);
  };

  return (
    <>
      {/* <button onClick={() => openModal(true)}> Open </button> */}
      {open && <MyModal openModal={openModal} />}
    </>
  );
};

export default Cart;
