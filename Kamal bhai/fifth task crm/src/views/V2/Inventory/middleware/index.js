import axios from "axios";
import {
  PlotCategoryDetail,
  PlotSizeDetail,
  PlotTypeDetail,
  PlotSectorDetail,
  PlotDirectionDetail,
  ProjectDetail,
  PlotStreetDetail,
  PlotNoDetail,
  SellPlotDetail,

  //MUSTAFA
  PlotPositionInformation
} from "../action/index";
import {
  PLOTCATEGORY_PATH,
  PLOTSIZE_PATH,
  PLOTTYPE_PATH,
  PLOTSECTOR_PATH,
  PLOTDIRECTION_PATH,
  PROJECT_PATH,
  PLOTSTREET_PATH,
  PLOTNO_PATH,
  SELLPLOT_PATH,


  //MUSTAFA

  PLOT_POSITION_PATH,
} from "../constant";
import { BASEURL } from "config/api/URL";
import { URL } from "config/api/URL";

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

export const showPlotCategory = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotCategoryDetail.PlotCategory());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PLOTCATEGORY_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotCategoryDetail.PlotCategory_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotCategoryDetail.PlotCategory_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotCategoryDetail.PlotCategory_Failure(error)));
};

export const showPlotSize = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotSizeDetail.PlotSize());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PLOTSIZE_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotSizeDetail.PlotSize_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotSizeDetail.PlotSize_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotSizeDetail.PlotSize_Failure(error)));
};

export const showPlotType = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotTypeDetail.PlotType());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PLOTTYPE_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotTypeDetail.PlotType_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotTypeDetail.PlotType_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotTypeDetail.PlotType_Failure(error)));
};

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

export const showPlotDirection = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotDirectionDetail.PlotDirection());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PLOTDIRECTION_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotDirectionDetail.PlotDirection_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotDirectionDetail.PlotDirection_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) =>
      dispatch(PlotDirectionDetail.PlotDirection_Failure(error))
    );
};

export const showPlotStreet = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotStreetDetail.PlotStreet());
  let token = localStorage.getItem("auth");//kam ka nahi hai
  axios
    .post(`${BASEURL}${PLOTSTREET_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotStreetDetail.PlotStreet_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotStreetDetail.PlotStreet_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotStreetDetail.PlotStreet_Failure(error)));
};

export const showPlotNo = (page,limit,Project_name, Sector_Name, House_StatusName, Plot_no, CategoryName,PlotType_Name, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotNoDetail.PlotNo());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${PLOTNO_PATH}?page=${page}&limit=${limit}${Project_name!==""&&Project_name!==null?`&Project_name=${Project_name}`:""}${Sector_Name!==""&&Sector_Name!==null?`&Sector_Name=${Sector_Name}`:""}${House_StatusName!==""&&House_StatusName!==null?`&House_StatusName=${House_StatusName}`:""}${Plot_no!==""&&Plot_no!==null?`&Plot_no=${Plot_no}`:""}${CategoryName!==""&&CategoryName!==null?`&CategoryName=${CategoryName}`:""}${PlotType_Name!==""&&PlotType_Name!==null?`&PlotType_Name=${PlotType_Name}`:""}`,  {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotNoDetail.PlotNo_Success(res.data));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotNoDetail.PlotNo_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotNoDetail.PlotNo_Failure(error)));
};

export const updateSellPlot = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(SellPlotDetail.SellPlot());
  let token = localStorage.getItem("auth");
  axios
    .put(`${BASEURL}${SELLPLOT_PATH}`, body, {
      headers: {//kam ka nahi hai
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(SellPlotDetail.SellPlot_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(SellPlotDetail.SellPlot_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(SellPlotDetail.SellPlot_Failure(error)));
};


export const ShowPlotInformation = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotPositionInformation.PlotPosition());
  let token = localStorage.getItem("auth");
  axios
    .post(`${URL}${PLOT_POSITION_PATH}`, body, {//kam nahi hai 
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(PlotPositionInformation.PlotPosition_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(PlotPositionInformation.PlotPosition_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(PlotPositionInformation.PlotPosition_Failure(error)));
};
