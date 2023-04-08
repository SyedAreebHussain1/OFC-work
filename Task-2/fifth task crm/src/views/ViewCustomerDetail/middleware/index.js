import axios from "axios";
import {
  DeleteLead,
  PlotNoDetail,
  ProjectDetail,
  PlotSectorDetail,
  AgentDetail,
  LeadsDetail,
  ClientDetail,
  RecordData,
  InsertNewFileDetail,
  PlotPositionInformation,
  ChangeFile,
  newPlot,
  ReturnPlotDetail,
  InsertReturnRequestDetail,
} from "../action/index";

import {
  DELETELEADS_PATH,
  PLOTSECTOR_PATH,
  PROJECT_PATH,
  AGENT_PATH,
  LEADS_PATH,
  CLIENT_PATH,
  CALL_RECORD_DATA_PATH,
  INSERTNEWFILE_PATH,
  PLOTNO_PATH,
  PLOT_POSITION_PATH,
  CHANGE_PLOT_POSITION_PATH,
  NEW_PATH,
  INSERTRETURNPLOTREQUEST_PATH,
  RETURNPLOT_PATH,
  RETURNPLOT_PATH_V2,
} from "../constant";
import swal from "sweetalert";

import { BASEURL } from "config/api/URL";

export const InsertReturnPlot = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(InsertReturnRequestDetail.InsertReturnRequest());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${INSERTRETURNPLOTREQUEST_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        // swal("Successful", "Successfully insert", "success");
        dispatch(
          InsertReturnRequestDetail.InsertReturnRequest_Success(
            res.data.response
          )
        );
        dispatch(OnSuccess(res.data.message));
      } else {
        swal("Unsuccessful", "Already Inserted", "warning");
        dispatch(
          InsertReturnRequestDetail.InsertReturnRequest_Failure(
            res.data.message
          )
        );
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) =>
      dispatch(InsertReturnRequestDetail.InsertReturnRequest_Failure(error))
    );
};

