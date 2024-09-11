import React, { useEffect, useState } from "react";
import useFood from "../hooks/useFood";

const FoodComponent = ({ food }) => {
  const { toCapitalCase } = useFood();

  return (
    <div
      className={`flex justify-between  gap-1 p-4 border-2 rounded`}
      style={{
        backgroundColor:
          food.category === "verdura"
            ? "#bbf7d0"
            : food.category === "cereal"
            ? "#bae6fd"
            : food.category === "fruta"
            ? "#fed7aa"
            : food.category === "proteina"
            ? "#fecaca"
            : food.category === "grasa"
            ? "#fde68a"
            : food.category === "grasa con proteina"
            ? "#e9d5ff"
            : food.category === "leguminosas"
            ? "#c7d2fe"
            : "#e5e5e5",
        borderColor:
          food.category === "verdura"
            ? "#22c55e"
            : food.category === "cereal"
            ? "#0ea5e9"
            : food.category === "fruta"
            ? "#f97316"
            : food.category === "proteina"
            ? "#ef4444"
            : food.category === "grasa"
            ? "#f59e0b"
            : food.category === "grasa con proteina"
            ? "#a855f7"
            : food.category === "leguminosas"
            ? "#6366f1"
            : "#737373",
      }}
    >
      <div className="">
        <h2 className="text-3xl md:text-md">{toCapitalCase(food.name)}</h2>
        <p className="text-xs text-gray-500">{food.category}</p>
      </div>
      <div className="flex flex-col items-center ">
        {food.measures.length > 0 ? (
          food.measures.map((item) => (
            <div key={item.id} className="flex items-center gap-2 ">
              <p>{item.portion}</p>
              <p>{item.measure}</p>
            </div>
          ))
        ) : (
          <p>No hay medidas</p>
        )}
      </div>
    </div>
  );
};

export default FoodComponent;
