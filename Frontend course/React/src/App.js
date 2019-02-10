import React, { Component } from "react";
import TodoTable from "./TodoTable";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "", description: "", items: [] };
  }
  inputChange = event => {
    this.setState({
      description: event.target.value,
      date: event.target.value
    });
  };
  inputChanged = event => {
    this.setState({
      date: event.target.value
    });
  };
  submitForm = event => {
    event.preventDefault();
    const newTodo = {
      description: this.state.description,
      date: this.state.date
    };
    this.setState({
      date: "",
      description: "",
      items: [...this.state.items, newTodo]
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Todo list</p>
        </header>
        <div>
          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>New todo:</legend>
              Description:
              <input
                type="text"
                value={this.state.description}
                onChange={this.inputChange}
              />
              Date:
              <input
                type="text"
                placeholder="dd.mm.yyyy"
                name="date"
                onChange={this.inputChanged}
                value={this.state.date}
              />
              <input type="submit" value="Add" />
            </fieldset>
          </form>
        </div>

        <TodoTable items={this.state.items} />
      </div>
    );
  }
}

export default App;
