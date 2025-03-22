import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  // States
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  // useEffect() Hook

  //   useEffect(() => {
  //     console.log("Call useEffect()");
  //     document.title = `Increment ${value}`;
  //   });

  // useEffect(() => {
  //   console.log("Call useEffect()");
  //   document.title = `Increment ${value}`;
  // }, []);

  //   useEffect(() => {
  //     console.log("Call useEffect()");
  //     document.title = `Increment ${value}`;
  //   }, [value]);

  useEffect(() => {
    console.log("Call useEffect()");
    document.title = `Increment ${value}`;
  }, [value, count]);

  return (
    <div>
      <p>Value: {value}</p>
      <p>Count: {count}</p>
      <button onClick={() => setValue(value + 1)}>Value Increment</button>
      <button onClick={() => setCount(count + 1)}>Count Increment</button>
    </div>
  );
};

export default UseEffectHook;
