import axios from "axios";
import { UserLogin, NavMenuAction } from "../action";
import { LOGIN_PATH, NAV_MENU_PATH } from "../constant";
import { BASEURL } from "config/api/URL";

export const CheckLogin = (body, OnSuccess, OnFailure) => (dispatch) => {
  dispatch(UserLogin.Login());
  let token = localStorage.getItem("auth");
  axios
    .post(`${BASEURL}${LOGIN_PATH}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(UserLogin.LoginSuccess(res.data.response));
        dispatch(OnSuccess(res.data.response));
      } else {
        dispatch(UserLogin.LoginFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })

    .catch(function (error) {
      if (error.response) {
        OnFailure(error.response.data);
      }
    });
};

export const navMenuMiddleware =
  (token, OnSuccess, OnFailure) => (dispatch) => {
    dispatch(NavMenuAction.Fetch());
    axios
      .get(`${BASEURL}${NAV_MENU_PATH}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          dispatch(NavMenuAction.Fetch_Success(res.data.response));
          dispatch(OnSuccess(res.data.response));
        } else {
          dispatch(NavMenuAction.Fetch_Failure(res.data.message));
          dispatch(OnFailure(res.data.message));
        }
      })

      .catch(function (error) {
        if (error.response) {
          OnFailure(error.response.data);
        }
      });
  };
