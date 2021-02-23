import { useState } from "react";
import React from "react";

function Item({ name, category }) {
  const [items, setItems] = useState(false);

  function handleItems(){
    setItems((items)=> !items)
  }
  return (
    <li className={items ? "in-cart" : ""}
    >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleItems}>Add to Cart</button>
    </li>
  );
}

export default Item;
