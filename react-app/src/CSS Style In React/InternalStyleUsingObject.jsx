import React from "react";

const InternalStyleUsingObject = () => {
  let styleObj = {
    color: "darkblue",
    backgroundColor: "lightblue",
    textAlign: "center",
    padding: "10px",
    fontFamily: "Impact",
    fontSize: "19px",
  };
  return (
    <>
      <p style={styleObj}>Muhammad Hussain Ilyas</p>
    </>
  );
};

export default InternalStyleUsingObject;
