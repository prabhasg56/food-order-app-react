import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./Modal.css";
import CartContext from "../stroe/cart-context";

const MyModal = ({ openModal }) => {
  const cartCtx = useContext(CartContext);

  const totalCartAmount =  cartCtx._currentValue.items.length >0;

  useEffect(() => {
    //stop background scrolling
    document.body.style.overflowY = "hidden";

    //background scrolling / cleaner function
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [cartCtx]);

  const cartItemAddHandler = (item) => {
    cartCtx._currentValue.addItem({ ...item, quantity: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx._currentValue.removeItem(id);
  };

  return (
    <>
      <div className="modal-wrapper">
        <div className="modal">
          {cartCtx._currentValue.items.map((item, index) => {
            return (
              <div className="meals" key={index}>
                <span style={{ fontWeight: "bolder" }}>{item.mealTitle}</span>
                <div className="meal-price">
                  <span>{`$${item.price}`}</span>
                  <text className="meal-quantity">{`x${item.quantity}`}</text>
                  <button
                    className="remove-btn"
                    onClick={cartItemRemoveHandler.bind(null, item.id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <button
                    className="add-btn"
                    onClick={cartItemAddHandler.bind(null, item)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            );
          })}
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
              {totalCartAmount && <button className="btn-order">Order</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyModal;
