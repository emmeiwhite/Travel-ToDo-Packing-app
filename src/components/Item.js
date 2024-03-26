import React from "react";

export default function Item({ description, quantity, id, packed }) {
  return (
    <li className={`${packed ? "packed" : ""}`}>
      <span>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}
