import React from "react";

// Components to be Render based on condition
const ValidPassword = () => <p>Valid Password.</p>;
const InValidPassword = () => <p>Invalid Password.</p>;

// Parent Component
const UsingSwitchstatement = () => {
  return (
    <div>
      <Child isValid={true} />
    </div>
  );
};

// Child component
const Child = ({ isValid }) => {
  switch (isValid) {
    case true:
      return (
        <>
          <ValidPassword />
        </>
      );
    case false:
      return (
        <>
          <InValidPassword />
        </>
      );
    default:
      return (
        <>
          <p>Simple Component.</p>
        </>
      );
  }
};

export default UsingSwitchstatement;
