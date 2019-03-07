import React, { Component } from "react";
import "./App.css";
import Navigator from "./Navigator";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigator />
            <Switch>
              <Route exact path="/" render={() => <h1>Welcome</h1>} />
              <Route path="/about" render={() => <h1>About</h1>} />
              <Route path="/contact" render={() => <h1>Contact address</h1>} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
