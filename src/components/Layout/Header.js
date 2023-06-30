import React from "react";
import "./Header.css";
import mealsImage from '../../assets/meals.jpg'
import MealsSummary from "../Meals/MealsSummary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = ({openModal}) => {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <h2>React Meals</h2>
        </div>

        <button className="cart" onClick={()=>openModal(true)}>
          <span>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <span className="cart-text">
            Yore Cart
          </span>
          <span className="cart-amount">{10}</span>
        </button>
      </header>
      
      <div className="main-image">
          <img  src={mealsImage} alt='A table full of delicious food!'/>
      </div>
      <MealsSummary/>
    </>
  );
};

export default Header;
