import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

//This is for importing the document
import App from "./App";

//Now in the ReactDOM, we fetch element by id which is root and render APP in it.
//App is a function which is a component in React and so we move used the component notation
ReactDOM.render(<App />, document.getElementById("root"));
