import { SIGNUP } from "../../constants/authConstants";
import { SIGNUP_ACCOUNTVERIFY } from "../../constants/authConstants";
import { SIGNIN } from "../../constants/authConstants";
import { VERIFYEMAIL } from "../../constants/authConstants";

const INITIAL_STATE = {
  signup: null,
  signupaccountverify: null,
  signin: null,
  emailverify:null
};
const authSignUp = (state = INITIAL_STATE, action) => {
  console.log("action=>", action);
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: action.payload,
      };
    case SIGNUP_ACCOUNTVERIFY:
      return {
        ...state,
        signupaccountverify: action.payload,
      };
    case SIGNIN:
      return {
        ...state,
        signin: action.payload,
      };
    case VERIFYEMAIL:
      return {
        ...state,
        emailverify: action.payload,
      };
  }
  return state;
};
export default authSignUp;
