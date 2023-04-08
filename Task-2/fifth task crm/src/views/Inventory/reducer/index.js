import {
  PLOTCATEGORY,
  PLOTCATEGORY_SUCCESS,
  PLOTCATEGORY_FAILURE,
  PLOTSIZE,
  PLOTSIZE_SUCCESS,
  PLOTSIZE_FAILURE,
  PLOTTYPE,
  PLOTTYPE_SUCCESS,
  PLOTTYPE_FAILURE,
  PLOTSECTOR,
  PLOTSECTOR_SUCCESS,
  PLOTSECTOR_FAILURE,
  PLOTDIRECTION,
  PLOTDIRECTION_SUCCESS,
  PLOTDIRECTION_FAILURE,
  PROJECT,
  PROJECT_SUCCESS,
  PROJECT_FAILURE,
  PLOTSTREET,
  PLOTSTREET_FAILURE,
  PLOTSTREET_SUCCESS,
  PLOTNO,
  PLOTNO_FAILURE,
  PLOTNO_SUCCESS,
  SELLPLOT,
  SELLPLOT_FAILURE,
  SELLPLOT_SUCCESS,



  // MUSTAFA 
  PLOT_POSITION,
  PLOT_POSITION_SUCCESS,
  PLOT_POSITION_FAILURE

} from "../constant";
const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,
  Size: null,
  Type: null,
  Sector: null,
  Direction: null,
  Project: null,
  Street: null,
  PlotNo: null,
  SellPlot: null,


  // MUSTAFA 
  PlotPositionsValues: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case PROJECT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Project: null,
        error: {},
      };
    case PROJECT_SUCCESS:
    
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Project: action.payload,
      };
    case PROJECT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case PLOTCATEGORY:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case PLOTCATEGORY_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case PLOTCATEGORY_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case PLOTSIZE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Size: null,
        error: {},
      };
    case PLOTSIZE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Size: action.payload,
      };
    case PLOTSIZE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case PLOTTYPE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Type: null,
        error: {},
      };
    case PLOTTYPE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Type: action.payload,
      };
    case PLOTTYPE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PLOTSECTOR:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Sector: null,
        error: {},
      };
    case PLOTSECTOR_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Sector: action.payload,
      };
    case PLOTSECTOR_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PLOTDIRECTION:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Direction: null,
        error: {},
      };
    case PLOTDIRECTION_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Direction: action.payload,
      };
    case PLOTDIRECTION_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case PLOTSTREET:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Street: null,
        error: {},
      };
    case PLOTSTREET_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Street: action.payload,
      };
    case PLOTSTREET_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case PLOTNO:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PlotNo: null,
        error: {},
      };
    case PLOTNO_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PlotNo: action.payload,
      };
    case PLOTNO_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case SELLPLOT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        SellPlot: null,
        error: {},
      };
    case SELLPLOT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        SellPlot: action.payload,
      };
    case SELLPLOT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

      // MUSTAFA

      case PLOT_POSITION:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PlotPositionsValues: null,
        error: {},
      };
    case PLOT_POSITION_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PlotPositionsValues: action.payload,
      };
    case PLOT_POSITION_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
