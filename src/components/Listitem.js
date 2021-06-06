import React from "react";

function ListItem({ item, onClick }) {
  return (
    <li>
      {`${item.text}, ${item.rate}`}
      <div onClick={onClick}>
        <button> {item.state ? "undone" : "done"}</button>
      </div>
    </li>
  );
}

export default ListItem;
