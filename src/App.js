import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { hot } from "react-hot-loader";
import { Container } from "reactstrap";
import store, { history } from "./configs/store";
import "./App.css";
import HomePage from "./domains/index/HomePage";
import LoginPage from "./domains/user/LoginPage";
import NotFoundPage from "./domains/index/NotFoundPage";

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Container fluid className="app p-3">
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/(|slot-machine)" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
