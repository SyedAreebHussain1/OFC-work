import axios from "axios";
import { DetailsClient  } from "../action/index";
import {DETAILS_PATH  } from "../constant";
import { BASEURL } from "config/api/URL";



export const showDetailsOfClient = (page,limit, Taskid,Agentname, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(DetailsClient.Details());
  let token = localStorage.getItem("auth");

    axios

    .get(`${BASEURL}${DETAILS_PATH}?page=${page}&limit=${limit}&Taskid=${Taskid}${Agentname!==null && Agentname!==""?`&Agentname=${Agentname}`:""}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(DetailsClient.Details_Success(res.data));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(DetailsClient.Details_Failure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(DetailsClient.Details_Failure(error)));
 
  
};




// export const showDetailsOfClient = (body,OnSuccess, OnFailure) => (dispatch) => {
  
//   dispatch(DetailsClient.Details());
//   let token = localStorage.getItem("auth");
//   axios
//     .post(`${BASEURL}${DETAILS_PATH}`, body, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `bearer ${token}`, 

//       },
//     })
//     .then((res) => {
//       if (res.data.status === true) {
//         dispatch(DetailsClient.Details_Success(res.data.response));
//         dispatch(OnSuccess(res.data.message));
//       } else {
//         dispatch(DetailsClient.Details_Failure(res.data.message));
//         dispatch(OnFailure(res.data.message));
//       }
//     })
//     .catch((error) => dispatch(DetailsClient.Details_Failure(error)));
// };

  
  
