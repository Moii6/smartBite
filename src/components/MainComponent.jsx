import React from "react";
import SearchComponent from "./SearchComponent";
import Plancomponent from "./PlanComponent";
import useFood from "../hooks/useFood";

const MainComponent = () => {
  const { loading } = useFood();
  return (
    <div className="">
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
          Cargando datos, esto podria tomar varios minutos
        </p>
      )}
      <Plancomponent />
      <SearchComponent />
    </div>
  );
};

export default MainComponent;
