import Rect, { useState } from "react";
import "./App.css";
import { FoodProvider } from "./context/FoodProvider";
import MainComponent from "./components/MainComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FoodProvider>
        <MainComponent />
      </FoodProvider>
    </>
  );
}

export default App;
