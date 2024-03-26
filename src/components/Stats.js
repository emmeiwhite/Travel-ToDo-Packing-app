import React from "react";

export default function Stats({ totalItems, totalChecked }) {
  return (
    <footer className="stats">
      You have {totalItems} items on your list, and you already packed{" "}
      {totalChecked}({((totalChecked / totalItems) * 100).toFixed(2)}%)
    </footer>
  );
}
