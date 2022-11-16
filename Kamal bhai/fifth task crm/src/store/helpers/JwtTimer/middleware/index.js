import axios from "axios";
import { JwtUser } from "../action";
import { VERIFY_LOGIN_JWT_PATH } from "../constant";
import { BASEURL } from "config/api/URL";

export const JwtDashboard = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(JwtUser.Jwt());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${VERIFY_LOGIN_JWT_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(JwtUser.JwtSuccess(res.data.response));
        dispatch(OnSuccess(res.data.response));
      } else {
        dispatch(JwtUser.JwtFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(JwtUser.JwtFailure(error)));
};
