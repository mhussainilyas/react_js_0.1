import React, { useReducer } from "react";

// initial Value
const initialState = { count: 0 };

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  // useReducer() Hook
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Count Value: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default UseReducerHook;
