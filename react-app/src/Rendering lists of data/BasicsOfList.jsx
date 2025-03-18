import React from "react";

const BasicsOfList = () => {
  const number = [1, 2, 3, 4, 5, 6, 7];
  return (
    <main>
      <ul>
        {number.map((num) => (
          <li key={Math.random()}>{num}</li>
        ))}
      </ul>
    </main>
  );
};

export default BasicsOfList;
