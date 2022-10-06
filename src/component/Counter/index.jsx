import { useState } from "react";
import "./index.css";

function Counter() {
  // let counter1 = 0;
  const [counter, setCounter] = useState(0);
  // value 1/index 0 = untuk memanggil nilai di dalam variabel
  // value 2/index 1 = untuk merubah nilai di dalam variable tsb

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container d-flex counter-container justify-content-between">
      <p className="fw-bold">Quantity</p>
      <div className="d-flex">
        <button className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <p className="counter-number">{counter}</p>

        <button className="btn btn-primary" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
