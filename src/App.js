import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { hot } from "react-hot-loader";
import store, { history } from "./store";
import HomePage from "./domains/index/HomePage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={HomePage} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
