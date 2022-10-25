import {
  GET_PLOT_TYPE_SUCCESS,
  CREATE_PLOT_TYPE_SUCCESS,
  DELETE_PLOT_TYPE_SUCCESS,
  EDIT_PLOT_TYPE_SUCCESS,
  GET_PLOT_CATEGORY_SUCCESS,
  CREATE_PLOT_CATEGORY_SUCCESS,
  DELETE_PLOT_CATEGORY_SUCCESS,
  EDIT_PLOT_CATEGORY_SUCCESS,
  GET_PLOT_POSITION_SUCCESS,
  CREATE_PLOT_POSITION_SUCCESS,
  DELETE_PLOT_POSITION_SUCCESS,
  EDIT_PLOT_POSITION_SUCCESS,
  GET_PLOT_SECTOR_SUCCESS,
  CREATE_PLOT_SECTOR_SUCCESS,
  DELETE_PLOT_SECTOR_SUCCESS,
  EDIT_PLOT_SECTOR_SUCCESS,
  GET_PLOT_STREET_SUCCESS,
  CREATE_PLOT_STREET_SUCCESS,
  DELETE_PLOT_STREET_SUCCESS,
  EDIT_PLOT_STREET_SUCCESS,
  GET_PROJECT_MAIN_FEATURE_SUCCESS,
  CREATE_PROJECT_MAIN_FEATURE_SUCCESS,
  DELETE_PROJECT_MAIN_FEATURE_SUCCESS,
  EDIT_PROJECT_MAIN_FEATURE_SUCCESS,
  GET_PROJECT_COMMUNITY_FEATURE_SUCCESS,
  CREATE_PROJECT_COMMUNITY_FEATURE_SUCCESS,
  DELETE_PROJECT_COMMUNITY_FEATURE_SUCCESS,
  EDIT_PROJECT_COMMUNITY_FEATURE_SUCCESS,
  GET_PROJECT_PLOT_FEATURE_SUCCESS,
  CREATE_PROJECT_PLOT_FEATURE_SUCCESS,
  DELETE_PROJECT_PLOT_FEATURE_SUCCESS,
  EDIT_PROJECT_PLOT_FEATURE_SUCCESS,
  GET_PROJECT_OTHER_FEATURE_SUCCESS,
  CREATE_PROJECT_OTHER_FEATURE_SUCCESS,
  DELETE_PROJECT_OTHER_FEATURE_SUCCESS,
  EDIT_PROJECT_OTHER_FEATURE_SUCCESS,
  CREATE_PROJECT_RECREATIONAL_SUCCESS,
  DELETE_PROJECT_RECREATIONAL_SUCCESS,
  GET_PROJECT_RECREATIONAL_SUCCESS,
  EDIT_PROJECT_RECREATIONAL_SUCCESS,
  GET_PROJECT_NEARBY_LOCATION_SUCCESS,
  CREATE_PROJECT_NEARBY_LOCATION_SUCCESS,
  DELETE_PROJECT_NEARBY_LOCATION_SUCCESS,
  EDIT_PROJECT_NEARBY_LOCATION_SUCCESS,
  GET_COUNTRY_SUCCESS,
  GET_CITY_BY_COUNTRY_ID_SUCCESS,
} from "../../constants/utilsConstants";

const INITIAL_STATE = {
  plotTypes: null,
  plotTypesRes: null,
  deletePlotTypesRes: null,
  editPlotTypesRes: null,
  plotCategory: null,
  plotCategoryRes: null,
  deletePlotCategoryRes: null,
  editPlotCategoryRes: null,
  plotPosition: null,
  plotPositionRes: null,
  deletePlotPositionRes: null,
  editPlotPositionRes: null,
  plotSector: null,
  plotSectorRes: null,
  deletePlotSectorRes: null,
  editPlotSectorRes: null,
  plotStreet: null,
  plotStreetRes: null,
  deletePlotStreetRes: null,
  editPlotStreetRes: null,
  projectCommunityFeature: null,
  projectCommunityFeatureRes: null,
  deleteProjectCommunityFeatureRes: null,
  editProjectCommunityFeatureRes: null,
  projectMainFeature: null,
  projectMainFeatureRes: null,
  deleteProjectMainFeatureRes: null,
  editProjectMainFeatureRes: null,
  projectPlotFeature: null,
  projectPlotFeatureRes: null,
  deleteProjectPlotFeatureRes: null,
  editProjectPlotFeatureRes: null,
  projectOtherFeature: null,
  projectOtherFeatureRes: null,
  deleteProjectOtherFeatureRes: null,
  editProjectOtherFeatureRes: null,
  projectRecreational: null,
  projectRecreationalRes: null,
  deleteProjectRecreationalRes: null,
  editProjectRecreationalRes: null,
  projectNearByLocation: null,
  projectNearByLocationRes: null,
  deleteProjectNearByLocationRes: null,
  editProjectNearByLocationRes: null,
  countries: null,
  cityByCountryId: null,
};

const utilsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //PLOT TYPE
    case GET_PLOT_TYPE_SUCCESS:
      return { ...state, plotTypes: action.payload };
    case CREATE_PLOT_TYPE_SUCCESS:
      return { ...state, plotTypesRes: action.payload };
    case DELETE_PLOT_TYPE_SUCCESS:
      return { ...state, deletePlotTypesRes: action.payload };
    case EDIT_PLOT_TYPE_SUCCESS:
      return { ...state, editPlotTypesRes: action.payload };
    //PLOT CATEGORY
    case GET_PLOT_CATEGORY_SUCCESS:
      return { ...state, plotCategory: action.payload };
    case CREATE_PLOT_CATEGORY_SUCCESS:
      return { ...state, plotCategoryRes: action.payload };
    case DELETE_PLOT_CATEGORY_SUCCESS:
      return { ...state, deletePlotCategoryRes: action.payload };
    case EDIT_PLOT_CATEGORY_SUCCESS:
      return { ...state, editPlotCategoryRes: action.payload };
    //PLOT POSITION
    case GET_PLOT_POSITION_SUCCESS:
      return { ...state, plotPosition: action.payload };
    case CREATE_PLOT_POSITION_SUCCESS:
      return { ...state, plotPositionRes: action.payload };
    case DELETE_PLOT_POSITION_SUCCESS:
      return { ...state, deletePlotPositionRes: action.payload };
    case EDIT_PLOT_POSITION_SUCCESS:
      return { ...state, editPlotPositionRes: action.payload };
    //PLOT SECTOR
    case GET_PLOT_SECTOR_SUCCESS:
      return { ...state, plotSector: action.payload };
    case CREATE_PLOT_SECTOR_SUCCESS:
      return { ...state, plotSectorRes: action.payload };
    case DELETE_PLOT_SECTOR_SUCCESS:
      return { ...state, deletePlotSectorRes: action.payload };
    case EDIT_PLOT_SECTOR_SUCCESS:
      return { ...state, editPlotSectorRes: action.payload };
    //PLOT STREET
    case GET_PLOT_STREET_SUCCESS:
      return { ...state, plotStreet: action.payload };
    case CREATE_PLOT_STREET_SUCCESS:
      return { ...state, plotStreetRes: action.payload };
    case DELETE_PLOT_STREET_SUCCESS:
      return { ...state, deletePlotStreetRes: action.payload };
    case EDIT_PLOT_STREET_SUCCESS:
      return { ...state, editPlotStreetRes: action.payload };
    //PROJECT MAIN FEATURE
    case GET_PROJECT_MAIN_FEATURE_SUCCESS:
      return { ...state, projectMainFeature: action.payload };
    case CREATE_PROJECT_MAIN_FEATURE_SUCCESS:
      return { ...state, projectMainFeatureRes: action.payload };
    case DELETE_PROJECT_MAIN_FEATURE_SUCCESS:
      return { ...state, deleteProjectMainFeatureRes: action.payload };
    case EDIT_PROJECT_MAIN_FEATURE_SUCCESS:
      return { ...state, editProjectMainFeatureRes: action.payload };
    //PROJECT COMMUNITY FEATURE
    case GET_PROJECT_COMMUNITY_FEATURE_SUCCESS:
      return { ...state, projectCommunityFeature: action.payload };
    case CREATE_PROJECT_COMMUNITY_FEATURE_SUCCESS:
      return { ...state, projectCommunityFeatureRes: action.payload };
    case DELETE_PROJECT_COMMUNITY_FEATURE_SUCCESS:
      return { ...state, deleteProjectCommunityFeatureRes: action.payload };
    case EDIT_PROJECT_COMMUNITY_FEATURE_SUCCESS:
      return { ...state, editProjectCommunityFeatureRes: action.payload };
    //PROJECT PLOT FEATURE
    case GET_PROJECT_PLOT_FEATURE_SUCCESS:
      return { ...state, projectPlotFeature: action.payload };
    case CREATE_PROJECT_PLOT_FEATURE_SUCCESS:
      return { ...state, projectPlotFeatureRes: action.payload };
    case DELETE_PROJECT_PLOT_FEATURE_SUCCESS:
      return { ...state, deleteProjectPlotFeatureRes: action.payload };
    case EDIT_PROJECT_PLOT_FEATURE_SUCCESS:
      return { ...state, editProjectPlotFeatureRes: action.payload };
    //PROJECT OTHER FEATURE
    case GET_PROJECT_OTHER_FEATURE_SUCCESS:
      return { ...state, projectOtherFeature: action.payload };
    case CREATE_PROJECT_OTHER_FEATURE_SUCCESS:
      return { ...state, projectOtherFeatureRes: action.payload };
    case DELETE_PROJECT_OTHER_FEATURE_SUCCESS:
      return { ...state, deleteProjectOtherFeatureRes: action.payload };
    case EDIT_PROJECT_OTHER_FEATURE_SUCCESS:
      return { ...state, editProjectOtherFeatureRes: action.payload };
    //PROJECT RECREATIONAL
    case GET_PROJECT_RECREATIONAL_SUCCESS:
      return { ...state, projectRecreational: action.payload };
    case CREATE_PROJECT_RECREATIONAL_SUCCESS:
      return { ...state, projectRecreationalRes: action.payload };
    case DELETE_PROJECT_RECREATIONAL_SUCCESS:
      return { ...state, deleteProjectRecreationalRes: action.payload };
    case EDIT_PROJECT_RECREATIONAL_SUCCESS:
      return { ...state, editProjectRecreationalRes: action.payload };
    //PROJECT NEARBY LOCATION
    case GET_PROJECT_NEARBY_LOCATION_SUCCESS:
      return { ...state, projectNearByLocation: action.payload };
    case CREATE_PROJECT_NEARBY_LOCATION_SUCCESS:
      return { ...state, projectNearByLocationRes: action.payload };
    case DELETE_PROJECT_NEARBY_LOCATION_SUCCESS:
      return { ...state, deleteProjectNearByLocationRes: action.payload };
    case EDIT_PROJECT_NEARBY_LOCATION_SUCCESS:
      return { ...state, editProjectNearByLocationRes: action.payload };
    //COUNTRY
    case GET_COUNTRY_SUCCESS:
      return { ...state, countries: action.payload };
    //CITY BY COUNTRY ID
    case GET_CITY_BY_COUNTRY_ID_SUCCESS:
      return { ...state, cityByCountryId: action.payload };
    default:
      return state;
  }
};

export default utilsReducer;
