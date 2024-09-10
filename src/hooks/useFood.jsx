import { useContext } from "react";
import { FoodContext } from "../context/FoodProvider";

// Hook personalizado para usar el contexto
const useFood = () => {
  const context = useContext(FoodContext);

  if (!context) {
    throw new Error("useFood debe ser usado dentro de un FoodProvider");
  }

  return context;
};

export default useFood;
