import React from "react";
import { Data, Data1 } from "./Parent";

const GrandChild = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <div>
                    <p>I am {name}.</p>
                    <p>I am {age} year old.</p>
                  </div>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </>
  );
};

export default GrandChild;
