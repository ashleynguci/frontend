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

  next = event => {
    event.preventDefault();
    fetch("http://api.icndb.com/jokes/random")
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
        <button onClick={this.next}>Wanna more joke?</button>
        <p>{this.state.category}</p>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default App;
