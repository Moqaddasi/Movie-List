import React from "react";
import List from "./components/List";
import Movies from "./data.json";
function App() {
  const data = Movies.map((item) => ({
    id: item.id,
    text: item.name,
    rate: item.rate,
  }));
  return (
    <div>
      <div>
        keyword
        <input type="text" />
        <div>
          over 7
          <input type="checkbox" />
        </div>
      </div>
      <List items={data} />
    </div>
  );
}

export default App;
