
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addOne = () => setCount((prev) => prev + 1);

  const reduceOne = () =>
    setCount((prev) => Math.max(0, prev - 1));

  const reset = () => setCount(0);

  const addFive = () => setCount((prev) => prev + 5);

  const reduceFive = () =>
    setCount((prev) => Math.max(0, prev - 5));

  return (
    <main className="app">
      <section className="counter-box">
        <p className="subtitle">REACT PROJECT</p>

        <h1>Counter App</h1>

        <p className="description">
          Simple. Smooth. Powerful.
        </p>

        <div className="count-display">{count}</div>

        <div className="buttons">
          <button className="add" onClick={addOne}>
            +1
          </button>

          <button className="reduce" onClick={reduceOne}>
            -1
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>

          <button className="add-five" onClick={addFive}>
            +5
          </button>

          <button className="reduce-five" onClick={reduceFive}>
            -5
          </button>
        </div>

        <p className="footer">Built with React</p>
      </section>
    </main>
  );
}

export default App;
