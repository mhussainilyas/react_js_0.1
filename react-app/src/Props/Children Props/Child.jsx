import React from "react";

// Without Destructuring
const Child = (props) => {
  return (
    <div>
      <p>This is from Child Component</p>
      {props.children}
    </div>
  );
};

// With Destructuring
// const Child = ({ children }) => {
//   return (
//     <div>
//       <p>This is from Child Component</p>
//       {children}
//     </div>
//   );
// };

export default Child;
