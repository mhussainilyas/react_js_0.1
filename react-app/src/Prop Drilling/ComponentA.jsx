// Parent Component
import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const data = "Muhammad Hussain";
  return (
    <>
      <ComponentB data={data} />
    </>
  );
};

export default ComponentA;
