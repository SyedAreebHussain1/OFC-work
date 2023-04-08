import axios from "axios";
import {
  ViewQuotationDetail,
  ViewQuotationStatus,
  ViewUpdateStatus,
} from "../action/index";
import {
  GET_ALL_QUOTATION_PATH,
  QUOTATION_DETAILS_PATH,
  UPDATE_DETAILS_PATH,
} from "../constant";
import { BASEURL, URL } from "config/api/URL";

export const GetAllQuotation =
  (
    page,
    limit,
    SaleQuotationNo,
    QuotationStatusName,
    user_phone,
    OnSuccess,
    OnFailure
  ) =>
  (dispatch) => {
    dispatch(ViewQuotationDetail.ViewQuotation());
    let token = localStorage.getItem("auth");
    axios

      .get(
        `${BASEURL}${GET_ALL_QUOTATION_PATH}?page=${page}&limit=${limit}${
          SaleQuotationNo !== null && SaleQuotationNo !== ""
            ? `&SaleQuotationNo=${SaleQuotationNo}`
            : ""
        }${
          QuotationStatusName !== null && QuotationStatusName !== ""
            ? `&QuotationStatusName=${QuotationStatusName}`
            : ""
        }${
          user_phone !== "" && user_phone !== null
            ? `&user_phone=${user_phone}`
            : ""
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(ViewQuotationDetail.ViewQuotationSuccess(res.data));
          dispatch(OnSuccess(res.data));
        } else {
          dispatch(ViewQuotationDetail.ViewQuotationFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(ViewQuotationDetail.ViewQuotationFailure(error))
      );
  };

export const GetAllQuotationStatus = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(ViewQuotationStatus.ViewQuotationStatus());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${QUOTATION_DETAILS_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(
          ViewQuotationStatus.ViewQuotationStatusSuccess(res.data.response)
        );
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(ViewQuotationStatus.ViewQuotationFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) =>
      dispatch(ViewQuotationStatus.ViewQuotationStatusFailure(error))
    );
};

export const GetAllUpdateStatus =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(ViewUpdateStatus.ViewUpdateStatus());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${UPDATE_DETAILS_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(ViewUpdateStatus.ViewUpdateStatusSuccess(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(ViewUpdateStatus.ViewUpdateFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(ViewUpdateStatus.ViewUpdateStatusFailure(error))
      );
  };
