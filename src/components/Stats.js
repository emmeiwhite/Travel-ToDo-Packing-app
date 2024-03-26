import React from "react";

export default function Stats({ totalItems }) {
  return (
    <footer className="stats">
      You have {totalItems} items on your list, and you already packed Y(Z%)
    </footer>
  );
}
