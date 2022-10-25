import {
  CREATE_PROJECT_SUCCESS,
  GET_PROJECT_SUCCESS,
  PROJECT_ADD_FEATURE_SUCCESS,
  PROJECT_ADD_PLOT_SUCCESS,
} from "../../constants/projectConstants";

const INITIAL_STATE = {
  createProjectRes: null,
  projectAddFeatureRes: null,
  projectAddPlotRes: null,
  allProjects: null,
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROJECT_SUCCESS:
      return { ...state, createProjectRes: action.payload };
    case GET_PROJECT_SUCCESS:
      return { ...state, allProjects: action.payload };
    case PROJECT_ADD_FEATURE_SUCCESS:
      return { ...state, projectAddFeatureRes: action.payload };
    case PROJECT_ADD_PLOT_SUCCESS:
      return { ...state, projectAddPlotRes: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
