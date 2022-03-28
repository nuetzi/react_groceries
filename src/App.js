import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import List from "./List";

export default function App() {

  const [groceries, setGroceries] = useState(List);

  useEffect(() => {
  });

  return (
    <div>
      <h2>Add to the list:</h2>
      <form>

      </form>
      <div className="completeList">
        {
          groceries.map((each, i) => {
            return (
              each.isPurchased
              ? null
              : <Item props={each} key={i} />
            );
          })
        }
      </div>
    </div>
  );
};