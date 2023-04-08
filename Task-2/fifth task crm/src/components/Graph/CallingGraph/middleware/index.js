import axios from "axios";
import { AllCallsDetails } from "../action/index";
import { CALLINGGRAPH_PATH } from "../constant";
// import { BASEURL } from "config/api/URL";
import { BASEURL, LOCALBASEURL } from "../../../../config/api/URL";

export const showAllCalls = (body, OnSuccess, OnFailure) => (dispatch) => {

  dispatch(AllCallsDetails.CallGraph());


  let token = localStorage.getItem("auth");

  axios
    .post(`${BASEURL}${CALLINGGRAPH_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
  
      if (res.data.status === true) {
        dispatch(AllCallsDetails.CallGraph_Success(res.data.response));
        dispatch(OnSuccess(res.data.message));

      } else {
        dispatch(AllCallsDetails.CallGraph_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
       
      }
    })
    .catch((error) => dispatch(AllCallsDetails.CallGraph_Failure(error)));
};
