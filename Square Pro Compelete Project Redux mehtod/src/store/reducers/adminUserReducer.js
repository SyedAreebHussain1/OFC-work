import {
  CREATE_ADMIN_SUCCESS,
  ASSIGN_MODULE_SUCCESS,
  GET_ALL_ADMIN_SUCCESS,
  GET_MODULES_SUCCESS,
  GET_CUSTOMER_LIST_SUCCESS,
  GET_AGENT_LIST_SUCCESS,
} from "../../constants/adminUserConstants";

const INITIAL_STATE = {
  createAdminRes: null,
  assignModuleRes: null,
  allAdminUser: null,
  modules: null,
  customerList: null,
  agentList: null,
};

const adminUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ADMIN_SUCCESS:
      return { ...state, createAdminRes: action.payload };
    case ASSIGN_MODULE_SUCCESS:
      return { ...state, assignModuleRes: action.payload };
    case GET_ALL_ADMIN_SUCCESS:
      return { ...state, allAdminUser: action.payload };
    case GET_MODULES_SUCCESS:
      return { ...state, modules: action.payload };
    case GET_CUSTOMER_LIST_SUCCESS:
      return { ...state, customerList: action.payload };
    case GET_AGENT_LIST_SUCCESS:
      return { ...state, agentList: action.payload };
    default:
      return state;
  }
};

export default adminUserReducer;
