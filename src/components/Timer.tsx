import { Component } from "react";

interface State {
  result: null | number;
  buttonIsVisible: boolean;
  firstTime: number;
}

export default class Timer extends Component<{}, State> {
  state: Readonly<State> = {
    result: null,
    buttonIsVisible: false,
    firstTime: 0,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ buttonIsVisible: true });
      this.setState({ firstTime: performance.now() });
    }, Math.floor(Math.random() * 3000) + 2000);
  }

  render() {
    return (
      <>
        {(this.state.buttonIsVisible && (
          <button
            onClick={() => {
              this.setState((prev) => ({
                result: performance.now() - prev.firstTime,
              }));
            }}
          >
            Нажми сейчас!
          </button>
        )) || <div>Жди...</div>}
        {this.state.result && (
          <div>
            {" "}
            Вы отреагировали за: {Math.floor(this.state.result)} миллисекунды!!!
          </div>
        )}
      </>
    );
  }
}
