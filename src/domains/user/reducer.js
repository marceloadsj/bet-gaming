import createUser from "./actions/createUser";
import removeUser from "./actions/removeUser";
import spendUserCoin from "./actions/spendUserCoin";
import addUserCoins from "./actions/addUserCoins";

const reducers = [createUser, removeUser, spendUserCoin, addUserCoins];

const initialState = {};

export default (state = initialState, action) => {
  return reducers.reduce(
    (newState, reducer) => reducer(newState, action),
    state
  );
};
