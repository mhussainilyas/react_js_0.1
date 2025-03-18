import React from "react";

const JSXExpression = () => {
  // variable
  let myName = "Muhammad Hussain";
  // Array
  let friends = ["Suleman", "Zaryab", "Hamid", "Faizan"];
  // Special class
  let specialClass = "my-class";
  // Function
  const multiply = (a, b) => {
    return a * b;
  };
  return (
    <div>
      <p>2 + 2 = {2 + 2}</p>
      <p>My name: {myName}</p>
      <p>My friends: {friends}</p>
      <p className={specialClass}>Special Class</p>
      <p>3 * 5 = {multiply(3, 5)}</p>
    </div>
  );
};

export default JSXExpression;
