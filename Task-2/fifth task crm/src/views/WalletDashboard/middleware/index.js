import axios from "axios";
import {
  GetDashboardWallet,
  GetWalletHistory,
  UpdateRequest,
} from "../action/index";
import {
  GET_DASHBOARD_WALLET_PATH,
  GET_WALLET_HISTORY_PATH,
  UPDATE_PATH,
} from "../constant";
import { BASEURL, URL } from "config/api/URL";

export const getDashboardWalletMiddleware =
  (noOfRows, pageNumber, StartDate, EndDate, Status, OnSuccess, OnFailure) =>
  (dispatch) => {
    // console.log("START DATE", StartDate);
    // console.log("END DATE", EndDate);
    // console.log("STAUTS", Status);
    dispatch(GetDashboardWallet.Fetch());

    let token = localStorage.getItem("auth");
    let queryParams = `${
      Status.trim().length > 0 ? `&pendingRequests=${Status}` : ""
    }${StartDate.trim().length > 0 ? `&StartDate=${StartDate}` : ""}${
      EndDate.trim().length > 0 ? `&EndDate=${EndDate}` : ""
    }`;

    // console.log("QUREY PARASM", queryParams);
    axios
      .get(
        `${URL}${GET_DASHBOARD_WALLET_PATH}?limit=${noOfRows}&page=${pageNumber}${queryParams}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(GetDashboardWallet.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetDashboardWallet.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetDashboardWallet.Fetch_Failure(error)));
  };

export const getTransactionHistoryMiddleware =
  (
    cninc,
    pageNumber1,
    noOfRows1,
    historytoDate,
    historyfromDate,
    OnSuccess,
    OnFailure
  ) =>
  (dispatch) => {
    dispatch(GetWalletHistory.Fetch());
    let token = localStorage.getItem("auth");
    let queryParams = `${cninc.trim().length > 0 ? `&Cnic=${cninc}` : ""}${
      historytoDate.trim().length > 0 ? `&StartDate=${historytoDate}` : ""
    }${historyfromDate.trim().length > 0 ? `&EndDate=${historyfromDate}` : ""}`;
    axios
      .get(
        `${URL}${GET_WALLET_HISTORY_PATH}?limit=${noOfRows1}&page=${pageNumber1}${queryParams}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(GetWalletHistory.Fetch_Success(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetWalletHistory.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetWalletHistory.Fetch_Failure(error)));
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

// let queryParams =
//   Status.trim().length > 0
//     ? `&pendingRequests=${Status}`
//     : StartDate.trim().length > 0
//     ? `&StartDate=${StartDate}`
//     : EndDate.trim().length > 0
//     ? `&EndDate=${EndDate}`
//     : "";
