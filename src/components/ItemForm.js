import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const[inputsValue, setInputValues] = useState({
    category : "Produce"
  })


  function handleInputs(e) {
    const productKey = e.target.name;
    const productValue = e.target.value;

    setInputValues({...inputsValue, 
    [productKey]: productValue,
      })
  }
  console.log(inputsValue)


  function HandleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: inputsValue["name"],
      category: inputsValue["category"],
    };

    props.onItemFormSubmit(newItem)

    setInputValues({
    id :"",
    name: "",
    category: "Produce"
    })
    console.log(newItem)
  }

  

  return (
    <form className="NewItem" onSubmit={HandleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputs}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleInputs}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>

    
  );

}

export default ItemForm;
