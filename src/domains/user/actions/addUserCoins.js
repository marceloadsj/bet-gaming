export const USER_ADD_USER_COINS = "USER_ADD_USER_COINS";

export function addUserCoins(coins) {
  return { type: USER_ADD_USER_COINS, coins };
}

export default (state, action) => {
  switch (action.type) {
    case USER_ADD_USER_COINS:
      return {
        ...state,
        coins: state.coins + action.coins
      };

    default:
      return state;
  }
};
