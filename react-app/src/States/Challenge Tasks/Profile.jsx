import React, { useState } from "react";

const Profile = () => {
  // State
  const [profile, setProfile] = useState({
    myName: "",
    myAge: "",
  });

  // Event Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => {
      return { ...prevProfile, [name]: value };
    });
  };
  return (
    <>
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            name="myName" // note: value of name="" should be same as object's property
            value={profile.myName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:{" "}
          <input
            type="number"
            name="myAge" // note: value of name="" should be same as object's property
            value={profile.myAge}
            onChange={handleChange}
          />
        </label>
      </div>
      <h2 style={{ fontFamily: "Impact" }}>PROFILE INFORMATION</h2>
      <p>Name: {profile.myName}</p>
      <p>Age: {profile.myAge}</p>
    </>
  );
};

export default Profile;
