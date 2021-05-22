import React from "react";
import List from "./components/List";
import Movies from "./data.json";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleOverSevenChange = this.handleOverSevenChange.bind(this);
    this.state = {
      keyword: "",
      overSeven: false,
    };
  }
  handleKeywordChange(e) {
    this.setState({ keyword: e.target.value });
  }
  handleOverSevenChange(e) {
    this.setState({ overSeven: e.target.checked });
  }
  render() {
    const { keyword, overSeven } = this.state;
    const data = Movies.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    )
      .filter((item) => (overSeven ? item.rate > 7 : true))
      .map((item) => ({
        id: item.id,
        text: item.name,
        rate: item.rate,
      }));
    return (
      <div>
        <div>
          keyword
          <input
            type="text"
            value={keyword}
            onChange={this.handleKeywordChange}
          />
          <div>
            over 7
            <input
              type="checkbox"
              checked={overSeven}
              onChange={this.handleOverSevenChange}
            />
          </div>
        </div>
        <List items={data} />
      </div>
    );
  }
}

export default App;
