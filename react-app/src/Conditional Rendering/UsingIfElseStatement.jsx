import React from "react";

// Components to be Render based on condition
const ValidPassword = () => <p>Valid Password.</p>;
const InValidPassword = () => <p>Invalid Password.</p>;

// Parent Component
const UsingIfElseStatement = () => {
  return (
    <div>
      <Child isValid={false} />
    </div>
  );
};

// Child component
const Child = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  } else {
    return <InValidPassword />;
  }
};

export default UsingIfElseStatement;
