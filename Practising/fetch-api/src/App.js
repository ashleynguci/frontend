import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "" };
  }
  Change = ev => {
    this.setState({ name: ev.target.value });
  };
  render() {
    return (
      <div className="App">
        <p> Get out of here, {this.state.name}</p>
        <input type="text" value={this.state.name} onChange={this.Change} />
      </div>
    );
  }
}

export default App;
