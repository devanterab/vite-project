import React, { useState } from "react";

function Basketball() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Basketball Score Counter</h1>
      <div className="card">
        <div>
          <h1>Score is {count}</h1>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>Point +1</button>
        <button onClick={() => setCount((count) => count + 2)}>Point +2</button>
        <button onClick={() => setCount((count) => count + 3)}>Point +3</button>
      </div>
    </div>
  );
}

export default Basketball;
