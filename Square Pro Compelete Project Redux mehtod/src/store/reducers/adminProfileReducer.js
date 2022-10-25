import {
  GET_ADMIN_PROFILE_SUCCESS,
  GET_ASSIGN_MODULE_SUCCESS,
} from "../../constants/adminProfileConstants";

const INITIAL_STATE = {
  adminProfile: null,
  modules: localStorage.hasOwnProperty("assignModule")
    ? JSON.parse(localStorage.getItem("assignModule"))
    : null,
};

const adminProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ADMIN_PROFILE_SUCCESS:
      return { ...state, adminProfile: action.payload };

    case GET_ASSIGN_MODULE_SUCCESS:
      return { ...state, modules: action.payload };
    default:
      return state;
  }
};

export default adminProfileReducer;
