import React from "react";

const PropsChild = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.image} alt={props.name} width={300} />
      <h1>{props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Is married: {props.isMarried}</h3>
      <h4>Hobbies: {props.hobbies}</h4>
    </div>
  );
};

export default PropsChild;
