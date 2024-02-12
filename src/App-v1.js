import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";
import "./styles.css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleCheckedItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function clearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems((items) => []);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onCheckedItem={handleCheckedItem} onClearList={clearList} />
      <Stats items={items} />
    </div>
  );
}
