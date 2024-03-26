import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import FlashCard from "./FlashCard";
import FutureDate from "./FutureDate";
import Accordion from "./Accordion";

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

  function handleDelete(id) {
    console.log(id);
    const updatedItems = items.filter((item) => item.id !== id);
    console.log(updatedItems);
    setItems(updatedItems);
  }

  function handleCheck(id) {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form getItem={getItem} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Stats
        totalItems={items.length}
        totalChecked={items.filter((item) => item.packed === true).length}
      />

      <hr />
      <FlashCard />

      <hr />
      <FutureDate />

      <hr />

      <div className="">
        <Accordion />
      </div>
    </div>
  );
}

// We'll require 4 components to build this Application. And it makes life easier to work on each piece separately
