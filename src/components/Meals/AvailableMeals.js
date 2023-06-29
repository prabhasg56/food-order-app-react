import React from "react";
import "./AvailableMeals.css";

const meals = [
  { mealTitle: "Sushi", mealDesc: "A german specialty", mealPrice: "$123" },
  { mealTitle: "Buger", mealDesc: "A german specialty", mealPrice: "$123" },
  { mealTitle: "Buger", mealDesc: "A german specialty", mealPrice: "$123" },
  { mealTitle: "Buger", mealDesc: "A german specialty", mealPrice: "$123" },
  { mealTitle: "Sushi", mealDesc: "A german specialty", mealPrice: "$123" },
  { mealTitle: "Sushi", mealDesc: "A german specialty", mealPrice: "$123" },
];

const AvailableMeals = () => {
  return (
    <div className="meals-list">
      {meals.map((meal, index) => {
        return (
          <div className="meal">
            <div className="meal-card">
              <div>
                <h3>{meal.mealTitle}</h3>
                <p>{meal.mealDesc}</p>
                <h4>{meal.mealPrice}</h4>
              </div>
              <div className="meal-form">
                <label>Ammount</label>
                <input/>
                <div >
                <button className="btn">+Add</button>
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
