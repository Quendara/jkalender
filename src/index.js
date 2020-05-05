import React, { Component, useState } from "react";
import { render } from "react-dom";
import { Image } from "./Image";
import { Library } from "./Library";
import { getRandomInt, ensureMinMax, leadingZero, digit } from "./utils";
import "./style.css";

let daynames = [
  "Montag", // 0
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag"
];

const App = () => {
  const date = new Date();

  const randCal = () => {
    setDay(getRandomInt(7));
    setMonth(ensureMinMax(month + 1, 1, 12));
    setDayMonth(leadingZero(ensureMinMax(getRandomInt(31), 1, 31), 2));
  };

  useState();
  const [day, setDay] = useState(date.getDay());
  const [dayMonth, setDayMonth] = useState(leadingZero(date.getDate(), 2));
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  return (
    <div className="containerFluid">
      <div className="row" onClick={() => randCal()}>
        <div className="col-12">
          <div className="title">Jonna's Kalender</div>
          <div className="subTitle">
            Das man auch in Corona zeiten nicht das Datum vergisst ;)
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-sm-4  mid-height">
          <Image prefix="d" value="ays" className="absolute" />
          <h1 className="absoluteTextDay"> {daynames[day - 1]} </h1>
        </div>
        <div className="col-6  col-sm-4 mid-height">
          <Image prefix="" value={digit(dayMonth, 0)} />
          <Image value={digit(dayMonth, 1)} />
        </div>

        <div className="col-6 col-sm-4  mid-height">
          <Image prefix="m" value={month} />
        </div>
        <div className="col-6 col-sm-4 ">
          <Image prefix="zeit" value="f" />{" "}
        </div>

        <div className="col-6 col-sm-4 mid-height ">
          <p className="mid-height spruch ">
            Träume nicht dein Leben sondern, lebe deine Träume 
          </p>
        </div>
        <div className="col-6 col-sm-4  mid-height ">
          <Image prefix="" value="2020" className="absolute"  />
          <h1 className="absoluteTextYear"> {year} </h1>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
