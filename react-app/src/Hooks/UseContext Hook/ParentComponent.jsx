import React, { createContext } from "react";
import ChildComponent from "./ChildComponent";

export const Data = createContext();

const ParentComponent = () => {
  let name = "Muhammad Hussain";
  return (
    <>
      <Data.Provider value={name}>
        <ChildComponent />
      </Data.Provider>
    </>
  );
};

export default ParentComponent;
