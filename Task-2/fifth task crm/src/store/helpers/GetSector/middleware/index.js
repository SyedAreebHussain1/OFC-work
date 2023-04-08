import axios from "axios";
import {
 
  PlotSectorDetail,
  
} from "../action";
import {
 
  PLOTSECTOR_PATH,
  
} from "../constant";
import { BASEURL, URL } from "config/api/URL";

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


// export const showPlotSector = (body, OnSuccess, OnFailure) => (dispatch) => {
//   dispatch(PlotSectorDetail.PlotSector());
//   let token = localStorage.getItem("auth");
//   axios
//     .post(`${URL}${PLOTSECTOR_PATH}`, body, {
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
