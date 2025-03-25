import React, { useRef } from "react";

const Counter = () => {
  const count = useRef(0);
  const handleClick = () => {
    count.current += 1;
    console.log(count.current);
  };
  return (
    <div>
      <p>See console for checking output</p>
      <button onClick={() => handleClick()}>Update Count</button>
    </div>
  );
};

export default Counter;
