import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxLocalStorage from "redux-localstorage";
import fetchMiddleware from "../middlewares/fetchMiddleware";
import reducers from "./reducers";

const history = createHistory();

const connectedReducers = connectRouter(history)(reducers);
const historyMiddleware = routerMiddleware(history);

let enhancers = compose(
  applyMiddleware(reduxThunk, fetchMiddleware, historyMiddleware),
  reduxLocalStorage(null, {
    key: process.env.REACT_APP_LOCALSTORAGE_KEY
  })
);
if (process.env.NODE_ENV === "development") {
  enhancers = composeWithDevTools(enhancers);
}

export { history };
export default createStore(connectedReducers, enhancers);
