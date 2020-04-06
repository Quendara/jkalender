import React, { Component, useState } from "react";
import { render } from "react-dom";
import { Image } from "./Image";
import { Library } from "./Library";
import "./style.css";

const App = () => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const dayMonth = date.getDate();
  const year = date.getFullYear();

  return (
    <div>
      <div>Jonnas Kalender </div>

      <div>        
        {dayMonth}.        
        {year}
      </div>
      <div>
        <Image prefix="d" value={day} />        
        <Image prefix="m" value={month} />
      </div>
      <div>
        <Image prefix="zeit" value="f" />        
        
      </div>

    </div>
  );
};

render(<App />, document.getElementById("root"));
