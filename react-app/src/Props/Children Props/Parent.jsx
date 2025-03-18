import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <Child>
        <h2>My Card</h2>
        <p>This is some content for card.</p>
      </Child>
    </div>
  );
};

export default Parent;
