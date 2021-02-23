import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All")

  function handleCategory(e){
    setCategory(e.target.value)}
    
    
  const displayItem = items.filter((item) => {
    if (category === "All") return item;
    return (item.category === category) ;
    })
   
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
