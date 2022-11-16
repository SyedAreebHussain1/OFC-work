import axios from "axios";
import {APPROVAL_PATH} from "../constant"
import { BASEURL } from "config/api/URL";
import {ApprovalPlot} from "../action";


export const ApprovalAction = (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(ApprovalPlot.Approval());
  
    axios
      .post(`${BASEURL}${APPROVAL_PATH}`, body, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(ApprovalPlot.ApprovalSuccess(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(ApprovalPlot.ApprovalFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(ApprovalPlot.ApprovalFailure(error)));
  };