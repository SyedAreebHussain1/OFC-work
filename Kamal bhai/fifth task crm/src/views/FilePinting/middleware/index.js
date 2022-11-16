import axios from "axios";
import {
  FILE_DOCUMENTS_PATH,
  GET_FILE_DOWNLOAD_CUSTOMER_PATH,
} from "../constant";
import { FileDownloadCustomers, GetFileDocuments } from "../action";
import { BASEURL } from "config/api/URL";

export const GetFileDownloadCustomers =
  (page, limit, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(FileDownloadCustomers.Fetch());

    let token = localStorage.getItem("auth");
    axios
      .get(
        `${BASEURL}${GET_FILE_DOWNLOAD_CUSTOMER_PATH}?page=${page}&limit=${limit}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          dispatch(FileDownloadCustomers.FetchSuccess(res.data));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(FileDownloadCustomers.FetchFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(FileDownloadCustomers.FetchFailure(error)));
  };

export const FileDocuments = (id, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(GetFileDocuments.Fetch());
  let token = localStorage.getItem("auth");
  axios
    .get(`${BASEURL}${FILE_DOCUMENTS_PATH}?SaleOrderId=${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(GetFileDocuments.FetchSuccess(res.data.response));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(GetFileDocuments.FetchFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(GetFileDocuments.FetchFailure(error)));
};
