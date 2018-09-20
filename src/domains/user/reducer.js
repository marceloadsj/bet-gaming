import createUser from "./actions/createUser";
import removeUser from "./actions/removeUser";

const reducers = [createUser, removeUser];

const initialState = {};

export default (state = initialState, action) => {
  return reducers.reduce(
    (newState, reducer) => reducer(newState, action),
    state
  );
};
