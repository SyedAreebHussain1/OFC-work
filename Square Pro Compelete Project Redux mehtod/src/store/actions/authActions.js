import { SIGNIN_SUCCESS } from "../../constants/authConstants";
import * as api from "../../config/api/authApis";

export const signIn = (body, onSuccess, onFailure) => async (dispatch) => {
  try {
    let { data } = await api.signInApi(body);
    let token = data.data.token;

    localStorage.setItem("token", token);

    dispatch({ type: SIGNIN_SUCCESS, payload: token });
    dispatch(onSuccess(token));
  } catch (error) {
    if (error?.response?.data?.message) {
      let message = error.response.data.message;
      onFailure(message);
    } else if (error?.message) {
      if (error.message.includes("Network")) {
        onFailure(error.message);
      }
    }
  }
};
