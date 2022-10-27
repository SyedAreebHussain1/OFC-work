import { SIGNUP_ACCOUNTVERIFY } from "../../constants/authConstants";

const INITIAL_STATE = {
  accountverify: null,
};
const authSignUpAccountVerify = (state = INITIAL_STATE, action) => {
  console.log("accountverify_action=>", action);
  switch (action.type) {
    case SIGNUP_ACCOUNTVERIFY:
      return {
        ...state,
        accountverify: action.payload,
      };
  }
  return state;
};
export default authSignUpAccountVerify;