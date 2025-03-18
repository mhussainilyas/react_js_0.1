import React from "react";

const UsingLogicalAndOperator = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"];
  return (
    <section>
      <h2>Card Data 🛒</h2>
      {items.length > 0 && <p>You have {items.length} items in your cart.</p>}
      <h3>Your Products</h3>
      <ul>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default UsingLogicalAndOperator;
