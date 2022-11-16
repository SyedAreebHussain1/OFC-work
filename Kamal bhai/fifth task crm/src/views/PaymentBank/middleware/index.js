import axios from "axios";
import { GetPaymentBank, ApproveBank } from "../action/index";
import { GET_PAYMENT_BANK_PATH, APPROVE_PAYMENT_BANK_PATH } from "../constant";
import { BASEURL, URL } from "config/api/URL";

export const getPaymentBankMiddleware =
  (body, noOfRows, pageNumber, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(GetPaymentBank.Fetch());

    let token = localStorage.getItem("auth");
    axios
      .get(
        `${URL}${GET_PAYMENT_BANK_PATH}?user_name=${
          body?.user_name || ""
        }&Amount=${body?.amount || ""}&Datetime=${
          body?.date || ""
        }&limit=${noOfRows}&page=${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(GetPaymentBank.Fetch_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(GetPaymentBank.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(GetPaymentBank.Fetch_Failure(error)));
  };

export const ApproveBank_Middleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(ApproveBank.Approve());
    let token = localStorage.getItem("auth");
    // let token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGVfaWQiOjUsIkRhc2hib2FyZHVzZXJpZCI6MSwiQ05JQyI6IjQyMTAxMTYxNDkxNjMiLCJlbWFpbCI6InVzbWFuaXJmYW5AZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJuYW1lIjoiVXNtYW4gSXJmYW4iLCJwaG9uZU5vIjoiMDMxMDI5MjI5MzAiLCJzdGF0dXNfaWQiOjE1LCJEZXNjcmlwdGlvbiI6IiIsIkRhdGV0aW1lIjoiMjAyMS0xMS0wNVQxNzowNTowNy4wMDBaIiwidGVhbWlkIjpudWxsLCJ1c2VyX3JvbGVfbmFtZSI6IkFkbWluIn0sImlhdCI6MTY1MzU2MTc5NywiZXhwIjoxNjU2MTUzNzk3fQ.8CXrYXD1hmR0LYZBw--0INN6a-HulZGVAhKW53AnsJs";
    axios
      .post(`${URL}${APPROVE_PAYMENT_BANK_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(ApproveBank.Approve_Success(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(ApproveBank.Approve_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(ApproveBank.Approve_Failure(error)));
  };
