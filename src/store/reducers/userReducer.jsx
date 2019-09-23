import { LOGIN_USER } from "../types";
const initialState = {
  user: {}
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        user: actions.user
      });
    default:
      return state;
  }
};

export default userReducer;
