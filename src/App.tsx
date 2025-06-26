import { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";
import Timer from "./components/Timer";
import Textarea from "./components/Textarea";

export default class App extends Component {
  state: Readonly<{ input: string; search: string }> = {
    input: "",
    search: "London",
  };
  render() {
    return (
      <>
        <div className="weather">
          <h1>1. Погода по городу</h1>
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
        </div>

        <div>
          <h1>⌛ Таймер реакции</h1>
          <Timer />
        </div>

        <div>
          <h1>💾 Автосохранение заметки</h1>
          <Textarea />
        </div>
      </>
    );
  }
}
