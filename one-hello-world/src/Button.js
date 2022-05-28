import React from "react";
import "./style.css";

//equality indicates default value when there is no parameter passed
const Button = ({ title = "Nothing" }) => (
  <div>
    <button class="button">{title}</button>
  </div>
);

export default Button;
