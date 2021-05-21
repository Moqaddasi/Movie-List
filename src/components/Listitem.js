import React from "react";

function Listitem({ img, text, rate }) {
  return <li>{`${text}, ${rate}`}</li>;
}

export default Listitem;
