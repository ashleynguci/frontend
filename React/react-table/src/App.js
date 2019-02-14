import React, { Component } from "react";
import TodoTable from "./Components/TodoTable";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "", description: "", items: [] };
  }

  inputChanged = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // deleteFunction = event => {
  //   console.dir(this.state.items.filter((item, i) => i !== event.target.id));
  //   this.setState({
  //     items: this.state.items.filter((item, i) => i != event.target.id)
  //     // != not !== because of different type,and event.target.id is string as always
  //   });
  // };
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
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.inputChanged}
              />
              Date:
              <input
                type="date"
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
