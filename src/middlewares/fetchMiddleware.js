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
      next({ type: action.type + "_FAILURE", data: error });
      if (action.reject) action.reject(error);
      return;
    }

    next({ type: action.type + "_SUCCESS", data: response.data });
    if (action.resolve) action.resolve(response.data);
  }
};
