import React from "react";

export default function Stats({ totalItems, totalChecked }) {
  if (totalItems === 0) {
    return (
      <p className="stats">
        <em>Start adding items you plan to take for the trip 🚀</em>
      </p>
    );
  }
  return (
    <footer className="stats">
      You have {totalItems} items on your list, and you already packed{" "}
      {totalChecked}({((totalChecked / totalItems) * 100).toFixed(2)}%)
    </footer>
  );
}
