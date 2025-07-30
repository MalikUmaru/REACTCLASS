import React from "react";
import { useContext } from "react";
import { MealsContext } from "./Providers/MealsProvider";

const MealsList = () => {
  const { meals } = useContext(MealsContext);
  return (
    <div>
      {meals.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default MealsList;
