import { Component } from "react";

interface State {
  isActive: boolean;
}

export default class Activity extends Component<{}, State> {
  state: State = {
    isActive: true,
  };

  timeoutId: number = 0;

  handleMouseMove = () => {
    clearTimeout(this.timeoutId);

    this.setState({
      isActive: true,
    });

    this.timeoutId = setTimeout(() => {
      this.setState({ isActive: false });
    }, 5000);
  };

  componentDidMount(): void {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  render() {
    return (
      <>
        {this.state.isActive && <div>Пользователь активен ✅</div>}
        {!this.state.isActive && <div>Пользователь бездействует -.-..zZ</div>}
      </>
    );
  }
}
