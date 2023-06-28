import React from "react";
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-title">
          <h2>React Meals</h2>
        </div>

        <div className="cart">
        <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-text">Yore Cart </span>
            <div className="cart-amount">{0}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
