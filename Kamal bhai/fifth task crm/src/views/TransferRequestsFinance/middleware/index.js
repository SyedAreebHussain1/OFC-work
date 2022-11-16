import axios from "axios";
import { PlotTransReqDetail } from "../action/index";
import { GET_PLOT_TRANSFER_REQ_PATH } from "../constant";
import { BASEURL } from "config/api/URL";
import { URL } from "config/api/URL";

export const plotTransReqMiddleware =
  (pageNumber, noOfRows, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(PlotTransReqDetail.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_PLOT_TRANSFER_REQ_PATH}?page=${pageNumber}&limit=${noOfRows}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(PlotTransReqDetail.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(PlotTransReqDetail.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(PlotTransReqDetail.Fetch_Failure(error)));
  };
