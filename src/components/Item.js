import React from "react";

export default function Item({
  description,
  quantity,
  id,
  packed,
  handleDelete,
  handleCheck,
}) {
  return (
    <li className={`${packed ? "packed" : ""}`}>
      <input
        type="checkbox"
        value={packed}
        onChange={() => handleCheck(id)}
      />
      <span>
        {quantity} {description}
      </span>
      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
  );
}
