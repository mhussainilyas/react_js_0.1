import React, { useState } from "react";

const ShoppingList = () => {
  // States
  const [items, setItems] = useState([]); // array of object
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  // Event Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) {
      return;
    }
    let newItem = {
      name: name,
      quantity: Number.parseInt(quantity),
    };
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1 style={{ fontFamily: "Impact" }}>SHOPPING LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={quantity}
          placeholder="Quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((i) => (
          <li key={Math.random()}>
            {i.name} - Quantity: {i.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
