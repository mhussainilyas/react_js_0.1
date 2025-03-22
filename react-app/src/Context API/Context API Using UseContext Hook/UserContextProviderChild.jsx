import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

const UserContextProviderChild = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>User Profile</h2>
      <p>User Name: {user.name}</p>
    </div>
  );
};

export default UserContextProviderChild;
