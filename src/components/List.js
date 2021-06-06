import React from "react";
import ListItem from "./ListItem";
function List({ items, onStateChange }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem item={item} onClick={() => onStateChange(item)} />
      ))}
    </ul>
  );
}

export default List;
