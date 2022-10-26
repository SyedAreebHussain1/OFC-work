import {FORGOTPASSWORD} from "../../constants/authConstants";

const INITIAL_STATE = {
  forgotpassword: null,
};
const authForgetPassword = (state = INITIAL_STATE, action) => {
  console.log("forgotpassword action=>", action);
  switch (action.type) {
    case FORGOTPASSWORD:
      return {
        ...state,
        forgotpassword: action.payload,
      };
  }
  return state;
};
export default authForgetPassword;