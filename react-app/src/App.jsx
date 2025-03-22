import React from "react";
import { UserContextProvider } from "./Context API/Context API Using UseContext Hook/UserContextProvider";
import UserContextProviderChild from "./Context API/Context API Using UseContext Hook/UserContextProviderChild";
import UpdateUserContextProvider from "./Context API/Context API Using UseContext Hook/UpdateUserContextProvider";

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <UserContextProviderChild />
        <UpdateUserContextProvider />
      </UserContextProvider>
    </div>
  );
};

export default App;
