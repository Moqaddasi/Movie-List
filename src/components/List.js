import React from "react";
import Listitem from "./Listitem";
function List({ items }) {

  return (
    <ul>
      {items.map((item) => (
        <Listitem key={item.id} text={item.text} rate={item.rate} />
      ))}
    </ul>
  );
}

export default List;
