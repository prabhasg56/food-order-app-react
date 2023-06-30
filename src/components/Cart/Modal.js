import React, { useEffect, useState } from "react";
import "./Cart.css";


const MyModal = ({openModal}) => {

    useEffect(() => {
      //background not scrolling
      document.body.style.overflowY = "hidden";

      //background scrolling
      return () => {
        document.body.style.overflowY = "scroll";
      };
    }, []);

    return (
      <>
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-title">
              <span>Sushi</span>
              <h3>Total Amount</h3>
            </div>
            <div className="cart-value">
              <div>
                <h3>{35.5}</h3>
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