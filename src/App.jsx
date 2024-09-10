import Rect, { useState } from "react";
import "./App.css";
import FoodController from "./components/FoodController";
import SearchComponent from "./components/SearchComponent";
import { FoodProvider } from "./context/FoodProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FoodProvider>
        <SearchComponent />
      </FoodProvider>
    </>
  );
}

export default App;
