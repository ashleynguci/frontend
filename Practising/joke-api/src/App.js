import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      category: ""
    };
  }
  inputChange = event => {
    event.preventDefault();
    this.setState({ category: event.target.value });
  };
  next = event => {
    event.preventDefault();

    fetch(
      "http://api.icndb.com/jokes/random?limitTo=[" + this.state.category + "]"
    )
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({
          joke: responseData.value.joke,
          category: responseData.value.categories[0]
        });
      });
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChange}
          value={this.state.category}
        />
        <button onClick={this.next}>Wanna more joke?</button>
        <p>
          {this.state.category != "nerdy" && this.state.category != "explicit"
            ? "There is no such category"
            : this.state.category}
        </p>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default App;
