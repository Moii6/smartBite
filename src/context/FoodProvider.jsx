import React, { createContext, useEffect, useState } from "react";

const FoodContext = createContext();
const FoodProvider = ({ children }) => {
  const [foodList, setFoodList] = useState([]);

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

  useEffect(() => {
    fetch("http://localhost:4000/foods")
      .then((response) => response.json())
      .then((data) => {
        setFoodList(data);
      });
  }, []);

  return (
    <FoodContext.Provider value={{ foodList, fillFoodList, toCapitalCase }}>
      {children}
    </FoodContext.Provider>
  );
};

export { FoodProvider, FoodContext };
