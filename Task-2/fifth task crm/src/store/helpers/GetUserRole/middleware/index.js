import axios from "axios";
import { FetchUserRole } from "../action";
import { GET_USER_ROLE_PATH } from "../constant";
import { BASEURL } from "config/api/URL";

export const GetUserRole = (OnSuccess, OnFailure) => (dispatch) => {
  dispatch(FetchUserRole.Fetch());
  let token = localStorage.getItem("auth");

  axios
    .get(`${BASEURL}${GET_USER_ROLE_PATH}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`, 

        
      },
    })
    .then((res) => {
      if (res.data.status === true) {
        dispatch(FetchUserRole.FetchSuccess(res.data.response));
        dispatch(OnSuccess(res.data.response));
      } else {
        dispatch(FetchUserRole.FetchFailure(res.data.message));
        dispatch(OnFailure(res.data.message));
      }
    })
    .catch((error) => dispatch(FetchUserRole.FetchFailure(error)));
};
