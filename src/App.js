import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav/Nav";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Post from "./component/Post/Post";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
