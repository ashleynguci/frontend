import React, { Component } from "react";
import TodoTable from "./Components/appa";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

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
  deleteFunction = row => {
    // console.dir(this.state.items.filter((item, i) => i != event.target.id));
    this.setState({
      items: this.state.items.filter((item, i) => i != row.index)
      // != not !== because of different type,and event.target.id is string as always
    });
  };
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>TODO TABLE</Toolbar>
        </AppBar>
        <div>
          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>New todo:</legend>

              <TextField
                label="description"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.inputChanged}
              />

              <TextField
                label="date"
                type="date"
                placeholder="dd.mm.yyyy"
                name="date"
                onChange={this.inputChanged}
                value={this.state.date}
                InputLabelProps={{ shrink: true }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                value="Add"
              >
                Add
                <SaveIcon />
              </Button>
            </fieldset>
          </form>
        </div>
        <TodoTable
          items={this.state.items}
          deleteFunction={this.deleteFunction}
        />
      </div>
    );
  }
}

export default App;
