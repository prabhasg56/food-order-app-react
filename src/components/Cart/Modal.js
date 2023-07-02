import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Modal.css";
import CartContext from "../stroe/cart-context";

const MyModal = ({ openModal }) => {

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    //stop background scrolling
    document.body.style.overflowY = "hidden";

    //background scrolling / cleaner function
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [cartCtx]);

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal">
          {cartCtx._currentValue.items.map((item, index) => {
             return (
              <div className="meals" key={index}>
              <span style={{fontWeight:'bolder'}}>{item.mealTitle}</span>
              <div className="meal-price">
                <span>{item.mealPrice}</span>
                <text className="meal-quantity">{`x${item.quantity}`}</text>
                <button className="remove-btn" onClick={cartCtx._currentValue.removeItem(item.id)}><FontAwesomeIcon icon={faMinus} /></button>
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
                <h3>{`$${cartCtx._currentValue.totalAmount}`}</h3>
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
