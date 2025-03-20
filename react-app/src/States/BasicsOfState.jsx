import React, { useState } from "react";

const BasicsOfState = () => {
  // State
  const [count, setCount] = useState(0);

  // Event Handler
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default BasicsOfState;
