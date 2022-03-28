import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import List from "/List";

export default function App() {

  const [groceries, setGroceries] = useState(List);

  useEffect(() => {
  });

  return (
    <div>
    </div>
  );
};