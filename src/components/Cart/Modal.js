import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Modal.css";
import CartContext from "../stroe/cart-context";

const MyModal = ({ openModal }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const cartCtx = useContext(CartContext);


  useEffect(() => {
    //stop background scrolling
    document.body.style.overflowY = "hidden";

  cartCtx._currentValue.items.forEach((item,index) => {
    setTotalAmount(totalAmount + Number(item.mealPrice))
  })
    //background scrolling / cleaner function
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal">
          {cartCtx._currentValue.items.map((item, index) => {
             return (
              <div className="meals" key={item.id}>
              <span style={{fontWeight:'bolder'}}>{item.mealTitle}</span>
              <div className="meal-price">
                <span>{item.mealPrice}</span>
                <text className="meal-quantity">{`x${1}`}</text>
                <button className="remove-btn"><FontAwesomeIcon icon={faMinus} /></button>
                <button className="add-btn"><FontAwesomeIcon icon={faPlus} /></button>
              </div>
            </div>
             )
          })
          }
          <div className="cart-value">
            <div className="total-amount">
              <div>
                <h3>Total Amount</h3>
              </div>
              <div>
                <h3>{totalAmount}</h3>
              </div>
            </div>
            <div className="modal-btn">
              <button className="btn-close" onClick={() => openModal(false)}>
                Close
              </button>
              <button className="btn-order">Order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyModal;
