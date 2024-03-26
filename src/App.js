import React, { useCallback, useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  // Passing Function as Props to get the value from the child
  function getItem(currentItem) {
    const { item, totalItems } = currentItem;

    const newItem = {
      id: new Date().toISOString(),
      description: item,
      quantity: totalItems,
      packed: false,
    };
    setItems([...items, newItem]);
  }
  return (
    <div className="app">
      <Logo />
      <Form getItem={getItem} />
      <PackingList items={items} />
      <Stats totalItems={items.length} />
    </div>
  );
}

// We'll require 4 components to build this Application. And it makes life easier to work on each piece separately
