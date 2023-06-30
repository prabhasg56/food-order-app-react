import React, { useContext } from "react";
import "./AvailableMeals.css";
import CartContext from "../stroe/cart-context";

const meals = [
  {
    id: "m1",
    mealTitle: "Sushi",
    mealDesc: "A german specialty",
    mealPrice: "$123",
  },
  {
    id: "m2",
    mealTitle: "Buger",
    mealDesc: "A german specialty",
    mealPrice: "$123",
  },
  {
    id: "m3",
    mealTitle: "Buger",
    mealDesc: "A german specialty",
    mealPrice: "$123",
  },
  {
    id: "m4",
    mealTitle: "Buger",
    mealDesc: "A german specialty",
    mealPrice: "$123",
  },
  {
    id: "m5",
    mealTitle: "Sushi",
    mealDesc: "A german specialty",
    mealPrice: "$123",
  },
  {
    id: "m6",
    mealTitle: "Sushi",
    mealDesc: "A german specialty",
    mealPrice: "$123",
  },
];

const AvailableMeals = () => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = (meal) => {
    const quantity = document.getElementById('amount_'+meal.id).value;

    cartCtx._currentValue.addItem({...meal, quantity});
  };

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
                <input id={'amount_'+meal.id} defaultValue={1} />
                <div>
                  <button className="btn" onClick={() => addItemToCart(meal)}>
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
