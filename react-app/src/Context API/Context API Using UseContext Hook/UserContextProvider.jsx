import React from "react";
import { createContext, useState } from "react";

// Creating Context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // State
  const [user, setUser] = useState({ name: "Hussain" });
  // Function
  const updateUser = (newName) => {
    setUser({ name: newName });
  };
  return (
    <>
      <UserContext.Provider value={{ user, updateUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export { UserContext, UserContextProvider };
