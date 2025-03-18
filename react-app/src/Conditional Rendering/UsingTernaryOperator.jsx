import React from "react";

// Components to be Render based on condition
const ValidPassword = () => <p>Valid Password.</p>;
const InValidPassword = () => <p>Invalid Password.</p>;

// Parent Component
const UsingTernaryOperator = () => {
  return (
    <div>
      <Child isValid={false} />
    </div>
  );
};

// Child component
const Child = ({ isValid }) => {
  return (
    <section>
      {isValid ? <ValidPassword /> : <InValidPassword />}
    </section>
  );
};

export default UsingTernaryOperator;
