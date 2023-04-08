import axios from "axios";
import {
  
  PlotNoDetail,
  
} from "../action";
import {
 
  PLOTNO_PATH,
  
} from "../constant";
import { BASEURL, URL } from "config/api/URL";




export const showPlotNo = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(PlotNoDetail.PlotNo());
  let token = localStorage.getItem("auth");
  axios
    .post(`${URL}${PLOTNO_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
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

