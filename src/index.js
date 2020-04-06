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
      <div>
        <b>Jonna's Kalender</b>
        <hr />
      </div>
      <div className="row">
        <div className="col-3  mid-height"> 
          <Image prefix="d" value="1" />
        </div>
        <div className="col-5  mid-height">
          <Image prefix="" value="0" />
          <Image value="6" />
        </div> 
        <div className="col-3  mid-height">
          <Image prefix="m" value="4" />
        </div>
      </div>
      <div className="row">
        <div className="col-6  mid-height">
          <Image prefix="" value="2020" />
        </div>
        <div className="col-6  mid-height">Corona, überleben wir ;)</div>
      </div>
      <div className="row">
        <div className="col-6  mid-height" /> 
        <div className="col-6  mid-height">
          <Image prefix="zeit" value="f" />
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
