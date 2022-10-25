import { combineReducers } from "redux";

import authReducer from "./authReducer";
import adminProfileReducer from "./adminProfileReducer";
import adminUserReducer from "./adminUserReducer";
import utilsReducer from "./utilsReducer";
import projectReducer from "./projectReducer";
import adminReducer from "./adminReducer";
import agencyReducer from "./agencyReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
  authReducer,
  adminProfileReducer,
  adminUserReducer,
  utilsReducer,
  projectReducer,
  adminReducer,
  agencyReducer,
  chatReducer,
});
