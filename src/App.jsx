import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Badminton from "./assets/Pages/Badminton";
import Basketball from "./assets/Pages/Basketball";

function App() {
  return (
    <>
      <Basketball />
      <Badminton />
    </>
  );
}

export default App;
