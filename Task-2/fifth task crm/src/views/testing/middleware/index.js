import axios from "axios";
import {LeadTestingData} from '../action/index';
import {BASEURL} from "../../../config/api/URL";
import {LEAD_DATA_PATH} from '../constant'



export const leadMiddleware = (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(LeadTestingData.testingLead()); 
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${LEAD_DATA_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
     
        if (res.data.status === true) {
         
          dispatch(LeadTestingData.testinflead_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          
          dispatch(LeadTestingData.testingLead_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(LeadTestingData.testingLead_Failure(error)));
  };
  