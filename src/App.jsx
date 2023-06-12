import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Badminton from "./assets/Pages/Badminton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Basketball Score Counter</h1>
      <div className="card">
        <div>
          <h1>Score is {count}</h1>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>Point +1</button>
        <button onClick={() => setCount((count) => count + 2)}>Point +2</button>
        <button onClick={() => setCount((count) => count + 3)}>Point +3</button>
      </div>
      <Badminton />
    </>
  );
}

export default App;
