import React, { useContext, useEffect, useState } from "react";
import "./AvailableMeals.css";
import CartContext from "../stroe/cart-context";

const meals = [
  {
    id: "m1",
    mealTitle: "Sushi",
    mealDesc: "A german specialty",
    mealPrice: "$23.5",
  },
  {
    id: "m2",
    mealTitle: "Buger A",
    mealDesc: "A german specialty",
    mealPrice: "$13",
  },
  {
    id: "m3",
    mealTitle: "Buger B",
    mealDesc: "A german specialty",
    mealPrice: "$13",
  },
  {
    id: "m4",
    mealTitle: "Buger C",
    mealDesc: "A german specialty",
    mealPrice: "$30",
  },
  {
    id: "m5",
    mealTitle: "Sushi B",
    mealDesc: "A german specialty",
    mealPrice: "$10",
  },
  {
    id: "m6",
    mealTitle: "Sushi A",
    mealDesc: "A german specialty",
    mealPrice: "$43",
  },
];

const AvailableMeals = () => {
  const cartCtx = useContext(CartContext);
  const [cartData, setCartData] = useState([]);

  const addItemToCart = (meal, id) => {
    const quantity = Number(document.getElementById("amount_" + meal.id).value);

    let status = false;
    let newData = [...cartData];

    newData.forEach((value) => {
      if (value.id === id) {
        status = true;
        value.quantity = value.quantity+quantity;
      }
    });
    
    if (status) {
      setCartData(newData);
    } else
      setCartData((prev) => {
        return [...prev, { ...meal, quantity }];
      });
  };
useEffect(()=>{
  cartCtx._currentValue.addItem(cartData);
},[cartData])

  return (
    <div className="meals-list">
      {meals.map((meal, index) => {
        return (
          <div className="meal" key={index}>
            <div className="meal-card">
              <div>
                <h3>{meal.mealTitle}</h3>
                <p>{meal.mealDesc}</p>
                <h4>{meal.mealPrice}</h4>
              </div>
              <div className="meal-form">
                <label>Amount</label>
                <input id={"amount_" + meal.id} defaultValue={1} />
                <div>
                  <button
                    className="btn"
                    onClick={() => addItemToCart(meal, meal.id)}
                  >
                    +Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableMeals;
