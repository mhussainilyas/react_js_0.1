import React, { useState } from "react";
import ChildComponent01 from "./ChildComponent01";
import ChildComponent02 from "./ChildComponent02";

const ParentComponent = () => {
  // State
  const [count, setCount] = useState(0);
  return (
    <div>
      <ChildComponent01
        count={count}
        onClickHandler={() => setCount(count + 1)}
      />
      <ChildComponent02
        count={count}
        onClickHandler={() => setCount(count + 1)}
      />
    </div>
  );
};

export default ParentComponent;