export const showReturnPlot = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(ReturnPlotDetail.ReturnPlot());

  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${RETURNPLOT_PATH}?SaleOrderId=${body?.SaleOrderId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(ReturnPlotDetail.ReturnPlot_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else if (res.data.status === 500) {
      } else {
        dispatch(ReturnPlotDetail.ReturnPlot_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => {
      dispatch(ReturnPlotDetail.ReturnPlot_Failure(error));
      // dispatch(OnFailure(error));
    });
};

// export const showPlotSector = (body, OnSuccess, OnFailure) => (dispatch) => {
//   dispatch(PlotSectorDetail.PlotSector());
//   let token = localStorage.getItem("auth");
//   axios
//     .post(`${BASEURL}${PLOTSECTOR_PATH}`, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       if (res.data.status === true) {
//         dispatch(PlotSectorDetail.PlotSector_Success(res.data.response));
//         dispatch(OnSuccess(res.data.message));
//       } else {
//         dispatch(PlotSectorDetail.PlotSector_Failure(res.data.message));
//         dispatch(OnFailure(res.data.message));
//       }
//     })
//     .catch((error) => dispatch(PlotSectorDetail.PlotSector_Failure(error)));
// };

export const showPlotSector = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotSectorDetail.PlotSector());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PLOTSECTOR_PATH}?page=1&limit=100&Project_name=${body}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotSectorDetail.PlotSector_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotSectorDetail.PlotSector_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotSectorDetail.PlotSector_Failure(error)));
};
export const showInsertNewFileDetail =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(InsertNewFileDetail.InsertNewFile());

    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${INSERTNEWFILE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            InsertNewFileDetail.InsertNewFile_Success(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(InsertNewFileDetail.InsertNewFile_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(InsertNewFileDetail.InsertNewFile_Failure(error))
      );
  };
export const showClientDetail =
  (page, limit, UserPhoneNumber, UserEmail, OnSuccess, OnFailure) =>
  (dispatch) => {
    dispatch(ClientDetail.Client());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${CLIENT_PATH}?page=${page}&limit=${limit}&UserPhoneNumber=${UserPhoneNumber}&UserEmail=${UserEmail}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(ClientDetail.Client_Success(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(ClientDetail.Client_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(ClientDetail.Client_Failure(error)));
  };

// export const showClientDetail = (body, OnSuccess, OnFailure) => (dispatch) => {
//   dispatch(ClientDetail.Client());

//   let token = localStorage.getItem("auth");
//   axios
//     .post(`${BASEURL}${CLIENT_PATH}`, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       if (res.data.status === true) {
//         dispatch(ClientDetail.Client_Success(res.data.response));
//         if(res.data.response.length==0 )
//         {
//           swal("Unsuccesful","Please Insert Correct Phone Number and Email!","warning")
//         }
//         dispatch(OnSuccess(res.data.message));
//       } else {

//         dispatch(ClientDetail.Client_Failure(res.data.message));
//         dispatch(OnFailure(res.data.message));
//       }
//     })
//     .catch((error) => dispatch(ClientDetail.Client_Failure(error)));
// };
export const showLead = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(LeadsDetail.Leads());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${LEADS_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(LeadsDetail.Leads_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(LeadsDetail.Leads_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(LeadsDetail.Leads_Failure(error)));
};
export const showAgent = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(AgentDetail.Agent());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${AGENT_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(AgentDetail.Agent_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(AgentDetail.Agent_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(AgentDetail.Agent_Failure(error)));
};
export const deleteLead = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(DeleteLead.Delete());

  let token = localStorage.getItem("auth");
  axios
    .put(`${BASEURL}${DELETELEADS_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(DeleteLead.DeleteLeads_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(DeleteLead.DeleteLeads_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(DeleteLead.DeleteLeads_Failure(error)));
};
export const CallRecording = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(RecordData.Record());
  // let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${CALL_RECORD_DATA_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(RecordData.Record_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(RecordData.Record_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(RecordData.Record_Failure(error)));
};
export const showProject = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(ProjectDetail.Project());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${PROJECT_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(ProjectDetail.Project_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(ProjectDetail.Project_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(ProjectDetail.Project_Failure(error)));
};
export const showPlotNo =
  (Project_name, Sector_Name, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotNoDetail.PlotNo());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${PLOTNO_PATH}?page=1&limit=1000
    ${
      Project_name !== "" && Project_name !== null
        ? `&Project_name=${Project_name}`
        : ""
    }${
          Sector_Name !== "" && Sector_Name !== null
            ? `&Sector_Name=${Sector_Name}`
            : ""
        }&House_StatusName=Available`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(PlotNoDetail.PlotNo_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PlotNoDetail.PlotNo_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PlotNoDetail.PlotNo_Failure(error)));
  };
// export const showPlotNo = (body, OnSuccess, OnFailure) => (dispatch) => {
//   dispatch(PlotNoDetail.PlotNo());
//   let token = localStorage.getItem("auth");
//   axios
//     .post(`${BASEURL}${PLOTNO_PATH}`, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer ${token}`,
//       },
//     })
//     .then((res) => {

//       if (res.data.status === true) {
//         dispatch(PlotNoDetail.PlotNo_Success(res.data.response));
//         dispatch(OnSuccess(res.data.message));
//       } else {
//         dispatch(PlotNoDetail.PlotNo_Failure(res.data.message));
//         dispatch(OnFailure(res.data.message));
//       }
//     })
//     .catch((error) => dispatch(PlotNoDetail.PlotNo_Failure(error)));
// };
export const ShowPlotInformation =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotPositionInformation.PlotPosition());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${PLOT_POSITION_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            PlotPositionInformation.PlotPosition_Success(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(
            PlotPositionInformation.PlotPosition_Failure(res.data.message)
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(PlotPositionInformation.PlotPosition_Failure(error))
      );
  };

export const ChangePlotMiddleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(ChangeFile.ChangePlot());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${CHANGE_PLOT_POSITION_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          swal({
            title: "Successful",
            text: "successfully Insert",
            type: "success",
            icon: "success",
            // buttons: true,
            // dangerMode: true,
          });
          dispatch(ChangeFile.ChangePlot_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          swal({
            title: "Unsuccessful",
            text: "Not Inserted, Already Initiated!",
            type: "warning",
            icon: "warning",
          });
          dispatch(ChangeFile.ChangePlot_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(ChangeFile.ChangePlot_Failure(error)));
  };

export const newPlotMiddleware = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(newPlot.newplotstatus());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${NEW_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(newPlot.newplotstatus_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(newPlot.newplotstatus_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(newPlot.newplotstatus_Failure(error)));
};
