import axios from "axios";
import {
  VerificationNoDetail,
  InsertVerificationDetail,
} from "../action/index";
import {
  VERIFICATIONNO_PATH,
  INSERT_VERIFICATION_DATA_PATH,
} from "../constant";
import { BASEURL, URL, URLForFile } from "config/api/URL";

export const InsertVerificationDetailMiddleware =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(InsertVerificationDetail.Insert());
    let token = localStorage.getItem("auth");
    axios
      .post(`${BASEURL}${INSERT_VERIFICATION_DATA_PATH}`, body, {
        headers: {
          //  "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(InsertVerificationDetail.InsertSuccess(res.data.response));
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(InsertVerificationDetail.InsertFailure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(InsertVerificationDetail.InsertFailure(error))
      );
  };
export const InsertVerificationFile =
  (body, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(VerificationNoDetail.VerificationNo());
    let token = localStorage.getItem("auth");
    axios
      .put(`${BASEURL}${VERIFICATIONNO_PATH}`, body, {
        headers: {
          //  "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(
            VerificationNoDetail.VerificationNoSuccess(res.data.response)
          );
          dispatch(OnSuccess(res.data.message));
        } else {
          dispatch(
            VerificationNoDetail.VerificationNoFailure(res.data.message)
          );
          dispatch(OnFailure(res.data.message));
        }
      })
      .catch((error) =>
        dispatch(VerificationNoDetail.VerificationNoFailure(error))
      );
  };
