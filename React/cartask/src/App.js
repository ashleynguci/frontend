import React, { Component } from "react";
import "./App.css";
import CarList from "./components/CarList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>CarShop</h2>
        </header>
        <CarList />
      </div>
    );
  }
}

export default App;
