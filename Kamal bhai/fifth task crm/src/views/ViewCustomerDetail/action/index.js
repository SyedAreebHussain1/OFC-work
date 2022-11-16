import {
  AGENT,
  AGENT_SUCCESS,
  AGENT_FAILURE,
  LEADS,
  LEADS_SUCCESS,
  LEADS_FAILURE,
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
  INSERTNEWFILE_FAILURE,
  INSERTNEWFILE_SUCCESS,
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
  RETURNPLOT_SUCCESS,
  RETURNPLOT_FAILURE,
  INSERTRETURNPLOTREQUEST,
  INSERTRETURNPLOTREQUEST_FAILURE,
  INSERTRETURNPLOTREQUEST_SUCCESS,
  RETURNPLOT_PATH_V2,
  RETURNPLOT_PATH_V2_SUCESS,
  RETURNPLOT_PATH_V2_FAILURE,
  RETURNPLOT_PATH_V2_PATH,

  // CLIENT,CLIENT_SUCCESS,CLIENT_FAILURE
} from "../constant.js";

export class newPlot {
  static newplotstatus() {
    return {
      type: NEW,
    };
  }
  static newplotstatus_Success(response) {
    return {
      type: NEW_SUCCESS,
      payload: response,
    };
  }
  static newplotstatus_Failure(error) {
    return {
      type: NEW_FAILURE,
      error,
    };
  }
}
export class ReturnPlot {
  static fetch() {
    return {
      type: RETURNPLOT_PATH_V2,
    };
  }
  static fetch_Success(response) {
    return {
      type: RETURNPLOT_PATH_V2_SUCESS,
      payload: response,
    };
  }
  static fetch_Failure(error) {
    return {
      type: RETURNPLOT_PATH_V2_FAILURE,
      error,
    };
  }
}
export class ChangeFile {
  static ChangePlot() {
    return {
      type: CHANGE_PLOT_POSITION,
    };
  }
  static ChangePlot_Success(response) {
    return {
      type: CHANGE_PLOT_POSITION_SUCCESS,
      payload: response,
    };
  }
  static ChangePlot_Failure(error) {
    return {
      type: CHANGE_PLOT_POSITION_FAILURE,
      error,
    };
  }
}

export class PlotPositionInformation {
  static PlotPosition() {
    return {
      type: PLOT_POSITION,
    };
  }
  static PlotPosition_Success(response) {
    return {
      type: PLOT_POSITION_SUCCESS,
      payload: response,
    };
  }
  static PlotPosition_Failure(error) {
    return {
      type: PLOT_POSITION_FAILURE,
      error,
    };
  }
}

export class PlotNoDetail {
  static PlotNo() {
    return {
      type: PLOTNO,
    };
  }
  static PlotNo_Success(response) {
    return {
      type: PLOTNO_SUCCESS,
      payload: response,
    };
  }
  static PlotNo_Failure(error) {
    return {
      type: PLOTNO_FAILURE,
      error,
    };
  }
}
export class InsertReturnRequestDetail {
  static InsertReturnRequest() {
    return {
      type: INSERTRETURNPLOTREQUEST,
    };
  }
  static InsertReturnRequest_Success(response) {
    return {
      type: INSERTRETURNPLOTREQUEST_SUCCESS,
      payload: response,
    };
  }
  static InsertReturnRequest_Failure(error) {
    return {
      type: INSERTRETURNPLOTREQUEST_FAILURE,
      error,
    };
  }
}
export class InsertNewFileDetail {
  static InsertNewFile() {
    return {
      type: INSERTNEWFILE,
    };
  }
  static InsertNewFile_Success(response) {
    return {
      type: INSERTNEWFILE_SUCCESS,
      payload: response,
    };
  }
  static InsertNewFile_Failure(error) {
    return {
      type: INSERTNEWFILE_FAILURE,
      error,
    };
  }
}

export class PlotSectorDetail {
  static PlotSector() {
    return {
      type: PLOTSECTOR,
    };
  }
  static PlotSector_Success(response) {
    return {
      type: PLOTSECTOR_SUCCESS,
      payload: response,
    };
  }
  static PlotSector_Failure(error) {
    return {
      type: PLOTSECTOR_FAILURE,
      error,
    };
  }
}

export class ProjectDetail {
  static Project() {
    return {
      type: PROJECT,
    };
  }
  static Project_Success(response) {
    return {
      type: PROJECT_SUCCESS,
      payload: response,
    };
  }
  static Project_Failure(error) {
    return {
      type: PROJECT_FAILURE,
      error,
    };
  }
}

export class ClientDetail {
  static Client() {
    return {
      type: CLIENT,
    };
  }
  static Client_Success(response) {
    return {
      type: CLIENT_SUCCESS,
      payload: response,
    };
  }
  static Client_Failure(error) {
    return {
      type: CLIENT_FAILURE,
      error,
    };
  }
}

export class AgentDetail {
  static Agent() {
    return {
      type: AGENT,
    };
  }
  static Agent_Success(response) {
    return {
      type: AGENT_SUCCESS,
      payload: response,
    };
  }
  static Agent_Failure(error) {
    return {
      type: AGENT_FAILURE,
      error,
    };
  }
}
export class LeadsDetail {
  static Leads() {
    return {
      type: LEADS,
    };
  }

  static Leads_Success(response) {
    return {
      type: LEADS_SUCCESS,
      payload: response,
    };
  }
  static Leads_Failure(error) {
    return {
      type: LEADS_FAILURE,
      error,
    };
  }
}
export class DeleteLead {
  static Delete() {
    return {
      type: DELETELEADS,
    };
  }
  static DeleteLeads_Success(response) {
    return {
      type: DELETELEADS_SUCCESS,
      payload: response,
    };
  }
  static DeleteLeads_Failure(error) {
    return {
      type: DELETELEADS_FAILURE,
      error,
    };
  }
}

export class RecordData {
  static Record() {
    return {
      type: CALL_RECORD_DATA,
    };
  }
  static Record_Success(response) {
    return {
      type: CALL_RECORD_DATA_SUCCESS,
      payload: response,
    };
  }
  static Record_Failure(error) {
    return {
      type: CALL_RECORD_DATA_FAILURE,
      error,
    };
  }
}

export class ReturnPlotDetail {
  static ReturnPlot() {
    return {
      type: RETURNPLOT,
    };
  }
  static ReturnPlot_Success(response) {
    return {
      type: RETURNPLOT_SUCCESS,
      payload: response,
    };
  }
  static ReturnPlot_Failure(error) {
    return {
      type: RETURNPLOT_FAILURE,
      error,
    };
  }
}
