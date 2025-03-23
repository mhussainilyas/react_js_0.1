import React, { useReducer, useState } from "react";

let initialValue = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };
    case "decrementByAmount":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [inputVal, setInputVal] = useState(0);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputVal) });
    setInputVal(0);
  };

  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: +inputVal });
    setInputVal(0);
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <div>
        <input
          type="number"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />{" "}
        <br />
        <br />
        <button onClick={handleIncrementByAmount}>Adding</button>
        <button onClick={handleDecrementByAmount}>Subtracting</button>
      </div>
    </div>
  );
};

export default CounterReducer;
