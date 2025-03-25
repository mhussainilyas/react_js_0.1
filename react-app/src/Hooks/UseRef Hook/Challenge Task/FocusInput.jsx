// ============================
//  (1) Accessing DOM Elements
// ============================

import React, { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);
  const handleClick = () => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  };
  return (
    <div>
      <input
        type="text"
        ref={inputElement}
        placeholder="Click the button to focus"
      />
      <button onClick={() => handleClick()}>Get Focus</button>
    </div>
  );
};

export default FocusInput;
