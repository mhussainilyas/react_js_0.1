import React from "react";

const Weather = () => {
  let temp = 56;
  if (temp < 15) {
    return <p>It's cold outside.</p>;
  } else if (temp >= 15 && temp <= 25) {
    return <p>It's nice outside.</p>;
  } else if (temp > 25) {
    return <p>It's hot outside.</p>;
  } else {
    return <p>Enter valid temprature.</p>;
  }
};

export default Weather;
