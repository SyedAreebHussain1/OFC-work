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

export const UpdateRequest_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(UpdateRequest.Update());

    let token = localStorage.getItem("auth");
    // let token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGVfaWQiOjUsIkRhc2hib2FyZHVzZXJpZCI6MSwiQ05JQyI6IjQyMTAxMTYxNDkxNjMiLCJlbWFpbCI6InVzbWFuaXJmYW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJuYW1lIjoiVXNtYW4gSXJmYW4iLCJwaG9uZU5vIjoiMDMxMDI5MjI5MzAiLCJzdGF0dXNfaWQiOjE1LCJEZXNjcmlwdGlvbiI6IiIsIkRhdGV0aW1lIjoiMjAyMS0xMS0wNVQxNzowNTowNy4wMDBaIiwidGVhbWlkIjpudWxsLCJ1c2VyX3JvbGVfbmFtZSI6IkFkbWluIn0sImlhdCI6MTY1MzU2MTc5NywiZXhwIjoxNjU2MTUzNzk3fQ.8CXrYXD1hmR0LYZBw--0INN6a-HulZGVAhKW53AnsJs";
    axios
      .post(`${URL}${UPDATE_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("RESSS", res);
        if (res.data.status === true) {
          dispatch(UpdateRequest.UpdateRequest_Success(res.data.response));
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(UpdateRequest.UpdateRequest_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => {
        // console.log("erroror", error);
        dispatch(UpdateRequest.UpdateRequest_Failure(error));
      });
  };
