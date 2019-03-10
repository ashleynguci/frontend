import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "", name1: "" };
  }
  Change = ev => {
    this.setState({ name1: ev.target.value });
  };
  showFunction = event => {
    event.preventDefault();
    this.setState({ name: this.state.name1 });
  };
  render() {
    return (
      <div className="App">
        <p> Get out of here, {this.state.name}</p>

        <input type="text" value={this.state.name1} onChange={this.Change} />
        <button type="submit" onClick={this.showFunction}>
          Clickme
        </button>
      </div>
    );
  }
}

export default App;
