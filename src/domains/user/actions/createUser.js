import { INITIAL_USER_COINS } from "../constants";

export const USER_CREATE_USER = "USER_CREATE_USER";

export function createUser(user) {
  return { type: USER_CREATE_USER, user };
}

export default (state, action) => {
  switch (action.type) {
    case USER_CREATE_USER:
      return {
        ...state,
        ...action.user,
        coins: INITIAL_USER_COINS
      };

    default:
      return state;
  }
};
