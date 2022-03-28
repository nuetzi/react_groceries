import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import List from "./List";

export default function App() {

  const [groceries, setGroceries] = useState(List);

  const addItem = () => {
    setGroceries(groceries.concat([{
      item: document.querySelector("input[name=item]").value,
      brand: document.querySelector("input[name=brand]").value,
      units: document.querySelector("input[name=units]").value,
      quantity: document.querySelector("input[name=quantity]").value,
      isPurchased: false
    }]));
  };

  useEffect(() => {
    document.querySelector("#submit").addEventListener("click", addItem);
  });

  return (
    <div className="main">
      <h3>Add to the list:</h3>
      <form>
        Item: <input type="text" name="item" /> <br/>
        Brand: <input type="text" name="brand" /> <br/>
        Units: <input type="text" name="units" /> <br/>
        Quantity: <input type="text" name="quantity" /> <br/>       
        <input type="submit" value="Add Item" id="submit" />
      </form>
      <br/> <br/> <br/> <br/>
      <div className="completeList">
        {
          groceries.map((each, i) => {
            return (
              each.isPurchased
              ? null
              : <Item key={i}
                item={each.item}
                brand={each.brand}
                units={each.units}
                quantity={each.quantity}
                />
            );
          })
        }
      </div>

    </div>
  );
};