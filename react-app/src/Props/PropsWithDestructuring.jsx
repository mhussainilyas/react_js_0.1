import React from "react";

// parent Component
const PropsWithDestructuring = () => {
  return (
    <div>
      <ChildComponent name="Hussain" age={19} location="Lahore" />
    </div>
  );
};

// Child Component
// Props Destructuring
const ChildComponent = ({ name, age, location }) => {
  return (
    <section>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Age: {age}</p>
    </section>
  );
};

export default PropsWithDestructuring;
