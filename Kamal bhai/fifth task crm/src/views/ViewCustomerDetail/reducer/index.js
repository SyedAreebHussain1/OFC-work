import {
  LEADS,
  LEADS_SUCCESS,
  LEADS_FAILURE,
  AGENT,
  AGENT_FAILURE,
  AGENT_SUCCESS,
  DELETELEADS,
  DELETELEADS_SUCCESS,
  DELETELEADS_FAILURE,
  CLIENT,
  CLIENT_SUCCESS,
  CLIENT_FAILURE,
  CALL_RECORD_DATA,
  CALL_RECORD_DATA_SUCCESS,
  CALL_RECORD_DATA_FAILURE,
  INSERTNEWFILE,
  INSERTNEWFILE_SUCCESS,
  INSERTNEWFILE_FAILURE,
  PROJECT,
  PROJECT_SUCCESS,
  PROJECT_FAILURE,
  PLOTSECTOR,
  PLOTSECTOR_SUCCESS,
  PLOTSECTOR_FAILURE,
  PLOTNO,
  PLOTNO_SUCCESS,
  PLOTNO_FAILURE,
  PLOT_POSITION,
  PLOT_POSITION_SUCCESS,
  PLOT_POSITION_FAILURE,
  CHANGE_PLOT_POSITION,
  CHANGE_PLOT_POSITION_SUCCESS,
  CHANGE_PLOT_POSITION_FAILURE,
  NEW,
  NEW_SUCCESS,
  NEW_FAILURE,
  RETURNPLOT,
  RETURNPLOT_FAILURE,
  RETURNPLOT_SUCCESS,
  INSERTRETURNPLOTREQUEST_SUCCESS,
  INSERTRETURNPLOTREQUEST_FAILURE,
  INSERTRETURNPLOTREQUEST,
  RETURNPLOT_PATH_V2,
  RETURNPLOT_PATH_V2_SUCESS,
  RETURNPLOT_PATH_V2_FAILURE,
  RETURNPLOT_PATH_V2_PATH,
} from "../constant";
const INITIAL_STATE = {
  Users: null,
  isLoading: false,
  isError: false,
  error: {},
  isLoggedIn: false,
  Response: null,
  Delete: null,
  Client: null,

  Call_Records: null,
  File: null,

  Project: null,
  Sector: null,
  PlotNo: null,
  PlotPositionsValues: null,

  ChangePlotStatus: null,

  NewPosition: null,

  PlotReturn: null,
  ReturnRequest: null,
  ReturnPlotData: null,
};
export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return states;

    case INSERTRETURNPLOTREQUEST:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        ReturnRequest: null,
        error: {},
      };
    case INSERTRETURNPLOTREQUEST_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        ReturnRequest: action.payload,
      };
    case INSERTRETURNPLOTREQUEST_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case NEW:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        NewPosition: null,
        error: {},
      };
    case NEW_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        NewPosition: action.payload,
      };
    case NEW_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
      };

    case CHANGE_PLOT_POSITION:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        ChangePlotStatus: null,
        error: {},
      };
    case CHANGE_PLOT_POSITION_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        ChangePlotStatus: action.payload,
      };
    case CHANGE_PLOT_POSITION_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

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

    case INSERTNEWFILE:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        File: null,
        error: {},
      };
    case INSERTNEWFILE_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        File: action.payload,
      };
    case INSERTNEWFILE_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case LEADS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Users: null,
        error: {},
      };
    case LEADS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Users: action.payload,
      };
    case LEADS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case AGENT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case AGENT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Response: action.payload,
      };
    case AGENT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case DELETELEADS:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Response: null,
        error: {},
      };
    case DELETELEADS_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Delete: action.payload,
      };
    case DELETELEADS_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case CLIENT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Client: null,
        error: {},
      };
    case CLIENT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Client: action.payload,
      };
    case CLIENT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case CALL_RECORD_DATA:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        Call_Records: null,
        error: {},
      };
    case CALL_RECORD_DATA_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        Call_Records: action.payload,
      };
    case CALL_RECORD_DATA_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    case RETURNPLOT:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        PlotReturn: null,
        error: {},
      };
    case RETURNPLOT_SUCCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        PlotReturn: action.payload,
      };
    case RETURNPLOT_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
    case RETURNPLOT_PATH_V2:
      return {
        ...states,
        isLoading: true,
        isError: false,
        isLoggedIn: false,
        ReturnPlotData: null,
        error: {},
      };
    case RETURNPLOT_PATH_V2_SUCESS:
      return {
        ...states,
        isLoading: false,
        isLoggedIn: true,
        ReturnPlotData: action.payload,
      };
    case RETURNPLOT_PATH_V2_FAILURE:
      return {
        ...states,
        isLoading: false,
        isError: true,
        error: action.error,
      };
  }
};
