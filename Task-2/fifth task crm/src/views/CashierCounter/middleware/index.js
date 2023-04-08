import axios from "axios";
import {
  CreateBookingReceipt,
  FetchBookingReceipt,
} from "../actions";
import {
  CREATE_BOOKING_RECEIPT_PATH,
  GET_BOOKING_RECEIPT_PATH,
} from "../constants";
import { BASEURL } from "config/api/URL";

export const createBookingReceipt =
  (body, onSuccess, onFailure) => (dispatch) => {
    dispatch(CreateBookingReceipt.Create());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${CREATE_BOOKING_RECEIPT_PATH}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(CreateBookingReceipt.CreateSuccess(res.data.response));
          dispatch(onSuccess(res.data));
        } else {
          dispatch(CreateBookingReceipt.CreateFailure(res.data.message));
          dispatch(onFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(CreateBookingReceipt.CreateFailure(error)));
  };

export const getBookingReceipt = (body, onSuccess, onFailure) => (dispatch) => {
  dispatch(FetchBookingReceipt.Fetch());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${GET_BOOKING_RECEIPT_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchBookingReceipt.FetchSuccess(res.data.response));
        dispatch(onSuccess(res.data.message));
      } else {
        dispatch(FetchBookingReceipt.FetchFailure(res.data.message));
        dispatch(onFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchBookingReceipt.FetchFailure(error)));
};
