import React from "react";

const ListWithArrayOfObject = () => {
  const userInfo = [
    {
      name: "Hussain",
      email: "hussain@gmail.com",
      location: "Lahore",
    },
    {
      name: "Shoaib",
      email: "shoaib@gmail.com",
      location: "Faisalabad",
    },
    {
      name: "Ali Hassan",
      email: "alihassan@gmail.com",
      location: "Narowaal",
    },
  ];
  return (
    <section>
      {userInfo.map((user) => (
        <div key={Math.random()}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Location: {user.location}</p>
        </div>
      ))}
    </section>
  );
};

export default ListWithArrayOfObject;
