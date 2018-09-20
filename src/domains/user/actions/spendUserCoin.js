import { SPIN_COIN_PRICE } from "../constants";

export const USER_SPEND_USER_COIN = "USER_SPEND_USER_COIN";

export function spendUserCoin() {
  return { type: USER_SPEND_USER_COIN };
}

export default (state, action) => {
  switch (action.type) {
    case USER_SPEND_USER_COIN:
      return {
        ...state,
        coins: state.coins - SPIN_COIN_PRICE
      };

    default:
      return state;
  }
};
