import React, { useEffect, useState } from "react";
import FoodComponent from "./FoodComponent";
import useFood from "../hooks/useFood";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { foodList, loading } = useFood([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredFoods = foodList.filter((food) => {
    const measuresText = food.measures
      .map((measure) => `${measure.measure} ${measure.portion}`)
      .join(" ");
    return (
      food.name.toLowerCase().includes(searchTerm) ||
      food.category.toLowerCase().includes(searchTerm) ||
      measuresText.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="p-4 mx-auto ">
      <div className="flex justify-between">
        <h1 className="mb-4 text-2xl font-bold">Alimentos</h1>
        <p className="text-lg font-medium text-orange-400">
          smart{" "}
          <span className="pr-1 text-xl font-bold text-blue-700 border-r-8 border-blue-700">
            Bite
          </span>
        </p>
      </div>

      {loading && (
        <p className="p-2 my-3 font-bold bg-amber-200 text-amber-700">
          Cargando datos, porfavor espere...
        </p>
      )}
      <input
        type="text"
        placeholder="Escribe un nombre, categoria o porcion "
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        onChange={handleSearch}
        value={searchTerm}
      />
      <div className="grid h-screen grid-cols-1 gap-4 overflow-y-scroll sm:grid-cols-2 xl:grid-cols-3">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div className="">
              <FoodComponent key={food.id} food={food} />
            </div>
          ))
        ) : (
          <li className="text-gray-500">No se encontro nada</li>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
