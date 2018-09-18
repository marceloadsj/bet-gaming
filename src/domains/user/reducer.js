import addUserNameReducer from "./actions/addUserName";

const reducers = [addUserNameReducer];

const initialState = {};

export default (state = initialState, action) => {
  return reducers.reduce(
    (newState, reducer) => reducer(newState, action),
    state
  );
};
