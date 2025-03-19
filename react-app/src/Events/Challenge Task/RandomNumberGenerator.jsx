import React from "react";

const RandomNumberGenerator = () => {
  const generateNumber = () => {
    console.log(Math.floor(Math.random() * 100)); 
  };
  return (
    <div>
      <button onClick={generateNumber}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumberGenerator;
