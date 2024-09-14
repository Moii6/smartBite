import React from "react";
import useFood from "../hooks/useFood";

const PlanElement = ({ element }) => {
  const { toCapitalCase } = useFood();
  const {
    title,
    verdura,
    fruta,
    cereal,
    proteina,
    grasa,
    grasaP,
    leguminosas,
    notes,
  } = element;
  return (
    <div className="flex flex-col pb-2 border-b-2 border-gray-400">
      <h1 className="mb-2 font-bold text-md">{toCapitalCase(title)}</h1>
      <div className="flex gap-2 ">
        {verdura > 0 && (
          <p className="inline-block px-1 text-center bg-green-200 border-2 border-green-500 rounded ">
            Verdura {verdura}
          </p>
        )}
        {fruta > 0 && (
          <p className="inline-block px-1 text-center bg-orange-200 border-2 border-orange-500 rounded">
            Fruta {fruta}
          </p>
        )}
        {cereal > 0 && (
          <p className="inline-block px-1 text-center border-2 rounded border-sky-500 bg-sky-200">
            Cereal {cereal}
          </p>
        )}
        {proteina > 0 && (
          <p className="inline-block px-1 text-center bg-red-200 border-2 border-red-500 rounded">
            Proteina {proteina}
          </p>
        )}
        {grasa > 0 && (
          <p className="inline-block px-1 text-center border-2 rounded border-amber-500 bg-amber-200">
            Grasa {grasa}
          </p>
        )}
        {grasaP > 0 && (
          <p className="inline-block px-1 text-center bg-purple-200 border-2 border-purple-500 rounded">
            Grasa con proteina {grasaP}
          </p>
        )}
        {leguminosas > 0 && <p>Leguminosas {leguminosas}</p>}
      </div>
      {notes && (
        <p className="mt-2">
          <span className="text-lg ">Comentarios</span> {notes}
        </p>
      )}
    </div>
  );
};

export default PlanElement;
