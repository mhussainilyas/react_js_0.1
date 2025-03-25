// ======================================
//  (2) Persisting Values Across Renders
// ======================================

import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  // States
  const [count, setCount] = useState(0);
  const timer = useRef(null);

  // Side Effects
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 1000);

    // Clear Function
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div>
      <p>Timer: {count} seconds</p>
      <button onClick={() => clearInterval(timer.current)}>
        Stop Interval
      </button>
    </div>
  );
};

export default Timer;
