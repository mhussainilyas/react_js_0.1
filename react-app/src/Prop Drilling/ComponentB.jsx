// Child Component
import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({ data }) => {
  return (
    <>
      <ComponentC data={data} />
    </>
  );
};

export default ComponentB;
