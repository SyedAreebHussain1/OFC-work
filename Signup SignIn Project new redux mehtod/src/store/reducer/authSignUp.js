import {SIGNUP} from "../../constants/authConstants";

const INITIAL_STATE = {
  signup: null,
};
const authSignUp = (state = INITIAL_STATE, action) => {
  console.log("action signup=>", action);
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: action.payload,
      };
  }
  return state;
};
export default authSignUp;
