import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [afterAddItems, setAfterAddItems] = useState(items)
  const [afterSearchItems, setAfterSearchItems] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  function addProduct(newItem){
    setAfterAddItems([...items, newItem])
    console.log(afterAddItems)

  }

  function searchProduct(searchTxt){
    setAfterSearchItems(searchTxt)
    console.log(searchTxt)
  }

  let itemsToDisplay = afterAddItems.filter((item) => {
    if (selectedCategory === "All" && item.name.includes(afterSearchItems) ) return true;

    return item.category === selectedCategory && item.name.includes(afterSearchItems);
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addProduct}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={searchProduct} search={afterSearchItems} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
