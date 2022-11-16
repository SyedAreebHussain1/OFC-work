import axios from "axios";
import {
  GetAllRequests,
  GetAllRequests_Success,
  GetAllRequests_Failure,
  UpdateRequest,
  UpdateRequest_Success,
  UpdateRequest_Failure,
} from "../action/index";
import {
  GETALLREQUEST,
  GETALLREQUEST_SUCCESS,
  GETALLREQUEST_FAILURE,
  GETALLREQUEST_PATH,
  UPDATEREQUEST,
  UPDATEREQUEST_SUCCESS,
  UPDATEREQUEST_FAILURE,
  UPDATE_PATH,
} from "../constant";
import { BASEURL, URL } from "config/api/URL";
import swal from "sweetalert";

export const GetAllRequests_Middleware =
  (OnSuccess, OnFailure, amount, date, noOfRows, pageNumber) => (dispatch) => {
    dispatch(GetAllRequests.Get());

    let token = localStorage.getItem("auth");
    // let token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGVfaWQiOjYsIkRhc2hib2FyZHVzZXJpZCI6MjUsIkNOSUMiOiIiLCJlbWFpbCI6InVtZXIuYWxhbTE5OTZAZ21haWwuY29tIiwicGFzc3dvcmQiOiJPcVkyQ15IOTUqIiwibmFtZSI6InVtZXIiLCJwaG9uZU5vIjoiMDM0MTc2MDYxMTciLCJzdGF0dXNfaWQiOjE1LCJEZXNjcmlwdGlvbiI6InRlc3RpbmciLCJ0ZWFtaWQiOm51bGwsIkRhdGV0aW1lIjoiMjAyMi0wNi0yMFQxMjoyOTo1MC4wMDBaIiwidXNlcl9yb2xlX25hbWUiOiJEb2N1bWVudGF0aW9uIn0sImlhdCI6MTY1NzY5OTExMSwiZXhwIjoxNjYwMjkxMTExfQ.5GUPERm9t1uRmVzz9GUSIRDaca9RK_AEZibIVv5iilw";
    axios
      .get(
        `${URL}${GETALLREQUEST_PATH}?Amount=${amount}&Date=${date}&limit=${noOfRows}&page=${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            GetAllRequests.GetAllRequests_Success(res.data.response.data)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetAllRequests.GetAllRequests_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetAllRequests.GetAllRequests_Failure(error)));
  };
