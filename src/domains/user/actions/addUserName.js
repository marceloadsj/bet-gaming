export const USER_ADD_USER_NAME = "USER_ADD_USER_NAME";

export function addUserName(name) {
  return { type: USER_ADD_USER_NAME, name };
}

export default (state, action) => {
  switch (action.type) {
    case USER_ADD_USER_NAME:
      return {
        ...state,
        name: action.name
      };

    default:
      return state;
  }
};
