import React from "react";

const UserStatus = () => {
  let loggedIn = true;
  let isAdmin = false;
  return (
    <>{loggedIn && isAdmin ? <p>Welcome Admin</p> : <p>Welcome User</p>}</>
  );
};

export default UserStatus;
