import {SIGNIN} from "../../constants/authConstants";

const INITIAL_STATE = {
  signin: null,
};
const authSignIn = (state = INITIAL_STATE, action) => {
  console.log("authSignIn action=>", action);
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        signin: action.payload,
      };
  }
  return state;
};
export default authSignIn;
