import { USER } from "../../constants/user";

const INITIAL_STATE = {
  user: null,
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
  return state;
};
export default userred;
