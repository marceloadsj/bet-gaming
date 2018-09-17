import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const history = createHistory();
const middleware = routerMiddleware(history);

let enhancers = applyMiddleware(middleware);
if (process.env.NODE_ENV === "development") {
  enhancers = composeWithDevTools(enhancers);
}

export { history };
export default createStore(reducers, enhancers);
