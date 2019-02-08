import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", items: [] };
  }
  inputChange = event => {
    this.setState({ description: event.target.value });
  };
  submitForm = event => {
    event.preventDefault();
    this.setState({ items: [...this.state.items, this.state.description] });
  };
  render() {
    const todos = this.state.items.map((todo, index) => (
      <tr key={index}>
        <td>{todo}</td>
      </tr>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <p>Todo list</p>
        </header>
        <div>
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              value={this.state.description}
              onChange={this.inputChange}
            />
            <input type="submit" value="Add" />
          </form>
        </div>
        <div>
          <table>
            <tbody>{todos}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
