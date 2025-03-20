// 1st Method

import React from "react";

const ChildComponent01 = ({ count, onClickHandler }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => onClickHandler()}>Increment</button>
    </div>
  );
};

export default ChildComponent01;
