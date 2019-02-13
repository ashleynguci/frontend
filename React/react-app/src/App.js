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
      description: event.target.value
    });
  };
  inputChanged = event => {
    this.setState({
      date: event.target.value
    });
  };
  deleteFunction = event => {
    console.dir(this.state.items.filter((item, i) => i !== event.target.id));
    this.setState({
      items: this.state.items.filter((item, i) => i != event.target.id)
      // != not !== because of different type,and event.target.id is string as always
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
        <table style={{ alignItems: "center" }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>
                  <input
                    id={index}
                    type="button"
                    value="Delete"
                    onClick={this.deleteFunction}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
