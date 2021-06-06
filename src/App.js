import React, { useState, useEffect } from "react";
import List from "./components/List";
//import Movies from "./data.json";

function App() {
  const [keyword, setKeyword] = useState("");
  const [overSeven, setOverSeven] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);
  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }
  function handleOverSevenChange(e) {
    setOverSeven(e.target.checked);
  }
  function filterItems(keyword, overSeven) {
    return movies
      .filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()))
      .filter((item) => (overSeven ? item.rate > 7 : true));
  }

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/bemaxima/fake-api/movies", {})
      .then((response) => response.json())
      .then(
        (response) => setMovies(response.map((m) => ({ ...m, isDone: false }))),
        setLoading(false)
      );
  }, []);
  const data = filterItems(keyword, overSeven)
    .map((item) => ({
      id: item.id,
      text: item.name,
      rate: item.rate,
      state: item.isDone,
    }))
    .filter((item) => item.state === state);
  if (loading) {
    return "please wait ...";
  }
  return (
    <div>
      <div>
        keyword
        <input type="text" value={keyword} onChange={handleKeywordChange} />
        <div>
          over 7
          <input
            type="checkbox"
            checked={overSeven}
            onChange={handleOverSevenChange}
          />
          <br />
          Current state {state ? "done" : "undone"}
          <button onClick={() => setState(true)}> done</button>
          <button onClick={() => setState(false)}>undone</button>
        </div>
      </div>
      <List
        items={data}
        onStateChange={(item) => {
          const newMovies = movies.map((movie) =>
            movie.name === item.text ? { ...movie, isDone: !item.state } : movie
          );
          setMovies(newMovies);
        }}
      />
    </div>
  );
}
export default App;
