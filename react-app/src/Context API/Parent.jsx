import React, { createContext } from "react";
import Child from "./Child";

export const Data = createContext();
export const Data1 = createContext();

const Parent = () => {
  const name = "Muhammad Hussain";
  const age = 19;
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <Child />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
};

export default Parent;
