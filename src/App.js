import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import List from "./List";

export default function App() {

  const [groceries, setGroceries] = useState(List);

  const addItem = 

  useEffect(() => {
  });

  return (
    <div>
      <h2>Add to the list:</h2>
      <form>
        Item: <input type="text" name="item" /> <br/>
        Brand: <input type="text" name="brand" /> <br/>
        Units: <input type="text" name="units" /> <br/>
        Quantity: <input type="text" name="quantity" /> <br/>       
        <input type="submit" value="Add Item" id="submit" />
      </form>

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