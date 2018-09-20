export const USER_REMOVE_USER = "USER_REMOVE_USER";

export function removeUser(user) {
  return { type: USER_REMOVE_USER, user };
}

export default (state, action) => {
  switch (action.type) {
    case USER_REMOVE_USER:
      return {};

    default:
      return state;
  }
};
