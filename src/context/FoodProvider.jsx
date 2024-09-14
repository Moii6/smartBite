import React, { createContext, useEffect, useState } from "react";

const FoodContext = createContext();
const FoodProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Puedes agregar funciones y valores que deseas compartir
  const fillFoodList = (list) => {
    setFoodList(list);
  };

  const toCapitalCase = (str) => {
    return str
      .split(" ") // Divide la cadena en un array de palabras
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + // Convierte la primera letra a mayúscula
          word.slice(1).toLowerCase() // Convierte el resto de las letras a minúscula
      )
      .join(" "); // Une las palabras de nuevo en una cadena
  };

  const getLocalStorage = () => {
    const lSFoods = localStorage.getItem("foods");
    lSFoods && setFoodList(JSON.parse(lSFoods));
    const lSMeals = localStorage.getItem("meals");
    lSMeals && setMealList(JSON.parse(lSMeals));
  };

  useEffect(() => {
    getLocalStorage();
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_SERVER_URL}/foods`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setFoodList(data);
      });
    fetch(`${import.meta.env.VITE_API_SERVER_URL}/meals`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setMealList(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    foodList && localStorage.setItem("foods", JSON.stringify(foodList));
    mealList && localStorage.setItem("meals", JSON.stringify(mealList));
  }, [foodList, mealList]);

  return (
    <FoodContext.Provider
      value={{ foodList, loading, mealList, fillFoodList, toCapitalCase }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export { FoodProvider, FoodContext };
