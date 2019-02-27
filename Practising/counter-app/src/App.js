import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  addValue = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  removeValue = () => {
    this.setState({
      counter:
        this.state.counter < 0 ? this.state.counter : this.state.counter - 1
    });
  };
/* condition for setState condition ? statement1 : Statement2 */
  reset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <div className="App">
        <p>
          <span>Counter :</span>
          {this.state.counter < 0
            ? "Can not remove, try adding ^_<"
            : this.state.counter}
        </p>
        <button onClick={this.addValue}>Add!</button>
        <button onClick={this.removeValue}>Take 1 out!</button>
        <button onClick={this.reset}>Begin again! </button>
      </div>
    );
  }
}

export default App;
