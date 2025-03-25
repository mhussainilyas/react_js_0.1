import React, { useRef } from "react";

const UseRefHook = () => {
  // useRef() Hook
  const inputElement = useRef(null);
  console.log(inputElement);

  // Event handler
  const handleClick = () => {
    inputElement.current.focus();
    inputElement.current.value = "Hussain";
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => handleClick()}>Focus & Write Hussain</button>
    </div>
  );
};

export default UseRefHook;
