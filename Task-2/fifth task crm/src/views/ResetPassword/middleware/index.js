import axios from "axios";
import { UserReset } from "../action"; //done
import { RESET_PATH } from "../constant"; //done
import { BASEURL } from "config/api/URL"; //done

export const ResetPassword = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(UserReset.Login());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${RESET_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(UserReset.LoginSuccess(res.data.token));
        dispatch(OnSuccess(res.data.message));
      } else {
        dispatch(UserReset.LoginFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(UserReset.LoginFailure(error)));
};
