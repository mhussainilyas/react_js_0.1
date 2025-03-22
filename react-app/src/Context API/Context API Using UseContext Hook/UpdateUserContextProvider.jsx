import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "./UserContextProvider";

const UpdateUserContextProvider = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  return (
    <>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">Update Name</button>
      </form>
    </>
  );
};

export default UpdateUserContextProvider;
