import React, { useEffect, useState } from "react";

const FoodController = () => {
  const [foodList, setFoodList] = useState([]);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">
        Alimntos <span>smart bite</span>
      </h1>
      <p>smartBite</p>
      <ul>
        {foodList.map((food) => (
          <li key={food.id} className="p-4 mb-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{food.name}</h2>
            <p>{food.description != "N/A" && food.description}</p>
            <p>{food.category}</p>
            {food.measures.map((meas) => (
              <>
                <p>
                  {meas.portion} <span>{meas.measure}</span>
                </p>
              </>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodController;
