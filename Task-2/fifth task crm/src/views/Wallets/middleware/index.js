import axios from "axios";
import { GetUserInfo, GetTransactionHistory } from "../action/index";
import { GET_USER_INFO_PATH, TRANSACTION_HISTORY_PATH } from "../constant";
import { BASEURL, URL } from "config/api/URL";

export const getUserInfoMiddleware =
  (body, noOfRows, pageNumber, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetUserInfo.Fetch());

    let token = localStorage.getItem("auth");
    axios
      .get(
        `${URL}${GET_USER_INFO_PATH}?CNIC=${body?.cnic || ""}&Amount=${
          body?.amount || ""
        }&Datetime=${body?.date || ""}&limit=${noOfRows}&page=${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          // console.log("RESSDATAOFWALLETS", res.data.response);
          dispatch(GetUserInfo.Fetch_Success(res.data.response.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          // console.log("ERRR", res.data);
          dispatch(GetUserInfo.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => {
        dispatch(GetUserInfo.Fetch_Failure(error));
      });
  };

export const getTransactionHistoryMiddleware =
  (id, pageNumber1, noOfRows1, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetTransactionHistory.Fetch());
    let token = localStorage.getItem("auth");
    axios
      .get(
        `${URL}${TRANSACTION_HISTORY_PATH}?CustomerWallet_Id=${id}&limit=${noOfRows1}&page=${pageNumber1}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(GetTransactionHistory.Fetch_Success(res.data.response.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetTransactionHistory.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetTransactionHistory.Fetch_Failure(error)));
  };
