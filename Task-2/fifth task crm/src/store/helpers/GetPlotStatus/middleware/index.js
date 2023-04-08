import axios from "axios";
import { PlotStatusDetail, PlotInfoDetail } from "../action";
import { PLOTSTATUS_PATH, PLOTINFO_PATH } from "../constant";
import { BASEURL, URL } from "config/api/URL";

export const showPlotStatus = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotStatusDetail.PlotStatus());
  let token = localStorage.getItem("auth");
  axios
    .get(`${URL}${PLOTSTATUS_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotStatusDetail.PlotStatus_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotStatusDetail.PlotStatus_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotStatusDetail.PlotStatus_Failure(error)));
};
export const showPlotInfo =
  (
    page,
    limit,
    Project_name,
    Sector_Name,
    PlotType_Name,
    CategoryName,
    House_StatusName,
    Plot_no,
    OnSuccess,
    OnFailure
  ) =>
  (dispatch) => {
    dispatch(PlotInfoDetail.PlotInfo());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${URL}${PLOTINFO_PATH}?page=${page}&limit=${limit}${
          Project_name !== null &&
          Project_name !== "" &&
          Project_name !== undefined
            ? `&Project_name=${Project_name}`
            : ""
        }${
          Sector_Name !== null &&
          Sector_Name !== undefined &&
          Sector_Name !== ""
            ? `&Sector_Name=${Sector_Name}`
            : ""
        }${
          PlotType_Name !== null &&
          PlotType_Name !== undefined &&
          PlotType_Name !== ""
            ? `&PlotType_Name=${PlotType_Name}`
            : ""
        }${
          CategoryName !== null &&
          CategoryName !== "" &&
          CategoryName !== undefined
            ? `&CategoryName=${CategoryName}`
            : ""
        }${
          House_StatusName !== null &&
          House_StatusName !== "" &&
          House_StatusName !== undefined
            ? `&House_StatusName=${House_StatusName}`
            : ""
        }${
          Plot_no !== null && Plot_no !== "" && Plot_no !== undefined
            ? `&Plot_no=${Plot_no}`
            : ""
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(PlotInfoDetail.PlotInfo_Success(res.data));
          dispatch(OnSuccess(res.data));
        } else {
          dispatch(PlotInfoDetail.PlotInfo_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })

      .catch((error) => dispatch(PlotInfoDetail.PlotInfo_Failure(error)));
  };
