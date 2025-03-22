// The useState hook is a fundamental part of React that allows you to add state to functional components. It enables you to create state variables that can be updated and trigger re-renders of your component.

import React, { useState } from "react";

const UseStateHook = () => {
  const [name, setName] = useState("Hussain");
  return (
    <div>
      <p>Your Name: {name}</p>
      <button onClick={() => setName("Muhammad Hussain")}>Update Name</button>
    </div>
  );
};

export default UseStateHook;
