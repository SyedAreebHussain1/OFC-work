import {
  GET_PROJECT_REQUEST_SUCCESS,
  UPDATE_PROJECT_REQUEST_STATUS_SUCCESS,
  AGENCY_LIST_SUCCESS,
  AGENCY_AGENTS_LIST_SUCCESS,
  GET_PLOT_REQUEST_SUCCESS,
  UPDATE_PLOT_REQUEST_STATUS_SUCCESS,
} from "../../constants/adminConstants";

const INITIAL_STATE = {
  updateProjectReqRes: null,
  allProjectsRequest: null,
  agencyList: null,
  agencyAgentsList: null,
  allPlotsRequest: null,
  updatePlotReqRes: null,
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROJECT_REQUEST_SUCCESS:
      return { ...state, allProjectsRequest: action.payload };
    case UPDATE_PROJECT_REQUEST_STATUS_SUCCESS:
      return { ...state, updateProjectReqRes: action.payload };
    case AGENCY_LIST_SUCCESS:
      return { ...state, agencyList: action.payload };
    case AGENCY_AGENTS_LIST_SUCCESS:
      return { ...state, agencyAgentsList: action.payload };
    case GET_PLOT_REQUEST_SUCCESS:
      return { ...state, allPlotsRequest: action.payload };
    case UPDATE_PLOT_REQUEST_STATUS_SUCCESS:
      return { ...state, updatePlotReqRes: action.payload };
    default:
      return state;
  }
};

export default adminReducer;
