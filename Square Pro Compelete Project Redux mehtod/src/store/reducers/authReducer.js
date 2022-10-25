import { SIGNIN_SUCCESS } from "../../constants/authConstants";

const INITIAL_STATE = {
  Response: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return { ...state, Response: action.payload };

    default:
      return state;
  }
};

export default authReducer;
