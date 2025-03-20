import React, { useState } from "react";

let userInfo = [
  { id: 1, name: "Hussain", age: 19 },
  { id: 2, name: "Suleman", age: 20 },
  { id: 3, name: "Zaryab", age: 18 },
];

const StateWithArrayOfObjects = () => {
  // State
  const [user, setUser] = useState(userInfo);

  //Event Handler
  const addUser = () => {
    let newUser = { id: 4, name: "Hamid", age: 17 };
    setUser([...user, newUser]);
  };

  const updateUser = () => {
    setUser(
      user.map((u) => {
        return u.id === 1 ? { ...u, name: "Muhammad Hussain" } : u;
      })
    );
  };

  const deleteUser = () => {
    setUser(
      user.filter((u) => {
        return u.id !== 2;
      })
    );
  };

  return (
    <div>
      {user.map(({ id, name, age }) => (
        <ul key={Math.random()}>
          <li>{id}</li>
          <li>{name}</li>
          <li>{age}</li>
        </ul>
      ))}
      <button onClick={addUser}>Add User</button>
      <button onClick={updateUser}>Update User</button>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
};

export default StateWithArrayOfObjects;
