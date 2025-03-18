import React from "react";
import PropsChild from "./PropsChild";

const PropsParent = () => {
  return (
    <div>
      <p>This is Props Parent Component.</p>
      <PropsChild
        image="https://images6.alphacoders.com/430/430889.jpg"
        name="Muhammad Hussain"
        age={19}
        isMarried={false}
        hobbies={["Coding", "Reading", "Sleeping"]}
      />
    </div>
  );
};

export default PropsParent;
