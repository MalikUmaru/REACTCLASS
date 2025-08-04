import React from "react";
import { useContext } from "react";
import { MealsContext } from "./Providers/MealsProvider";

const MealsList = () => {
  const { meals } = useContext(MealsContext);
  return (
    <div>
      {meals.map((item, index) => (
        <ul>
        <li key={index}>
            {item}
            </li>
            </ul>
      ))}
    </div>
  );
};

export default MealsList;
