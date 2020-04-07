import React, { Component, useState } from "react";
import { render } from "react-dom";
import { Image } from "./Image";
import { Library } from "./Library";
import "./style.css";

function getRandomInt(max) {
  
  return Math.floor(Math.random() * Math.floor(max - 1)) + 2;
}

let daynames = [ 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag','Samstag', 'Sonntag' ]

const App = () => {
  const date = new Date();

  useState();
  const [day, setDay] = useState( date.getDay() );
  const [dayMonth, setDayMonth] = useState( leadingZero( date.getDate(),2 ));
  const [month, setMonth] = useState(date.getMonth() + 1 );
  const [year, setYear] = useState(date.getFullYear());

  const randCal = () => {
    setDay(getRandomInt(7));
    setMonth( (( month + 1 ) % 11 )  );
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

// <!--<Image prefix="" value={digit(dayMonth, 0)} />
//           <Image value={digit(dayMonth, 1)} />-->  

  return (
    <div>
      <div onClick={() => randCal()}>
        <div className="title">Jonna's Kalender</div>
        <div className="subTitle">Das man auch in Corona zeiten nicht das Datum vergisst ;)</div>
      </div>
      <div className="row">
        <div className="col-6  mid-height" >
          
          <Image prefix="d" value="ays"className="absolute" />
          <h1 className="absoluteText" > { daynames[ day-1 ] } </h1>
          
        </div>
        <div className="col-6  mid-height">
          <Image prefix="" value={digit(dayMonth, 0)} />
           <Image value={digit(dayMonth, 1)} />
        </div>
        
      </div>
      <div className="row">
        <div className="col-6  mid-height">
          <Image prefix="m" value={month} />
        </div>
        <div className="col-6  "><Image prefix="zeit" value="f" />  </div>
      </div>
      <div className="row">
        <div className="col-6  mid-height " >
        <p className="mid-height spruch " >Blumenduft weht um die Nase bald kommt schon er Osterhase. </p>
        </div>
        <div className="col-6  mid-height">
          <Image prefix="" value="2020" />
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
