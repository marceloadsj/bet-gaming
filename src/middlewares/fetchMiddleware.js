import axios from "axios";

export default () => next => async action => {
  next(action);

  if (action.fetchMiddleware) {
    let response;
    try {
      response = await axios({
        method: action.method || "get",
        url: (process.env.REACT_APP_BACKEND_URL || "") + action.url
      });
    } catch (error) {
      next({ type: action.typeFailure, data: error });
      return;
    }

    next({ type: action.typeSuccess, data: response.data });
  }
};
