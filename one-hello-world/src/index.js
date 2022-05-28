import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button className="button">Hi</button>
    </div>
  );
}

//Now in the ReactDOM, we fetch element by id which is root and render APP in it.
//App is a function which is a component in React and so we move used the component notation
ReactDOM.render(<App />, document.getElementById("root"));
