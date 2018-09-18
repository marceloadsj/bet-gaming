import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import userReducer from "./domains/user/reducer";

export default combineReducers({
  user: userReducer,
  router: routerReducer
});
