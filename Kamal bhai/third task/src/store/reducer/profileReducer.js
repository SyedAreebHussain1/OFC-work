import { PROFILE } from "../../constants/profileConstants";

const INITIAL_STATE = {
  userprofile: null,
};

const userData = (state = INITIAL_STATE, action) => {
  console.log("action=>", action);
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        userprofile: action.payload,
      };
  }
  return state;
};
export default userData;
