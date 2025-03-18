import React from "react";

const ObjectsWithJSXExpression = () => {
  // Date Object
  let date = new Date();
  let new_date = date.toLocaleDateString();

  // Javascript Object
  let product = {
    name: "Laptop",
    price: 12_000,
    availability: "In Stock",
  };

  return (
    <section>
      <h2>Current Date</h2>
      <p>Date : {new_date}</p>
      <h2>Product Detail</h2>
      <p>Product name: {product.name}</p>
      <p>Product price: ${product.price}</p>
      <p>Product availability: {product.availability}</p>
    </section>
  );
};

export default ObjectsWithJSXExpression;
