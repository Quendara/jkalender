import React, { Component } from "react";
import { render } from "react-dom";
import { Month } from "./Month";
import "./style.css";

const App = () => {
  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
      <Month />
    </div>
  );
};

render(<App />, document.getElementById("root"));
