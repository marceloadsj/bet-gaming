import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import reduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const history = createHistory();
const middleware = routerMiddleware(history);

let enhancers = applyMiddleware(middleware, reduxThunk);
if (process.env.NODE_ENV === "development") {
  enhancers = composeWithDevTools(enhancers);
}

export { history };
export default createStore(reducers, enhancers);
