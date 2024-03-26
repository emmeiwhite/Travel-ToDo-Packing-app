import React, { useState } from "react";

export default function Form({ getItem }) {
  const [item, setItem] = useState("");
  const [totalItems, setTotalItems] = useState(1);

  // Controlled Form Elements
  const handleTextChange = (e) => {
    setItem(e.target.value);
  };

  const handleItemChange = (e) => {
    setTotalItems(Number(e.target.value));
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form values to the parent to be added to the List
    if (item && totalItems) {
      getItem({
        item,
        totalItems,
      });

      setItem("");
      setTotalItems(1);
    } else {
      return;
    }
  };

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your 😍 trip</h3>
      <select
        value={totalItems}
        onChange={handleItemChange}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option
            value={num}
            key={num}
          >
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={item}
        onChange={handleTextChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
