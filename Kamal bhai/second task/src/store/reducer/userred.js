import { USER } from "../../constants/user";
import {FORMSUBMIT} from "../../constants/user"

const INITIAL_STATE = {
  user: null,
  formdata:null
};
const userred = (state = INITIAL_STATE, action) => {
  console.log("action=>", action);
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };
  }
  switch (action.type) {
    case FORMSUBMIT:
      return {
        ...state,
        formdata: action.payload,
      };
  }
  return state;
};
export default userred;
