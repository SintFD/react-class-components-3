import { Component } from "react";

export default class Textarea extends Component {
  state: Readonly<{ input: string }> = {
    input: "",
  };

  componentDidMount(): void {
    localStorage.getItem("textArea") &&
      this.setState({
        input: localStorage.getItem("textArea"),
      });
  }

  componentDidUpdate(): void {
    localStorage.setItem("textArea", this.state.input);
  }

  render() {
    return (
      <>
        <textarea
          onChange={(e) => {
            this.setState({
              input: e.target.value,
            });
          }}
          rows={20}
          cols={40}
          value={this.state.input}
        ></textarea>
      </>
    );
  }
}
