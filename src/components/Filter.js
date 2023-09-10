  import React, { useState } from "react";

  function Filter({ onCategoryChange, onSearchChange, search}) {
    const[searchValue, setSearchValue] = useState("")



    function handleSearch(e) {
      const searchTxt = e.target.value
      setSearchValue(searchTxt)
      console.log(searchTxt)
      console.log(searchValue)
      onSearchChange(searchTxt)

    }


    return (
      <div className="Filter">
        <input type="text" name="search" placeholder="Search..." onChange={handleSearch} value={search}/>
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    );
  }

  export default Filter;
