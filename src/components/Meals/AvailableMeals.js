import React from 'react';
import './AvailableMeals.css';

const meals = [
    {mealTitle: "Sushi", mealDesc: "abc", mealPrice: "$123"},
    {mealTitle: "Sushi", mealDesc: "abc", mealPrice: "$123"},
    {mealTitle: "Sushi", mealDesc: "abc", mealPrice: "$123"},
    {mealTitle: "Sushi", mealDesc: "abc", mealPrice: "$123"},
]

const AvailableMeals = () => {
  return (
    <div className='meals-list'>
        <div className='meal'>
            {
                meals.map((meal, index) => {
                    return (
                        <div>
                            <h3>{meal.mealTitle}</h3>
                            <p>{meal.mealDesc}</p>
                            <h4>{meal.mealPrice}</h4>
                        </div>
                    )
                })
            }
        </div>
       
    </div>
  )
}

export default AvailableMeals
