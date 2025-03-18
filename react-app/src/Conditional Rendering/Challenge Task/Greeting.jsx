import React from "react";

const Greeting = () => {
  let timeOfDay = "morning";
  switch (timeOfDay) {
    case "morning":
      return <p>Good Morning Hussain 🥰</p>;
    case "afternoon":
      return <p>Good Afternoon Hussain 😊</p>;
    case "evening":
      return <p>Good Evening Hussain 😉</p>;
    default:
      return <p>Enter Valid Day Time.</p>;
  }
};

export default Greeting;
