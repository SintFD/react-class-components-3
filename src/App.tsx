import { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";

export default class App extends Component {
  state: Readonly<{ input: string; search: string }> = {
    input: "",
    search: "London",
  };
  render() {
    return (
      <>
        <label htmlFor="">
          <span>Найти Город: </span>
          <input
            onChange={(e) => {
              this.setState({ input: e.target.value });
            }}
            value={this.state.input}
            type="text"
          />
        </label>
        <button
          onClick={() => {
            this.setState({ search: this.state.input });
          }}
        >
          Search
        </button>
        <Weather city={this.state.search} />
      </>
    );
  }
}
