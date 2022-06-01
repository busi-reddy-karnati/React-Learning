import React, { useState } from "react";
import "./App.css";

function App() {
  //[variable, set Method to change the variable name] = useState(default val)
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>Counter app using State</h1>
      </header>
      {/* We can directly mention the state variables */}
      <h1>Current Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
      <button onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  );
}
export default App;
