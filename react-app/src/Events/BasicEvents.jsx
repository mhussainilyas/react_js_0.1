import React from "react";

const BasicEvents = () => {
  const handleClick = () => {
    alert("You Clicked Me!!!");
  };
  const handleCopy = () => {
    alert("Stop stealing my content 😤");
  };
  const handleMouseMove = () => {
    alert("onMouseMove Event Fires 🎊");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p onCopy={handleCopy}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime
        voluptates provident voluptatem cupiditate natus, temporibus itaque aut
        ratione possimus accusantium dolorum dicta architecto quia velit
        doloremque aliquid ipsam dolorem reiciendis sed quaerat sunt esse!
        Aliquid, ipsam? Voluptatibus eveniet ratione deleniti placeat ullam
        incidunt laborum animi, sit, dolore eligendi dignissimos.
      </p>
      <p onMouseMove={handleMouseMove}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime
        voluptates provident voluptatem cupiditate natus, temporibus itaque aut
        ratione possimus accusantium dolorum dicta architecto quia velit
        doloremque aliquid ipsam dolorem reiciendis sed quaerat sunt esse!
        Aliquid, ipsam? Voluptatibus eveniet ratione deleniti placeat ullam
        incidunt laborum animi, sit, dolore eligendi dignissimos.
      </p>
    </div>
  );
};

export default BasicEvents;
