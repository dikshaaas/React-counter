import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>

      <p className="count">{count}</p>

      {count > 0 && <p>Positive</p>}
      {count < 0 && <p>Negative</p>}
      {count === 0 && <p>Zero</p>}

      <div className="buttons">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
