import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-6xl bg-green-500 p-3 rounded-md">
        Vite With TailWind
      </h1>
      <br></br>

      <h1 className="text-3xl text-yellow-400 p-2 rounded-md">Testing</h1>

      <Card username="Hitesh" post="Software Engineer"/>

      
    </>
  );
}

export default App;
