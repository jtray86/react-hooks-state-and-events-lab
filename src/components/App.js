import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setMode] = useState(true)
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleDarkMode(){
    setMode((mode) => !mode)
    console.log(mode)
  }

  return (
    <div className={mode ? "App light" : "App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
