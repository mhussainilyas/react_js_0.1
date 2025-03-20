// 2nd Method

import React from "react";

const ChildComponent02 = ({ count, onClickHandler }) => {
  const handlerClick = () => {
    onClickHandler();
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handlerClick}>Increment</button>
    </div>
  );
};

export default ChildComponent02;
