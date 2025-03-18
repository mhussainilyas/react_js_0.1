import React from "react";

const ListWithDestructuring = () => {
  const userList = [
    { id: 1, name: "Hussain", age: 19 },
    { id: 2, name: "Suleman", age: 20 },
    { id: 3, name: "Zaryab", age: 18 },
  ];
  return (
    <div>
      {/* Destructuring */}
      {userList.map(({ id, name, age }) => (
        <ul key={id}>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
        </ul>
      ))}
    </div>
  );
};

export default ListWithDestructuring;
