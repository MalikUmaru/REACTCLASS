import React from 'react';
import { createContext } from 'react';

//making the component a conrtext provider
export const MealsContext = createContext(); 

//the context to be provided
const Meals = [
    "Amala & Ewedu",
    "Offada Rice",
    "Pounded Yam & Egusi",
    "Chicken Pepper Soup",
    "Moi Moi",
    "Yam Potrage",
    "White Rice and Stew",
    "Naija Jollof",
    "Bread & Fried Fish"
]

const MealsProvider =({children})=>{
    const [meals, setMeals] = React.useState(Meals)
    return(
        <MealsContext.Provider value={{meals, setMeals}}>
            {children}
        </MealsContext.Provider>
    )
}

export default MealsProvider;