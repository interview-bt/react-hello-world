import React from "react";
import "./index.css";

import ListItem from "./ListItem";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ListItem key="1" text="ListItem1" />
        <ListItem key="2" text="ListItem2" />
      </nav>
    </div>
  );
}