import React, { useState } from "react";
import useFood from "../hooks/useFood";
import PlanElement from "./PlanElement";

const Accordion = () => {
  const { mealList, toCapitalCase } = useFood();

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="border-b">
        <button
          className="flex justify-between w-full p-4 font-medium text-left text-gray-700 hover:bg-gray-200"
          onClick={toggleAccordion}
        >
          Plan Alimenticio
          <p>
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </p>
        </button>
        {isOpen ? (
          mealList.length > 0 ? (
            mealList.map((meal) => (
              <div className="p-4 last-of-type:mb-2">
                <PlanElement key={meal.title} element={meal} />
              </div>
            ))
          ) : (
            <li className="text-gray-500">No se encontro nada</li>
          )
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
