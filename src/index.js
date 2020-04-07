import React, { Component, useState } from "react";
import { render } from "react-dom";
import { Image } from "./Image";
import { Library } from "./Library";
import "./style.css";

function getRandomInt(max) {
  
  return Math.floor(Math.random() * Math.floor(max - 1)) + 2;
}

const App = () => {
  const date = new Date();

  useState();
  const [day, setDay] = useState(date.getDay());
  const [dayMonth, setDayMonth] = useState( leadingZero( date.getDate(),2 ));
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const randCal = () => {
    setDay(getRandomInt(7));
    setMonth(getRandomInt(7));
    setDayMonth( leadingZero( getRandomInt( 31 ), 2) );
  };

  function leadingZero(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  const digit = (value, digit) => {
    let ret = "" + value;
    return ret[digit];
  };

  return (
    <div>
      <div onClick={() => randCal()}>
        <b>Jonna's Kalender</b>
        <hr />
      </div>
      <div className="row">
        <div className="col-3  mid-height">
          <Image prefix="d" value={day} />
        </div>
        <div className="col-5  mid-height">
          <Image prefix="" value={digit(dayMonth, 0)} />
          <Image value={digit(dayMonth, 1)} />
        </div>
        <div className="col-3  mid-height">
          <Image prefix="m" value={month} />
        </div>
      </div>
      <div className="row">
        <div className="col-6  mid-height">
          <Image prefix="" value="2020" />
        </div>
        <div className="col-6  "> <p className="mid-height" ><br /> Corona, wir schaffen das ;) </p></div>
      </div>
      <div className="row">
        <div className="col-6  mid-height bg-success" >
        </div>
        <div className="col-6  mid-height">
          <Image prefix="zeit" value="f" />
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
