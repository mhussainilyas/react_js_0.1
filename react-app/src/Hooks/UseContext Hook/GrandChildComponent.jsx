import React, { useContext } from "react";
import { Data } from "./ParentComponent";

const GrandChildComponent = () => {
  let name = useContext(Data);
  return (
    <>
      <p>
        My name is <b>{name}</b>
      </p>
    </>
  );
};

export default GrandChildComponent;
