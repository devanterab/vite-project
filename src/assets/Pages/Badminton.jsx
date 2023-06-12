import React from "react";
import { useState } from "react";

function Badminton() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <>
      <h1>Badminton Score Counter</h1>
      <div className="card">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: 30 }}>
            <h1>Score A {count}</h1>
          </div>
          <div>
            <h1>Score B {countB}</h1>
          </div>
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          Point +1 for A
        </button>
        <button onClick={() => setCountB((countB) => countB + 1)}>
          Point +1 for B
        </button>
      </div>
    </>
  );
}

export default Badminton;
