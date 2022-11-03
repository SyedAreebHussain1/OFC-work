import { CITYLIST } from "../../constants/cityListConstant";

const INITIAL_STATE = {
  citylist: null,
};
const cityListRed = (state = INITIAL_STATE, action) => {
  console.log("citylist_action=>", action);
  switch (action.type) {
    case CITYLIST:
      return {
        ...state,
        citylist: action.payload,
      };
  }
  return state;
};
export default cityListRed;
