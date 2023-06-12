import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Badminton from "./assets/Pages/Badminton";
import Basketball from "./assets/Pages/Basketball";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Basketball />
      <Badminton />
    </>
  );
}

export default App;
