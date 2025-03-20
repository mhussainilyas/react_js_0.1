// ========================
//   Array CRUD Operation
// ========================

import React, { useState } from "react";

let arr = ["Suleman", "Zaryab", "Hamid"];

const StateWithArrays = () => {
  // State
  const [friends, setFriends] = useState(arr);

  // Event Handlers
  const addFriend = () => setFriends([...friends, "Hussain"]);
  const deleteFriend = () => setFriends(friends.filter((f) => f !== "Hamid"));
  const updateFriend = () => {
    setFriends(
      friends.map((f) => {
        return f === "Hussain" ? "Muhammad Hussain" : f;
      })
    );
  };

  return (
    <div>
      <h2>My Friends</h2>
      <ul>
        {friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}
      </ul>
      <button onClick={addFriend}>Add Friend</button>
      <button onClick={deleteFriend}>Delete Friend</button>
      <button onClick={updateFriend}>Update Friend</button>
    </div>
  );
};

export default StateWithArrays;
