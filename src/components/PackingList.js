import React from "react";
import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];
export default function PackingList({ items }) {
  const listItems = items.map((item) => (
    <Item
      {...item}
      key={item.id}
    />
  ));

  return (
    <div className="list">
      <ul>{listItems}</ul>
    </div>
  );
}
