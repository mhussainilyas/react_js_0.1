import React, { useId } from "react";

const UseIdHook = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />
      <br />
      <br />
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />
    </div>
  );
};

export default UseIdHook;
