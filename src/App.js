import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav/Nav";
import { Provider } from "react-redux";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Nav />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
