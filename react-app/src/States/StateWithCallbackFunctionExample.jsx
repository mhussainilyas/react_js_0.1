import React, { useState } from "react";

const StateWithCallbackFunctionExample = () => {
  // State
  const [randomNum, setRandomNum] = useState(() => {
    return Math.round(Math.random() * 100);
  });

  // Event Handler
  const generateRandomNumber = () => {
    let newNumber = Math.round(Math.random() * 100);
    setRandomNum(newNumber);
  };

  return (
    <div>
      <p>Random Number: {randomNum}</p>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default StateWithCallbackFunctionExample;
